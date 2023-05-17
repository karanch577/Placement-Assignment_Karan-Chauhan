import JWT from 'jsonwebtoken'
import User from '../models/user.schema.js'
import CustomError from '../utils/customError';

export default isLoggedIn = async(req, res, next) => {
    let token;
    if(req.cookies.token || (req.headers.authorization && req.headers.authorization.startsWith("Bearer"))) {
        token = req.cookies.token || req.headers.authorization.split(" ")[1]

        const payload = JWT.verify(token, process.env.JWT_SECRET)

        const user = await User.findById({id: payload._id}, "_id name email")

        if(!user) {
            throw new CustomError("Protected Route", 401)
        }

        req.user = user
        
        next()
    }
}
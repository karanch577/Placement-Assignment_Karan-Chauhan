import User from '../models/user.schema.js'
import CustomError from '../utils/customError.js'
import asyncHandler from '../services/asyncHandler.js'

const cookieOptions = {
    expires: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
    httpOnly: true,
    sameSite: "none",
    secure: true
}

export const signup = asyncHandler(async (req, res) => {

        const {name, email, password} = req.body


        // check if the user is registered or not

        const existingUser = await User.find({email})

        if(existingUser.length) {
            throw new CustomError("User already exist", 401)
        }
        
        const user = await User.create({
            name,
            email,
            password
        })

        if(!user) {
            throw new CustomError("Failed to create the user")
        }

        res.status(200).json({
            success: true, 
            message: "user successfully registered"
        })
})

export const signin = asyncHandler(async (req, res) => {
    const {email, password} = req.body
    if(!email.includes('@')) {
        throw new CustomError("Please enter a valid email address", 400)
    }

    const user = await User.findOne({email}).select("+password")
    
    if(!user) {
        throw new CustomError("User not registered", 400)
    }

    const isUserVerified = await user.comparePassword(password)

    if(!isUserVerified) {
        throw new CustomError("invalid credential", 400)
    }

    const token = user.getJwtToken()

    res.cookie('token', token, cookieOptions)

    // remove the password field
    delete user.password

    res.status(200).json({
        success: true,
        message: "User registered successfully"
    })
})

export const dashboard = asyncHandler(async (req, res) => {
    if(!req.user) {
        throw new CustomError("Issue in cookie", 401)
    }
    res.status(200).json({
        success: true,
        user: req.user
    })
})
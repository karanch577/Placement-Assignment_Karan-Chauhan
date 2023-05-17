import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
import JWT from 'jsonwebtoken'

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide the name"],
        trim: true
    },
    email: {
        type: String,
        required: [true, "Please provide the email"],
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: [true, "Please provide the password"],
        trim: true,
        select: false
    },
    forgotPasswordToken: String,
    forgotPasswordExpiry: Date
}, {
    timestamps: true
})

userSchema.pre("save",async function (next) {
    if(!this.isModified("password")) return next()
    this.password = await bcrypt.hash(this.password, 10)
    next()
})

// schema is a document and it can have its own methods

userSchema.methods = {
    comparePassword: async function(input) {
        return await bcrypt.compare(input, this.password)
    },
    getJwtToken: function() {
        return JWT.sign({
            _id: this._id
        },process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRY
        })
    }
}

export default mongoose.model("User", userSchema)
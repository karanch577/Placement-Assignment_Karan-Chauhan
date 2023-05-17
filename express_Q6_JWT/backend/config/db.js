import mongoose from 'mongoose'

export default function connectDb() {
    try {
        mongoose.connect(process.env.MONGO_URI)
    } catch (err) {
        console.log("Error in connecting DB")
        console.log(err)
        process.exit(1)
    }
}
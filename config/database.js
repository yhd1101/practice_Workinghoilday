import mongoose from "mongoose";

const connectDB = async () =>{
    try {
        await mongoose.connect(process.env.MONGODB_ADDRESS)
        console.log("database connected")
    }catch (err) {
        console.log(err)
    }
}

export default connectDB

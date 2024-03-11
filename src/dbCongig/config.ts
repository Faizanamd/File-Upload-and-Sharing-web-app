
import mongoose from 'mongoose';

export default function connectToMongoose(){
    try {
        mongoose.connect(process.env.MONGO_URL!)
        console.log("mongodb connected");
    } catch (error:any) {
        console.log("Database connection fails: ", error.message)
    }
}
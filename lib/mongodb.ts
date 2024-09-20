import mongoose from "mongoose";

const { MONGODB_URL } = process.env;

export const connectDB = async () => {
    try {
        const { connection } = await mongoose.connect(MONGODB_URL as string);
        if (connection.readyState === 1) {
            console.log('MongoDB connected!');
            Promise.resolve(true);
        }
    } catch(error) {
        console.log(error);
        Promise.reject(error);
    }
}
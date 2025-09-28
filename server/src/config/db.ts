import mongoose from "mongoose";

export async function connectDB() {
    try {
        const mongoUri = process.env.MONGO_URI;
        if (!mongoUri) {
            throw new Error("MONGO_URI is missing in environment variables");
        }

        await mongoose.connect(mongoUri);

        console.log("MONGODB CONNECTED SUCCESSFULLY!");
    } catch (error) {
        console.error("Error connecting to MONGODB", error);
        process.exit(1) // 1 - exit w/ failure, 0 - success
    }
}
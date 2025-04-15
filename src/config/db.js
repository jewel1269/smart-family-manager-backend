import mongoose from "mongoose";

const ConnectBD = (uri) => {
    try {
        mongoose.connect(uri);
        console.log("📦 MongoDB Connected Successfully");
    } catch (error) {
        console.log("❌ Error connecting to MongoDB:", error.message);
    }
};

export default ConnectBD;

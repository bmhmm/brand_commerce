import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async () => {
	try {
		const localURI="mongodb+srv://mmikkiqi22_db_user:nRIQTpbAs9lk3wt6@cluster0.wlzn6ee.mongodb.net/?appName=Cluster0";
		const conn = await mongoose.connect(process.env.MONGO_URI || localURI);
		console.log(`MongoDB connected: ${conn.connection.host}`);
	} catch (error) {
		console.log("Error connecting to MONGODB", error.message);
		process.exit(1);
	}
};

import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";

dotenv.config();

cloudinary.config({
	cloud_name: process.env.CLOUDINARY_CLOUD_NAME || "jmcig024",
	api_key: process.env.CLOUDINARY_API_KEY || "448853627788595",
	api_secret: process.env.CLOUDINARY_API_SECRET || "C91Mc7HWXWbx8mAjf4V115jjiec",
});

export default cloudinary;

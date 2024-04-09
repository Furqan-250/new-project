import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_NAME}`
    );
    console.log(`\n MongoDB Connected !! DB Host ${connectionInstance}`);
  } catch (error) {
    console.log("MongoDB connect Faild: ", error);
    process.exit(1);
  }
};

export default connectDB;

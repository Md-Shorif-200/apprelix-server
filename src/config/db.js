import mongoose from "mongoose";
import config from "./index.js";

export const connectDB = async () => {
  if (!config.mongoUri) {
    throw new Error("MONGOOSE_URL is not defined in environment variables.");
  }

  await mongoose.connect(config.mongoUri);

  console.log("MongoDB connected successfully");
};

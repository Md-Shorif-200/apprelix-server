import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String },
    password: { type: String, required: true },

    role: {
      type: String,
      enum: ["buyer", "supplier"],
      required: true,
    },

    companyName: String,
    companyWebsite: String,
    country: String,
    city: String,
    companyAddress: String,
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
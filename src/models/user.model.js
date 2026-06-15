import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String },
    password: { type: String, required: true },

    role: {
      type: String,
      enum: ["buyer", "supplier","admin"],
      required: true,
    },

    companyName: String,
    companyWebsite: String,
    country: String,
    city: String,
    companyAddress: String,
    
profilePhoto: {
  type: String,
  default: "",
},
 
    roleDetails: {
      type: mongoose.Schema.Types.Mixed,
      default: {},
    },

        status: {
      type: String,
      enum: ["pending", "accepted", "rejected","blocked"],
      default: "pending",
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
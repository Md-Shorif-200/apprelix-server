import mongoose from "mongoose";

const roleDetailsSchema = new mongoose.Schema(
  {
    factoryName: { type: String, required: true },
    productionCapacity: { type: String, required: true },
    yearEstablished: { type: String, required: true },
    numberOfEmployees: { type: String, required: true },
    productCategories: { type: [String], required: true },
    factoryLocation: { type: String, required: true },
  },
  { _id: false },
);

const companyInfoSchema = new mongoose.Schema(
  {
    companyName: { type: String, index: true },
    companyWebsite: String,
       companyLogo: {
      type: String,
      default: "",
    },
    location: {
      countryCode: String,
      countryName: String,
      stateCode: String,
      stateName: String,
      city: String,
    },
    streetAddress: String,

  },
  { _id: false },
);

const userSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true, index: true },
    phone: { type: String },
    password: { type: String, required: true },

    role: {
      type: String,
      enum: ["buyer", "supplier", "admin"],
      required: true,
      index: true,
    },

    companyName: {
      type: String,
      index: true,
    },
    companyInfo: {
      type: companyInfoSchema,
    },

    profilePhoto: {
      type: String,
      default: "",
    },
    roleDetails: {
      type: roleDetailsSchema,
      required: function () {
        return this.role === "supplier";
      },
      default: undefined,
    },

    status: {
      type: String,
      enum: ["pending", "accepted", "rejected", "blocked"],
      default: "pending",
      index: true,
    },
  },
  { timestamps: true },
);

export const User = mongoose.model("User", userSchema);

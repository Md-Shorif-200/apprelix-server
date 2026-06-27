import mongoose, { Schema, Document } from "mongoose";

const UploadedFileSchema = new Schema(
  {
    url: { type: String, required: true },
    publicId: { type: String, required: true },
  },
  { _id: false },
);

const RfqSchema = new Schema(
  {
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },

    // --- Product Details ---
    rfq_title: { type: String, required: true, trim: true },
    product_category: { type: String, required: true },
    gender: { type: String, required: true },
    material_febric: { type: String, required: true },
    febric_gsm: { type: Number, required: true },
    required_colors: { type: [String], required: true },
    product_sizes: { type: [String], required: true },
    total_quantity: { type: Number, required: true },
    sample_requirement: { type: String, required: true },
    printing_embroidery: { type: String, required: true },
    packaging_requirement: { type: String, required: true },

    // --- Business & Logistics ---
    budget_per_piece: { type: Number }, // এটি optional হতে পারে
    total_budget: { type: Number }, // এটিও optional হতে পারে
    required_delivery_date: { type: Date, required: true },
    deliveryCountry: { type: String, required: true },
    delivery_place: { type: String, required: true },
    Incoterms: { type: String, required: true },
    payment_terms: { type: String, required: true },

    // --- Description & Attachments ---
    description: { type: String, required: true },
    certifications: { type: [String] }, // এটি optional

    referenceImages: [UploadedFileSchema],
    techSheet: UploadedFileSchema,
    otherAttachments: [UploadedFileSchema],

    status: {
      type: String,
      enum: [
        "pending",
        "active",
        "rejected",
        // 'awaiting_selection',
        "supplier_selected",
        "completed",
        "cancelled",
        "expired",
      ],
      default: "pending",
      index: true,
    },

    rejectionReason: {
      type: String,
      required: function () {
        return this.status === "rejected";
      },
    },
  },
  {
    timestamps: true,
  },
);

export const Rfq = mongoose.models.Rfq || mongoose.model("Rfq", RfqSchema);

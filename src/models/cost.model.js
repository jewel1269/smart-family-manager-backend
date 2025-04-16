import mongoose from "mongoose";

const costSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    cost: {
      type: Number,
      required: true,
    },
    attachmentImage: {
      type: String,
      default: null,
    },
    category: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    note: {
      type: String,
      default: "",
    },
    paymentMethod: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Cost = mongoose.model("Cost", costSchema);
export default Cost;

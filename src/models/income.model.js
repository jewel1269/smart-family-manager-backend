import mongoose from "mongoose";

const incomeSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    income: {
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

const Income = mongoose.model("Income", incomeSchema);
export default Income;

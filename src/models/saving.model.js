import mongoose from "mongoose";

const savingSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  amount: {
    type: String,
    required: true,
  },
  person: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ["taken", "given", "saving"],
    required: true,
  },
  loanDate: {
    type: String,
    required: true,
  },
  dueDate: {
    type: String,
    required: true,
  },
});

const Savings = mongoose.model("Saving", savingSchema);
export default Savings;

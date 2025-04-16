import mongoose from "mongoose";

const grocerySchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  buyer: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  note: {
    type: String,
  }
});

const Grocery = mongoose.model("Grocery", grocerySchema);

export default Grocery;

import mongoose from "mongoose";

const semesterSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    semesterNo: {
      type: String,
      required: true,
    },
    creditNo: {
      type: Number,
      required: true,
    },
    sgpa: {
      type: Number,
      required: true,
    },
    tuitionFee: {
      type: Number,
      required: true,
    },
    regFee: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Semester = mongoose.model("Semester", semesterSchema);
export default Semester;

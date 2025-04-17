import Income from "../models/income.model.js";
import { ObjectId } from "mongodb";

export const AddIncome = async (req, res, next) => {
  try {
    const {
      email,
      income,
      category,
      paymentMethod,
      note,
      date,
      attachmentImage,
    } = req.body;

    if (!income || !category || !paymentMethod || !date) {
      return res.status(400).json({ message: "সব প্রয়োজনীয় তথ্য দিন।" });
    }

    const newIncome = new Income({
      email,
      income,
      category,
      paymentMethod,
      note,
      date,
      attachmentImage,
    });

    await newIncome.save();

    console.log(newIncome);

    res.status(200).json({
      message: "আয় সফলভাবে যোগ হয়েছে ✅",
      data: newIncome,
    });
  } catch (err) {
    console.error("ইনকাম যোগ করতে সমস্যা:", err);
    next(err);
  }
};

export const getAllIncome = async (req, res, next) => {
    try {
      const { email } = req.params;
  
      if (!email) {
        return res.status(400).json({ message: "ইমেইল প্রদান করা হয়নি।" });
      }
  
      const allIncome = await Income.find({ email }).sort({ date: -1 }); 
  
      res.status(200).json({
        success:true,
        message:"Data Successfully retrive",
        data: allIncome
      });
    } catch (error) {
      console.error("ইনকাম লোড করতে সমস্যা:", error);
      res.status(500).json({ message: "সার্ভার ত্রুটি।" });
    }
  };

  export const deleteIncome= async (req, res, next) => {
    try {
      const { id } = req.params;
  
  
      if (!id) {
        return res.status(400).json({ success: false, message: "আইডি প্রয়োজন!" });
      }
  
      const deleted = await Income.findOneAndDelete({ _id: new ObjectId(id) });
  
      if (!deleted) {
        return res.status(404).json({
          success: false,
          message: "ডেটা পাওয়া যায়নি বা ইতিমধ্যে ডিলিট হয়েছে!",
        });
      }
  
      res.status(200).json({
        success: true,
        message: "ডেটা সফলভাবে ডিলিট হয়েছে!",
      });
    } catch (err) {
      next(err)
      console.error("deleteSemester Error:", err.message);
      res.status(500).json({
        success: false,
        message: "সার্ভার ত্রুটি!",
      });
    }
  };
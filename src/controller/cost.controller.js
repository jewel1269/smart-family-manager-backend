import Cost from "../models/cost.model.js";
import { ObjectId } from "mongodb";


export const AddCost = async (req, res, next) => {
  try {
    const {
      email,
      cost,
      category,
      paymentMethod,
      note,
      date,
      attachmentImage,
    } = req.body;

    if (!cost || !category || !paymentMethod || !date) {
      return res.status(400).json({ message: "সব প্রয়োজনীয় তথ্য দিন।" });
    }

    const newCost = new Cost({
      email,
      cost,
      category,
      paymentMethod,
      note,
      date,
      attachmentImage,
    });

    await newCost.save();

    console.log(newCost);

    res.status(200).json({
      message: "খরচ  সফলভাবে যোগ হয়েছে ✅",
      data: newCost,
    });
  } catch (err) {
    console.error("খরচ  যোগ করতে সমস্যা:", err);
    next(err);
  }
};

export const getAllCost = async (req, res, next) => {
  try {
    const { email } = req.params;

    if (!email) {
      return res.status(400).json({ message: "ইমেইল প্রদান করা হয়নি।" });
    }

    const allCost = await Cost.find({ email }).sort({ date: -1 });

    res.status(200).json({
      success: true,
      message: "Data Successfully retrive",
      data: allCost,
    });
  } catch (err) {
    next(err);
    res.status(500).json({ message: "সার্ভার ত্রুটি।" });
  }
};

export const deleteCost = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res
        .status(400)
        .json({ success: false, message: "আইডি প্রয়োজন!" });
    }

    const deleted = await Cost.findOneAndDelete({ _id: new ObjectId(id) });

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
    next(err);
    console.error("deleteSemester Error:", err.message);
    res.status(500).json({
      success: false,
      message: "সার্ভার ত্রুটি!",
    });
  }
};

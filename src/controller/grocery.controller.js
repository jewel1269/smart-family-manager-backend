import Grocery from "../models/grocery.model.js";


export const AddGrocery = async (req, res, next) => {
  try {
    const {
      email,
      price,
      category,
      title,
      buyer,
      note,
      date
    } = req.body;

    if (!email || !category || !price || !date) {
      return res.status(400).json({ message: "সব প্রয়োজনীয় তথ্য দিন।" });
    }

    const newItem = new Grocery({
      email,
      price,
      category,
      title,
      buyer,
      note,
      date
    });

    await newItem.save();

    console.log(newItem);

    res.status(200).json({
      message: "বাজার সফলভাবে যোগ হয়েছে ✅",
      data: newItem,
    });
  } catch (err) {
    console.error("বাজার যোগ করতে সমস্যা:", err);
    next(err);
  }
};

export const getAllGrocery = async (req, res, next) => {
  try {
    const { email } = req.params;

    if (!email) {
      return res.status(400).json({ message: "ইমেইল প্রদান করা হয়নি।" });
    }

    const allIncome = await Grocery.find({ email }).sort({ date: -1 });

    res.status(200).json({
      success: true,
      message: "Data Successfully retrive",
      data: allIncome,
    });
  } catch (error) {
    console.error("বাজার লোড করতে সমস্যা:", error);
    res.status(500).json({ message: "সার্ভার ত্রুটি।" });
  }
};

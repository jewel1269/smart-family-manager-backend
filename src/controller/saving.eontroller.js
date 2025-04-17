import Savings from "../models/saving.model.js";

export const CreateSavingOrLoad = async (req, res, next) => {
  try {
    const { email, amount, person, type, loanDate, dueDate, id } = req.body;

    if (!email || !amount || !person || !type || !loanDate || !dueDate || !id) {
      return res
        .status(400)
        .json({ message: "সব ফিল্ড পূরণ করা বাধ্যতামূলক।" });
    }

    const newEntry = new Savings({
      email,
      id,
      amount,
      person,
      type,
      loanDate,
      dueDate,
    });

    await newEntry.save();

    res.status(200).json({
      success: true,
      message: "সফলভাবে সেভ হয়েছে ✅",
      data: newEntry,
    });
  } catch (err) {
    next(err);
    console.error("সেভ করার সময় সমস্যা:", error.message);
    res.status(500).json({ message: "সার্ভার এরর ❌", error: err.message });
  }
};



export const getSavingOrLoad = async (req, res, next) => {
  try {
    const { email } = req.params;

    if (!email) {
      return res.status(400).json({ success: false, message: "ইমেইল প্রয়োজন!" });
    }

    const data = await Savings.find({ email });

    res.status(200).json({
      success: true,
      message: "ডেটা সফলভাবে পাওয়া গেছে!",
      data,
    });
  } catch (error) {
    console.error("getSavingOrLoad Error:", error.message);
    res.status(500).json({
      success: false,
      message: "সার্ভার ত্রুটি!",
    });
  }
};


export const deleteSavingOrLoad = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ success: false, message: "আইডি প্রয়োজন!" });
    }

    const deleted = await Savings.findOneAndDelete({ id });

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
    console.error("deleteSavingOrLoad Error:", err.message);
    res.status(500).json({
      success: false,
      message: "সার্ভার ত্রুটি!",
    });
  }
};
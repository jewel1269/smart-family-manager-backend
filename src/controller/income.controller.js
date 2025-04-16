import Income from "../models/income.model.js";

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
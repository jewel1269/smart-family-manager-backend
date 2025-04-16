import Cost from "../models/cost.model.js";


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

    const newIncome = new Cost({
      email,
      cost,
      category,
      paymentMethod,
      note,
      date,
      attachmentImage,
    });

    await newIncome.save();

    console.log(newIncome);

    res.status(200).json({
      message: "খরচ  সফলভাবে যোগ হয়েছে ✅",
      data: newIncome,
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
        success:true,
        message:"Data Successfully retrive",
        data: allCost
      });
    } catch (err) {
      next(err)
      res.status(500).json({ message: "সার্ভার ত্রুটি।" });
    }
  };
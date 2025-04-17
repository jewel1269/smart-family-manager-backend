import Semester from "../models/semester.model.js";

export const CreateSemester = async (req, res, next) => {
  try {
    const {email,  semesterNo, creditNo, sgpa, tuitionFee, regFee } = req.body;

    const newSemester = new Semester({
      email,
      semesterNo,
      creditNo,
      sgpa,
      tuitionFee,
      regFee,
    });

    const savedSemester = await newSemester.save();

    console.log(savedSemester);

    res.status(200).json({
      success: true,
      message: "সেমিস্টার তথ্য সফলভাবে সংরক্ষণ করা হয়েছে।",
      data: savedSemester,
    });
  } catch (error) {
    res.status(500).json({
      message: "সেমিস্টার তথ্য সংরক্ষণে সমস্যা হয়েছে।",
      error: error.message,
    });
  }
};

export const getResult = async (req, res) => {
  try {
    const { email } = req.params;

    const findResult = await Semester.find({ email })

    if (findResult.length === 0) {
      return res.status(404).json({
        message: "এই ইমেইলের জন্য কোনো সেমিস্টার তথ্য পাওয়া যায়নি।",
      });
    }

    res.status(200).json({
      success: true,
      message: "সফলভাবে ফলাফল পাওয়া গেছে।",
      data: findResult,
    });
  } catch (error) {
    res.status(500).json({
      message: "ফলাফল বের করতে গিয়ে একটি ত্রুটি ঘটেছে।",
      error: error.message,
    });
  }
};

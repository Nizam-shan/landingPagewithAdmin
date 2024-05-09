const higherStudies = require("../models/higherStudies");
const otplogSchema = require("../models/otplogSchema");
const ErrorResponse = require("../utiles/errorResponse");
const SuccessResponse = require("../utiles/successResponse");

exports.sendOtp = async (req, res) => {
  try {
    const { phone_number } = req.body;
    const otp = "123456";
    const otpLog = await otplogSchema.create({
      phone_number: phone_number,
      otp: otp,
      verification: "pending",
      timeStamp: new Date(),
    });

    // await sendSMS(phone_number,"otp")
    const successResponse = new SuccessResponse("OTP sent successfully", {
      otpLogId: otpLog._id,
    });
    res.status(200).json(successResponse);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};
exports.verifyOtp = async (req, res) => {
  try {
    // const { userId, otpLogId, enteredOtp } = req.body;

    // const otpLog = await otplogSchema.findById(otpLogId);

    // // if (
    // //   !otpLog ||
    // //   otpLog.userId !== userId ||
    // //   otpLog.otp !== enteredOtp ||
    // //   otpLog._id !== otpLogId
    // // ) {
    // //   throw new ErrorResponse("Invalid Otp", 400);
    // // }
    // if (!otpLog) {
    //   throw new ErrorResponse("OTP log entry not found", 400);
    // } else if (otpLog.userId.toString() !== userId.toString()) {
    //   throw new ErrorResponse("Invalid user for this OTP", 400);
    // } else if (otpLog.otp !== enteredOtp) {
    //   throw new ErrorResponse("Incorrect OTP", 400);
    // }
    // otpLog.verification === "success";
    // await otpLog.save();
    // const successResponse = new SuccessResponse("OTP verified successfully");
    // res.status(200).json(successResponse);

    const { otpLogId, otp } = req.body;

    // Find the OTP log in the database using the OTP log ID
    const otpLog = await otplogSchema.findById(otpLogId);
    if (!otpLog) {
      throw new ErrorResponse("Invalid OTP Log ID", 404);
    }

    // Check if the OTP provided by the user matches the OTP stored in the database
    if (otp !== otpLog.otp) {
      throw new ErrorResponse("Invalid OTP", 400);
    }

    // Mark the OTP log as verified
    otpLog.verification = "success";
    await otpLog.save();

    // Respond to the client with the verification status
    const successResponse = new SuccessResponse("OTP verified successfully");
    res.status(200).json(successResponse);
  } catch (error) {
    console.error(error);
    if (error instanceof ErrorResponse) {
      res.status(error.statusCode).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Server Error" });
    }
  }
};

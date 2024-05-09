const Joi = require("joi");
const multer = require("multer");
const upload = require("../middleware/upload");

const otplogSchema = require("../models/otplogSchema");
const jobSeeker = require("../models/jobSeeker");
const SuccessResponse = require("../utiles/successResponse");
const higherStudies = require("../models/higherStudies");
const { sendEmail } = require("../middleware/emailService");
const sectionc = require("../models/sectionc");
const jobSeekerModelMySql = require("../models/jobSeekersqlmodel");
const mysql = require("mysql");
const connection = require("../database");
const ErrorResponse = require("../utiles/errorResponse");
const higherstudiesModelMySql = require("../models/higherStudiessqlModel");
const sectionCModelMySql = require("../models/sectionCsqlModel");

const jobSeekerValiation = Joi.object({
  name: Joi.string().allow(""),
  email: Joi.string().email().required(),
  age: Joi.number().allow(""),
  gender: Joi.string().allow(""),
  resume: Joi.string(),
  phone_number: Joi.string().required(),
  qualification: Joi.string().allow(""),
});

// exports.createJobSeeker = async (req, res) => {
//   // console.log("🚀 ~ exports.createJobSeeker= ~ req:", req);

//   try {
//     const { error } = jobSeekerValiation.validate(req.body);
//     if (error) {
//       throw new ErrorResponse(error?.details[0].message, 400);
//     }

//     if (req.files) {
//       upload.single("resume"),
//         (req, res) => {
//           // Access the uploaded file via req.file
//           if (!req.file) {
//             return res.status(400).send("No file uploaded.");
//           }

//           // File upload successful, send response
//           res.send("File uploaded successfully: " + req.file.filename);
//         };
//     }

//     const resumePath = req.file ? req.file.path : "";
//     const { name, email, age, gender, phone_number, qualification } = req.body;
//     // const otp = await generateOtp()
//     // const otp = "123456";

//     // await otpLog.save();
//     const emailBody = "success";
//     // await emailservice.sendMail("")

//     const existingJobSeeker = await jobSeeker.findOne({
//       $or: [{ email }, { phone_number }],
//     });

//     if (existingJobSeeker) {
//       throw new ErrorResponse("Email or Phone number already registered", 409);
//     }
//     const NewJobSeeker = new jobSeeker({
//       name,
//       age,
//       gender,
//       qualification,
//       email,
//       resume: resumePath,
//       phone_number,
//     });

//     await NewJobSeeker.save();

//     // const emailContent = "Thank you for registering as a job seeker.";
//     // const emailSubject = "Registration Successful";
//     // const toEmail = NewJobSeeker.email; // Use the recipient's email address
//     // await sendEmail(toEmail, emailSubject, emailContent);

//     const successResponse = new SuccessResponse(
//       "Your profile is successfully registered with IBS PVT LTD our team will be in touch with you shortly"
//     );
//     res.status(201).json(successResponse);
//   } catch (error) {
//     console.error(error);
//     if (error instanceof ErrorResponse) {
//       res.status(error.statusCode).json({ error: error.message });
//     } else {
//       res.status(500).json({ error: "Server Error" });
//     }
//   }
// };

//sql//

exports.createJobSeeker = async (req, res) => {
  try {
    const { error } = jobSeekerValiation.validate(req.body);
    if (error) {
      throw new ErrorResponse(error?.details[0].message, 400);
    }

    if (req.files) {
      upload.single("resume"),
        (req, res) => {
          // Access the uploaded file via req.file
          if (!req.file) {
            return res.status(400).send("No file uploaded.");
          }

          // File upload successful, send response
          res.send("File uploaded successfully: " + req.file.filename);
        };
    }

    const resumePath = req.file ? req.file.path : "";
    const { name, email, age, gender, phone_number, qualification } = req.body;

    const selectQuery =
      "SELECT * FROM jobSeekerModelMySql WHERE email = ? or phone_number = ?";

    connection.query(
      selectQuery,
      [email, phone_number],
      async (error, results) => {
        if (error) {
          throw error;
        }

        if (results.length > 0) {
          throw new ErrorResponse(
            "Email or Phone number already registered",
            409
          );

          // res
          //   .status(409)
          //   .json({ error: "Email or Phone number already registered" });
        } else {
          const insertQuery =
            "INSERT INTO jobSeekerModelMySql (name, email, age, gender, phone_number, qualification ,resume) VALUES (?,?,?,?,?,?,?)";

          connection.query(
            insertQuery,
            [name, email, age, gender, phone_number, qualification, resumePath],
            (error, results) => {
              if (error) {
                throw error;
              }
            }
          );

          const successResponse = new SuccessResponse(
            "Your profile is successfully registered with IBS PVT LTD our team will be in touch with you shortly"
          );
          res.status(201).json(successResponse);
        }
      }
    );
  } catch (error) {
    // console.error(error);
    if (error instanceof ErrorResponse) {
      res.status(error.statusCode).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Server Error" });
    }
  }
};

///

const HigherStudiesValiation = Joi.object({
  name: Joi.string().allow(""),
  email: Joi.string().email().required(),
  age: Joi.number().allow(""),
  gender: Joi.string().allow(""),
  course_looking_for: Joi.string().allow(""),
  language: Joi.string().allow(""),
  phone_number: Joi.string().required(),
  location: Joi.string().allow(""),
});

// exports.higherStudies = async (req, res) => {
//   // console.log("🚀 ~ exports.createJobSeeker= ~ req:", req);

//   try {
//     const { error } = HigherStudiesValiation.validate(req.body);
//     if (error) {
//       throw new ErrorResponse(error?.details[0].message, 400);
//     }

//     const {
//       name,
//       email,
//       age,
//       gender,
//       phone_number,
//       language,
//       course_looking_for,
//       location,
//     } = req.body;

//     const higherStudiesSeeker = await higherStudies.findOne({
//       $or: [{ email }, { phone_number }],
//     });

//     if (higherStudiesSeeker) {
//       throw new ErrorResponse("Email or Phone number already registered", 409);
//     }
//     const NewHigherStudies = new higherStudies({
//       name,
//       age,
//       gender,
//       email,
//       language,
//       phone_number,
//       course_looking_for,
//       location,
//     });

//     await NewHigherStudies.save();

//     const successResponse = new SuccessResponse(
//       "Your profile is successfully registered with IBS PVT LTD our team will be in touch with you shortly"
//     );
//     res.status(201).json(successResponse);
//   } catch (error) {
//     console.error(error);
//     if (error instanceof ErrorResponse) {
//       res.status(error.statusCode).json({ error: error.message });
//     } else {
//       res.status(500).json({ error: "Server Error" });
//     }
//   }
// };

//sql//

exports.higherStudies = async (req, res) => {
  try {
    const { error } = HigherStudiesValiation.validate(req.body);
    if (error) {
      throw new ErrorResponse(error?.details[0].message, 400);
    }

    const {
      name,
      email,
      age,
      gender,
      phone_number,
      language,
      course_looking_for,
      location,
    } = req.body;

    const selectQuery =
      "SELECT * FROM higherstudiesModelMySql WHERE email = ? or phone_number = ?";
    connection.query(
      selectQuery,
      [email, phone_number],
      async (error, results) => {
        if (error) {
          console.error("Database error:", error);
          res.status(500).json({ error: "Internal Server Error" });
          return; // Exit the callback function after sending the response
        }

        if (results.length > 0) {
          // If there are results, it means the email or phone number is already registered
          const errMessage = "Email or phone number already registered";
          const errResponse = new ErrorResponse(errMessage, 409);
          res.status(errResponse.statusCode).json({
            statusCode: errResponse.statusCode,
            message: errResponse.message,
          });
          return; // Exit the callback function after sending the response
        } else {
          const insertQuery =
            "INSERT INTO higherstudiesModelMySql(name,email,age,gender,phone_number,language,course_looking_for,location) VALUES(?,?,?,?,?,?,?,?)";
          connection.query(
            insertQuery,
            [
              name,
              email,
              age,
              gender,
              phone_number,
              language,
              course_looking_for,
              location,
            ],
            (error, results) => {
              if (error) {
                console.error("Database error:", error);
                res.status(500).json({ error: "Internal Server Error" });
                return;
              }
            }
          );
          const successResponse = new SuccessResponse(
            "Your profile is successfully registered with IBS PVT LTD our team will be in touch with you shortly"
          );
          res.status(201).json(successResponse);
        }
      }
    );
  } catch (error) {
    console.error(error);
    if (error instanceof ErrorResponse) {
      res.status(error.statusCode).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Server Error" });
    }
  }
};

//sql8/

const SectionCValiation = Joi.object({
  email: Joi.string().email().required(),
  name: Joi.string().allow(""),
  phone_number: Joi.string().required(),
  contact_no: Joi.string().required(),
});

// exports.sectionC = async (req, res) => {
//   // console.log("🚀 ~ exports.createJobSeeker= ~ req:", req);

//   try {
//     const { error } = SectionCValiation.validate(req.body);
//     if (error) {
//       throw new ErrorResponse(error?.details[0].message, 400);
//     }

//     const { contact_no, email, phone_number } = req.body;

//     const sectionCcheck = await sectionc.findOne({
//       $or: [{ email }, { phone_number }],
//     });

//     if (sectionCcheck) {
//       throw new ErrorResponse("Email or Phone number already registered", 409);
//     }
//     const NewSectionC = new sectionc({
//       contact_no,
//       email,
//       phone_number,
//     });

//     await NewSectionC.save();
//     const emailContent = "Thank you for registering as a job seeker.";
//     const emailSubject = "Registration Successful";
//     const toEmail = NewSectionC.email; // Use the recipient's email address
//     await sendEmail(toEmail, emailSubject, emailContent);

//     const successResponse = new SuccessResponse(
//       "Thank you our team will be in touch with you shortly"
//     );
//     res.status(201).json(successResponse);
//   } catch (error) {
//     console.error(error);
//     if (error instanceof ErrorResponse) {
//       res.status(error.statusCode).json({ error: error.message });
//     } else {
//       res.status(500).json({ error: "Server Error" });
//     }
//   }
// };

exports.sectionC = async (req, res) => {
  // console.log("🚀 ~ exports.createJobSeeker= ~ req:", req);

  try {
    const { error } = SectionCValiation.validate(req.body);
    if (error) {
      throw new ErrorResponse(error?.details[0].message, 400);
    }

    const { contact_no, email, phone_number } = req.body;

    const selectQuery =
      "SELECT * FROM sectionCModelMySql WHERE email = ? or phone_number = ?";
    connection.query(
      selectQuery,
      [email, phone_number],
      async (error, results) => {
        if (error) {
          throw error;
        }

        if (results.length > 0) {
          throw new ErrorResponse(
            "Email or Phone number already registered",
            409
          );
        } else {
          const insertQuery =
            "INSERT INTO sectionCModelMySql(contact_no, email, phone_number) VALUES (?,?,?)";
          connection.query(
            insertQuery,
            [contact_no, email, phone_number],
            async (error, results) => {
              if (error) {
                throw error;
              }
              const emailContent = "Thank you for registering as a job seeker.";
              const emailSubject = "Registration Successful";
              // const toEmail = NewSectionC.email; // Use the recipient's email address
              await sendEmail(email, emailSubject, emailContent);
              const successResponse = new SuccessResponse(
                "Thank you our team will be in touch with you shortly"
              );
              res.status(201).json(successResponse);
            }
          );
        }
      }
    );
  } catch (error) {
    console.error(error);
    if (error instanceof ErrorResponse) {
      res.status(error.statusCode).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Server Error" });
    }
  }
};

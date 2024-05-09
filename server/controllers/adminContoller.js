const bcrypt = require("bcryptjs");
const Joi = require("joi");
const adminuser = require("../models/adminuser");
const ErrorResponse = require("../utiles/errorResponse");
const SuccessResponse = require("../utiles/successResponse");
const jwt = require("jsonwebtoken");
const keys = require("../config/key");
const jobSeeker = require("../models/jobSeeker");
const higherStudies = require("../models/higherStudies");
const higherstudiesModelMySql = require("../models/higherStudiessqlModel");
const connection = require("../database");
const jobSeekerModelMySql = require("../models/jobSeekersqlmodel");
const sectionCModelMySql = require("../models/sectionCsqlModel");
const path = require("path");
const adminUserModelMySql = require("../models/adminusersqlmodel");
const fs = require("fs");

const registrationJoiValidation = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  phone_number: Joi.string(),
  profile: Joi.string(),
});

// exports.adminRegistration = async (req, res) => {
//   try {
//     const { error } = registrationJoiValidation.validate(req.body);
//     if (error) {
//       throw new ErrorResponse(error?.details[0]?.message, 400);
//     }

//     const { name, email, password, phone_number, profile } = req.body;

//     let admin = await adminuser.findOne({ email });
//     if (!admin) {
//       throw new ErrorResponse("Admin already exist with this email ID", 400);
//     }

//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);

//     admin = new adminuser({
//       name,
//       email,
//       password: hashedPassword,
//       profile,
//       phone_number,
//     });
//     await admin.save();

//     const successResponse = new SuccessResponse("Admin Added successfully");
//     res.status(successResponse.statusCode).json(successResponse);
//   } catch (error) {
//     console.log("error reg", error);
//     if (error instanceof ErrorResponse) {
//       res.status(error.statusCode).json({ error: error.message });
//     } else {
//       res.status(500).json({ error: "Server Error" });
//     }
//   }
// };

// exports.adminLogin = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     let admin = await adminuser.findOne({ email });
//     if (!admin) {
//       throw new ErrorResponse("Not a valid user", 401);
//     }

//     const isMatch = await bcrypt.compare(password, admin.password);
//     if (!isMatch) {
//       throw new ErrorResponse("Invalid credentials", 401);
//     }

//     const payload = { user: { id: admin.id, email: admin.email } };
//     jwt.sign(payload, keys.jwtSecret, { expiresIn: "24h" }, (err, token) => {
//       if (err) {
//         throw new ErrorResponse("Server Error", 500);
//       }

//       const successResponse = new SuccessResponse(
//         "Admin logged in successfully",
//         { token }
//       );
//       res.status(successResponse.statusCode).json(successResponse);
//     });
//   } catch (error) {
//     console.log("error reg", error);
//     if (error instanceof ErrorResponse) {
//       res.status(error.statusCode).json({ error: error.message });
//     } else {
//       res.status(500).json({ error: "Server Error" });
//     }
//   }
// };

// exports.getJobSeeker = async (req, res) => {
//   try {
//     let filter = {};
//     const { contacted, search, page = 1, limit = 10 } = req.query;
//     console.log("🚀 ~ exports.getJobSeeker= ~ page:", page);

//     if (contacted) {
//       filter.contacted = contacted === 1 ? true : false;
//     }

//     if (search) {
//       filter.$or = [
//         { name: { $regex: search, $options: "i" } },
//         { email: { $regex: search, $options: "i" } },
//         { phone_number: { $regex: search, $options: "i" } },
//       ];
//     }

//     const skip = (page - 1) * limit;
//     console.log("🚀 ~ exports.getJobSeeker= ~ skip:", skip);

//     const jobSeekerGet = await jobSeeker
//       .find(filter)
//       .skip(skip)
//       .limit(parseInt(limit));

//     const totalCount = await jobSeeker.countDocuments(filter);
//     const successResposne = new SuccessResponse(
//       "Job Seeker fetched successfully",
//       { jobSeeker: jobSeekerGet, totalCount }
//     );

//     res.status(200).json(successResposne);
//   } catch (error) {
//     console.log("🚀 ~ exports.getJobSeeker= ~ error:", error);
//     if (error instanceof ErrorResponse) {
//       res.status(error.statusCode).json({ error: error.message });
//     } else {
//       res.status(500).json({ error: "Server error" });
//     }
//   }
// };

// higer studeis

// exports.getHigherStudiesData = async (req, res) => {
//   try {
//     let filter = {};
//     const { contacted, search, page = 1, limit = 10 } = req.query;

//     if (contacted) {
//       filter.contacted = contacted === 1 ? true : false;
//     }

//     if (search) {
//       filter.$or = [
//         { name: { $regex: search, $options: "i" } },
//         { email: { $regex: search, $options: "i" } },
//         { phone_number: { $regex: search, $options: "i" } },
//       ];
//     }

//     const skip = (page - 1) * limit;
//     const higherStudiesresponse = await higherStudies
//       .find(filter)
//       .skip(skip)
//       .limit(parseInt(limit));
//     const totalCount = await higherStudies.countDocuments(filter);
//     const successResposne = new SuccessResponse(
//       "Job Seeker fetched successfully",
//       { higherstudeis: higherStudiesresponse, totalCount }
//     );

//     res.status(200).json(successResposne);
//   } catch (error) {
//     if (error instanceof ErrorResponse) {
//       res.status(error.statusCode).json({ error: error.message });
//     } else {
//       res.status(500).json({ error: "Server error" });
//     }
//   }
// };

// job seeker status change

// exports.updateContactedStatus = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const jobSeekerUpdate = await jobSeeker.findById(id);
//     if (!jobSeekerUpdate) {
//       throw new ErrorResponse("Job Seeker not found", 400);
//     }
//     jobSeekerUpdate.contacted = !jobSeekerUpdate.contacted;

//     await jobSeekerUpdate.save();
//     const successResposne = new SuccessResponse(
//       "Job Seeker status changed successfully"
//     );

//     res.status(200).json(successResposne);
//   } catch (error) {
//     if (error instanceof ErrorResponse) {
//       res.status(error.statusCode).json({ error: error.message });
//     } else {
//       res.status(500).json({ error: "Server error" });
//     }
//   }
// };

exports.adminRegistration = async (req, res) => {
  try {
    const { error } = registrationJoiValidation.validate(req.body);
    if (error) {
      throw new ErrorResponse(error?.details[0]?.message, 400);
    }

    const { name, email, password, phone_number, profile } = req.body;

    const selectQuery =
      "SELECT * FROM adminUserModelMySql WHERE email = ? or phone_number = ?";

    connection.query(
      selectQuery,
      [email, phone_number],
      async (error, results) => {
        if (error) {
          console.error("Database error:", error);
          res.status(500).json({ error: "Internal Server Error" });
          return;
        }

        if (results.length > 0) {
          const errMessage = "Email or phone number already registered";
          const errResponse = new ErrorResponse(errMessage, 409);
          res.status(errResponse.statusCode).json({
            statusCode: errResponse.statusCode,
            message: errResponse.message,
          });
          return;
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const insertQuery =
          "INSERT INTO adminUserModelMySql (name, email, password, phone_number, profile) VALUES (?,?,?,?,?)";
        connection.query(
          insertQuery,
          [name, email, hashedPassword, phone_number, profile],
          (error, results) => {
            if (error) {
              console.error("Database error:", error);
              res.status(500).json({ error: "Internal Server Error" });
              return;
            }
            const successResponse = new SuccessResponse(
              "Admin Added successfully"
            );
            res.status(successResponse.statusCode).json(successResponse);
          }
        );
      }
    );
  } catch (error) {
    console.log("error reg", error);
    if (error instanceof ErrorResponse) {
      res.status(error.statusCode).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Server Error" });
    }
  }
};

exports.download = (req, res) => {
  console.log("🚀 ~ req:", req.params);
  try {
    const filename = req.params.filename;
    const filePath = path.join(__dirname, "../my-uploads", filename);

    // Check if the file exists
    if (fs.existsSync(filePath)) {
      // Set appropriate headers for the response
      res.setHeader("Content-disposition", "attachment; filename=" + filename);
      res.setHeader("Content-type", "application/pdf");

      // Create a read stream from the file and pipe it to the response
      const fileStream = fs.createReadStream(filePath);
      fileStream.pipe(res);
    } else {
      res.status(404).json({ error: "Resume not found" });
    }
  } catch (error) {
    console.error("Error downloading resume:", error);
    res.status(500).json({ error: "Server Error" });
  }
};
exports.adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const selectQuery = "SELECT * FROM adminUserModelMySql WHERE email = ?";
    connection.query(selectQuery, [email], async (error, results) => {
      if (error) {
        console.error("Database error:", error);
        res.status(500).json({ error: "Internal Server Error" });
        return;
      }

      if (results.length === 0) {
        const errMessage = "Not a valid user";
        const errResponse = new ErrorResponse(errMessage, 401);
        res.status(errResponse.statusCode).json({
          statusCode: errResponse.statusCode,
          message: errResponse.message,
        });
        return;
      }

      const admin = results[0];
      const isMatch = await bcrypt.compare(password, admin.password);
      if (!isMatch) {
        const errMessage = "Invalid credentials";
        const errResponse = new ErrorResponse(errMessage, 401);
        res.status(errResponse.statusCode).json({
          statusCode: errResponse.statusCode,
          message: errResponse.message,
        });
        return;
      }

      const payload = {
        id: admin.id,
        email: admin.email,
        name: admin.name,
        phone_number: admin.phone_number,
        profile: admin.profile,
      };
      jwt.sign(payload, keys.jwtSecret, { expiresIn: "24h" }, (err, token) => {
        if (err) {
          throw new ErrorResponse("Server Error", 500);
        }

        const successResponse = new SuccessResponse(
          "Admin logged in successfully",
          { token, payload }
        );
        res.status(successResponse.statusCode).json(successResponse);
      });
    });
  } catch (error) {
    console.log("error reg", error);
    if (error instanceof ErrorResponse) {
      res.status(error.statusCode).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Server Error" });
    }
  }
};

exports.getJobSeeker = async (req, res) => {
  try {
    const { contacted, search, page = 1, limit = 10, skip = 0 } = req.query;
    let filterConditions = ""; // Initialize filter conditions string

    // Add contacted filter if provided
    if (contacted) {
      filterConditions += ` contacted = ${contacted === "1" ? 1 : 0} AND `;
    }

    // Add search filter if provided
    if (search) {
      filterConditions += ` (name LIKE '%${search}%' OR email LIKE '%${search}%' OR phone_number LIKE '%${search}%') AND `;
    }

    // Remove trailing 'AND' from filterConditions
    if (filterConditions) {
      filterConditions = filterConditions.slice(0, -5); // Remove last 'AND' and space
    }
    const offset = (page - 1) * limit + parseInt(skip);
    let filterQuery = `SELECT * FROM jobSeekerModelMySql`;
    if (filterConditions) {
      filterQuery += ` WHERE ${filterConditions}`;
    }
    filterQuery += ` LIMIT ${limit} OFFSET ${offset}`;

    connection.query(filterQuery, async (error, results) => {
      if (error) {
        console.error("Database error:", error);
        res.status(500).json({ error: "Server error" });
        return;
      }

      const totalCount = `SELECT COUNT(*) AS totalCount from jobSeekerModelMySql `;

      connection.query(
        totalCount,
        async (totalCountError, totalCountResults) => {
          if (totalCountError) {
            console.error("Database error:", totalCountError);
            res.status(500).json({ error: "Server error" });
            return;
          }
          const totalCount = totalCountResults[0].totalCount;

          const totalPages = Math.ceil(totalCount / limit);
          const pagination = {
            limit: parseInt(limit),
            skip: offset,
            count: results.length,
            data_count: totalCount,
          };
          const successResponse = {
            message: "Job seekers data fetched successfully",
            data: { jobSeekers: results },
            pagination: pagination,
            statusCode: 200,
          };
          res.status(200).json(successResponse);
        }
      );
    });
  } catch (error) {
    if (error instanceof ErrorResponse) {
      res.status(error.statusCode).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Server error" });
    }
  }
};

exports.getHigherStudiesData = async (req, res) => {
  try {
    const { contacted, search, page = 1, limit = 10, skip = 0 } = req.query;
    let filterConditions = ""; // Initialize filter conditions string

    // Add contacted filter if provided
    if (contacted) {
      filterConditions += ` contacted = ${contacted === "1" ? 1 : 0} AND `;
    }

    // Add search filter if provided
    if (search) {
      filterConditions += ` (name LIKE '%${search}%' OR email LIKE '%${search}%' OR phone_number LIKE '%${search}%') AND `;
    }

    // Remove trailing 'AND' from filterConditions
    if (filterConditions) {
      filterConditions = filterConditions.slice(0, -5); // Remove last 'AND' and space
    }
    const offset = (page - 1) * limit + parseInt(skip);
    let filterQuery = `SELECT * FROM higherstudiesModelMySql`;
    if (filterConditions) {
      filterQuery += ` WHERE ${filterConditions}`;
    }
    filterQuery += ` LIMIT ${limit} OFFSET ${offset}`;

    connection.query(filterQuery, async (error, results) => {
      if (error) {
        console.error("Database error:", error);
        res.status(500).json({ error: "Server error" });
        return;
      }

      const totalCount = `SELECT COUNT(*) AS totalCount from higherstudiesModelMySql `;

      connection.query(
        totalCount,
        async (totalCountError, totalCountResults) => {
          if (totalCountError) {
            console.error("Database error:", totalCountError);
            res.status(500).json({ error: "Server error" });
            return;
          }
          const totalCount = totalCountResults[0].totalCount;

          const totalPages = Math.ceil(totalCount / limit);
          const pagination = {
            limit: parseInt(limit),
            skip: offset,
            count: results.length,
            data_count: totalCount,
          };
          const successResponse = {
            message: "Higher Studies data fetched successfully",
            data: { higherstudies: results },
            pagination: pagination,
            statusCode: 200,
          };
          res.status(200).json(successResponse);
        }
      );
    });
  } catch (error) {
    if (error instanceof ErrorResponse) {
      res.status(error.statusCode).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Server error" });
    }
  }
};

exports.getSectionc = async (req, res) => {
  try {
    const { contacted, search, page = 1, limit = 10, skip = 0 } = req.query;
    let filterConditions = ""; // Initialize filter conditions string

    // Add contacted filter if provided
    if (contacted) {
      filterConditions += ` contacted = ${contacted === "1" ? 1 : 0} AND `;
    }
    // Add search filter if provided
    if (search) {
      filterConditions += ` (name LIKE '%${search}%' OR email LIKE '%${search}%' OR phone_number LIKE '%${search}%') AND `;
    }

    // Remove trailing 'AND' from filterConditions
    if (filterConditions) {
      filterConditions = filterConditions.slice(0, -5); // Remove last 'AND' and space
    }
    const offset = (page - 1) * limit + parseInt(skip);
    let filterQuery = `SELECT * FROM sectionCModelMySql`;
    if (filterConditions) {
      filterQuery += ` WHERE ${filterConditions}`;
    }
    filterQuery += ` LIMIT ${limit} OFFSET ${offset}`;

    connection.query(filterQuery, async (error, results) => {
      if (error) {
        console.error("Database error:", error);
        res.status(500).json({ error: "Server error" });
        return;
      }

      const totalCount = `SELECT COUNT(*) AS totalCount from sectionCModelMySql `;

      connection.query(
        totalCount,
        async (totalCountError, totalCountResults) => {
          if (totalCountError) {
            console.error("Database error:", totalCountError);
            res.status(500).json({ error: "Server error" });
            return;
          }
          const totalCount = totalCountResults[0].totalCount;

          const totalPages = Math.ceil(totalCount / limit);
          const pagination = {
            limit: parseInt(limit),
            skip: offset,
            count: results.length,
            data_count: totalCount,
          };
          const successResponse = {
            message: "sectionC data fetched successfully",
            data: { sectionC: results },
            pagination: pagination,
            statusCode: 200,
          };
          res.status(200).json(successResponse);
        }
      );
    });
  } catch (error) {
    if (error instanceof ErrorResponse) {
      res.status(error.statusCode).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Server error" });
    }
  }
};

exports.updateContactedStatusJobSeeker = async (req, res) => {
  try {
    const { id } = req.params;
    const selectQuery = "SELECT * FROM jobSeekerModelMySql WHERE id = ?";
    connection.query(selectQuery, [id], async (error, results) => {
      if (error) {
        console.error("Database error:", error);
        return res.status(500).json({ error: "Server error" });
      }

      if (results.length === 0) {
        return res.status(400).json({ error: "Job Seeker not found" });
      }
      const jobSeekeer = results[0];
      jobSeekeer.contacted = !jobSeekeer.contacted;
      const updateQuery =
        "UPDATE jobSeekerModelMySql  SET contacted = ? WHERE id = ?";
      connection.query(
        updateQuery,
        [jobSeekeer.contacted, id],
        async (updateError, updateResults) => {
          if (updateError) {
            console.error("Database error:", updateError);
            return res.status(500).json({ error: "Server error" });
          }
          const successResposne = new SuccessResponse(
            "Job Seeker status changed successfully"
          );

          res.status(200).json(successResposne);
        }
      );
    });
  } catch (error) {
    if (error instanceof ErrorResponse) {
      res.status(error.statusCode).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Server error" });
    }
  }
};

import React, { useState } from "react";

import PhoneInputWithCountrySelect from "react-phone-number-input";
// import "react-phone-number-input/style.css";
import axios from "axios";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import FileInput from "./file_input";
import { toast } from "react-toastify";
import {
  hgherStudiesForm,
  sendOtp,
  submitForm,
  verifyOtp,
} from "./form_submission.service";
import PhoneInput from "react-phone-input-2";

const HigherStudies = ({ onClose }) => {
  const [phone, setPhone] = useState("");
  const [otpOpen, setOtpOpen] = useState(false);
  const [otp, setOtp] = useState("");
  const [otpLogId, setOtpLogId] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    gender: "male",
    phone_number: "",
    age: 0,
    course_looking_for: "",
    email: "",
    location: "",
    language: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // validateField(name, value);
  };

  const handlePhoneChange = (value) => {
    setPhone(value || "");
    setFormData({ ...formData, phone_number: value || "" });
    // validateField("phone_number", value || "");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await sendOtp(formData.phone_number)
        .then((res) => {
          const data = res.data;
          toast.success(res?.message);
          setOtpLogId(data?.otpLogId);
          //   onClose();

          setOtpOpen(true);
        })
        .catch((err) => {
          console.log("err", err);
          toast.error(err?.response?.data?.error || "otp");
        });
    } catch (error) {
      toast.error("Error submitting form");
      console.error("Error:", error);
    }
  };

  const handleformSubmit = (e) => {
    e.preventDefault();
    try {
      // verifyOtp(otp, otpLogId)
      //   .then((res) => {
      //     if (res.statusCode === 200) {
      hgherStudiesForm(formData)
        .then((res) => {
          const data = res.data;
          toast.success(res.message || "Form submitted successfully");
          // setOtpOpen(false);

          setFormData({
            name: "",
            gender: "male",
            phone_number: "",
            age: "",
            course_looking_for: "",
            language: "",
            email: "",
            location: "",
          });
          setPhone("");
          onClose();
        })
        .catch((error) => {
          console.error("Error:", error);
          toast.error(error?.response?.data?.error || "Error submitting form");
        });
      //   }
      // })
      // .catch((error) => {
      //   console.log("🚀 ~ handleformSubmit ~ error:", error);
      //   toast.error(error?.response?.data?.error || "verify");
      // });
    } catch (error) {
      console.log("err");
    }
  };
  return (
    <form>
      <Box sx={{ p: 3 }}>
        <Box sx={{ mb: 4 }}>
          <Typography
            style={{
              fontSize: "35px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Higher Studies
          </Typography>
        </Box>
        <Grid container spacing={3}>
          <Grid item sm={12} lg={6} md={6} xs={12}>
            <TextField
              type="text"
              name="name"
              label="Name"
              margin="dense"
              fullWidth
              variant="outlined"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
            />
          </Grid>

          <Grid item sm={12} lg={6} md={6} xs={12}>
            {/* <PhoneInputWithCountrySelect
              international
              countryCallingCodeEditable={false}
              defaultCountry="IN"
              value={phone}
              onChange={handlePhoneChange}
              inputStyle={{
                height: "105px",
                border: "none", // Remove the default border
              }}
              style={{
                width: "100%", // Adjust width as needed
                padding: "12px 16px", // Match padding with TextField
                borderRadius: "4px", // Match border radius with TextField
                border: "1px solid rgba(0, 0, 0, 0.23)", // Match border with TextField
                "&:hover": {
                  borderColor: "rgba(0, 0, 0, 0.23)", // Match hover border color with TextField
                },
                "&.Mui-focused": {
                  borderColor: "rgba(0, 0, 0, 0.87)", // Match focused border color with TextField
                },
              }}
            /> */}

            <PhoneInput
              country={"in"}
              inputProps={{
                name: "phone_number",
                required: true,
                autoFocus: true,
              }}
              enableSearch
              value={phone}
              onChange={handlePhoneChange}
              containerStyle={{
                width: "100%",
                backgroundColor: "transparent",
                height: "90%",
                border: " 2px solid #DDE5F6",
                borderRadius: "10px",
              }}
              searchStyle={{
                width: "90%",
                backgroundColor: "#FAF9F6",
                padding: 10,
                height: "100%",
              }}
              inputStyle={{
                width: "100%",
                backgroundColor: "transparent",
                color: "#000",
                height: "100%",
                borderRadius: "10px",
                border: "none",
              }}
            />
            {/* {errors.phone_number && (
              <span style={{ color: "red", fontSize: "15px" }}>
                {errors.phone_number}
              </span>
            )} */}
          </Grid>

          <Grid item sm={12} lg={6} md={6} xs={12}>
            <TextField
              type="email"
              required
              label="Email"
              margin="dense"
              fullWidth
              variant="outlined"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            {/* {errors.email && (
              <span style={{ color: "red", fontSize: "15px" }}>
                {errors.email}
              </span>
            )} */}
          </Grid>

          <Grid item sm={12} lg={6} md={6} xs={12}>
            <TextField
              type="text"
              label="Language"
              margin="dense"
              fullWidth
              variant="outlined"
              name="language"
              placeholder="Language"
              value={formData.language}
              onChange={handleChange}
            />
            {/* {errors.email && (
              <span style={{ color: "red", fontSize: "15px" }}>
                {errors.email}
              </span>
            )} */}
          </Grid>

          <Grid item sm={12} lg={6} md={6} xs={12}>
            {" "}
            <label className="block mb-2 text-sm font-medium">Gender</label>
            <div className="flex items-center">
              <input
                type="radio"
                id="male"
                name="gender"
                value="male"
                checked={formData.gender === "male"}
                onChange={handleChange}
                className="mr-1"
              />
              <label htmlFor="male" className="mr-4">
                Male
              </label>
              <input
                type="radio"
                id="female"
                name="gender"
                value="female"
                checked={formData.gender === "female"}
                onChange={handleChange}
                className="mr-1"
              />
              <label htmlFor="female" className="mr-4">
                Female
              </label>
              <input
                type="radio"
                id="other"
                name="gender"
                value="other"
                checked={formData.gender === "other"}
                onChange={handleChange}
                className="mr-1"
              />
              <label htmlFor="other">Other</label>
            </div>
          </Grid>

          <Grid item sm={12} lg={6} md={6} xs={12}>
            <TextField
              type="number"
              label="Age"
              margin="dense"
              fullWidth
              variant="outlined"
              name="age"
              placeholder="Age"
              value={formData.age}
              onChange={handleChange}
            />
          </Grid>
          <Grid item sm={12} lg={6} md={6} xs={12}>
            <TextField
              type="text"
              margin="dense"
              fullWidth
              variant="outlined"
              label="Course looking for"
              name="course_looking_for"
              placeholder="Course looking for"
              value={formData.course_looking_for}
              onChange={handleChange}
            />
          </Grid>

          <Grid item sm={12} lg={6} md={6} xs={12}>
            <TextField
              type="text"
              label="Location"
              margin="dense"
              fullWidth
              variant="outlined"
              name="location"
              placeholder="Location"
              value={formData.location}
              onChange={handleChange}
            />
            {/* {errors.email && (
              <span style={{ color: "red", fontSize: "15px" }}>
                {errors.email}
              </span>
            )} */}
          </Grid>
          <Grid item sm={12} lg={12} md={12} xs={12}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                style={{ width: "10%", background: "blue", color: "white" }}
                type="submit"
                fullWidth
                variant="contained"
                onClick={handleformSubmit}
                disabled={!formData.email && !formData.phone_number}
              >
                Submit
              </Button>
            </Box>
          </Grid>
        </Grid>
        <Box>
          <Dialog
            open={otpOpen}
            onClose={() => setOtpOpen(false)}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              Enter the OTP sent to your phone number
            </DialogTitle>
            <DialogContent>
              <TextField
                type="number"
                label="Enter otp"
                margin="dense"
                fullWidth
                variant="outlined"
                name="otp"
                placeholder="Enter otp"
                onChange={(e) => setOtp(e.target.value)}
              />
            </DialogContent>
            <DialogActions>
              <Button
                variant="outlined"
                style={{ background: "green", color: "white" }}
                onClick={handleformSubmit}
              >
                Verify
              </Button>
            </DialogActions>
          </Dialog>
        </Box>
      </Box>
    </form>
  );
};

export default HigherStudies;

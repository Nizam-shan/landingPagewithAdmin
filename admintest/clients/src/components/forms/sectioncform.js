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
  sectionCSubmitForm,
  sendOtp,
  verifyOtp,
} from "./form_submission.service";
import PhoneInput from "react-phone-input-2";

const SectionC = ({ onClose }) => {
  const [phone, setPhone] = useState("");
  const [otpOpen, setOtpOpen] = useState(false);
  const [otp, setOtp] = useState("");
  const [otpLogId, setOtpLogId] = useState("");
  const [formData, setFormData] = useState({
    contact_no: "",

    phone_number: "",

    email: "",
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

  const handleformSubmit = () => {
    try {
      // verifyOtp(otp, otpLogId)
      //   .then((res) => {
      //     if (res.statusCode === 200) {
      sectionCSubmitForm(formData)
        .then((res) => {
          const data = res.data;
          toast.success(res.message || "Date saved successfully");
          // setOtpOpen(false);

          setFormData({
            contact_no: "",

            phone_number: "",

            email: "",
          });
          setPhone("");
          onClose();
        })
        .catch((error) => {
          console.error("Error:", error);
          toast.error(error?.response?.data?.error || "Error saving data");
        });
      //   }
      // })
      // .catch((error) => {
      //   toast.error(error?.response?.data?.error || "Error verifying OTP");
      // });
    } catch (error) {
      console.log("err");
      toast.error("Some error occured please again");
      onClose();
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
            Section C
          </Typography>
        </Box>
        <Grid container spacing={3}>
          <Grid item sm={12} lg={6} md={6} xs={12}>
            <TextField
              type="text"
              name="contact_no"
              label="Contact No"
              margin="dense"
              fullWidth
              variant="outlined"
              placeholder="Contact No"
              value={formData.contact_no}
              onChange={handleChange}
            />
          </Grid>

          <Grid item sm={12} lg={6} md={6} xs={12}>
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
                disabled={
                  !formData.email &&
                  !formData.phone_number &&
                  !formData.contact_no
                }
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

export default SectionC;

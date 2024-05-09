import axios from "axios";

const apiUrl = "http://localhost:8000";
console.log("vvv", process.env.NEXT_PUBLIC_API_URL);

export const sendOtp = async (phone_number) => {
  try {
    const config = {
      method: "post",
      url: `${apiUrl}/otp/sendOtp`,
      headers: {
        accept: "application/json",
      },
      data: {
        phone_number: phone_number.phone_number,
      },
    };

    const response = await axios(config);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const verifyOtp = async (otp, otpLogId) => {
  try {
    const config = {
      method: "post",
      url: `${apiUrl}/otp/verify`,
      headers: {
        accept: "application/json",
      },
      data: {
        otp: otp,
        otpLogId: otpLogId,
      },
    };

    const response = await axios(config);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const submitForm = async (formData) => {
  try {
    const form = new FormData();
    form.append("phone_number", formData.phone_number);
    form.append("name", formData.name);
    form.append("qualification", formData.qualification);
    form.append("age", formData.age);
    form.append("resume", formData.resume);
    form.append("gender", formData.gender);
    form.append("email", formData.email);

    const config = {
      method: "post",
      url: `${apiUrl}/purpose/purpose_job`,
      headers: {
        accept: "application/json",
        "content-type": "multipart/form-data",
      },
      data: form,
    };

    const response = await axios(config);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const hgherStudiesForm = async (formData) => {
  try {
    const config = {
      method: "post",
      url: `${apiUrl}/purpose/higher_studies`,
      headers: {
        accept: "application/json",
      },
      data: {
        name: formData.name,
        gender: formData.gender,
        phone_number: formData.phone_number,
        age: formData.age,
        course_looking_for: formData.course_looking_for,
        email: formData.email,
        location: formData.location,
        language: formData.language,
      },
    };

    const response = await axios(config);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const sectionCSubmitForm = async (formData) => {
  try {
    const config = {
      method: "post",
      url: `${apiUrl}/purpose/section_c`,
      headers: {
        accept: "application/json",
      },
      data: {
        contact_no: formData.contact_no,

        phone_number: formData.phone_number,

        email: formData.email,
      },
    };

    const response = await axios(config);
    return response.data;
  } catch (error) {
    throw error;
  }
};

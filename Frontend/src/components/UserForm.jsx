import React, { useState } from "react";
import '../components/UserForm.css'

const UserForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    gender: "",
    phone: "",
    email: "",
    aadhaar: "",
    permanentAddress: "",
    currentAddress: "",
  });

  const [errors, setErrors] = useState({});

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
  let newErrors = {};

  if (!formData.firstName.trim()) {
    newErrors.firstName = "First name is required";
  }

  // if (!formData.middleName.trim()) {
  //   newErrors.middleName = "Middle name is required";
  // }

  if (!formData.lastName.trim()) {
    newErrors.lastName = "Last name is required";
  }

  if (!formData.gender) {
    newErrors.gender = "Please select a gender";
  }

  if (!formData.phone) {
    newErrors.phone = "Phone number is required";
  } else if (!/^[0-9]{10}$/.test(formData.phone)) {
    newErrors.phone = "Phone number must be 10 digits";
  }

  if (!formData.email) {
    newErrors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    newErrors.email = "Invalid email format";
  }

  if (!formData.aadhaar) {
    newErrors.aadhaar = "Aadhaar number is required";
  } else if (!/^[0-9]{12}$/.test(formData.aadhaar)) {
    newErrors.aadhaar = "Aadhaar number must be 12 digits";
  }

  if (!formData.permanentAddress.trim()) {
    newErrors.permanentAddress = "Permanent address is required";
  }

  if (!formData.currentAddress.trim()) {
    newErrors.currentAddress = "Current address is required";
  }

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};

  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted successfully:", formData);
      alert("Form submitted successfully ✅");
      setFormData({
        firstName: "",
        middleName: "",
        lastName: "",
        gender: "",
        phone: "",
        email: "",
        aadhaar: "",
        permanentAddress: "",
        currentAddress: "",
      });
      setErrors({});
    }
  };

  return (
    <div className="form-container">
        <div className="a">
      <h2>User Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <label>First name</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder={errors.firstName ? errors.firstName : "Enter the First name"}
          className={errors.firstName ? "error" : ""}
        />

        <label>Middle name</label>
        <input
          type="text"
          name="middleName"
          value={formData.middleName}
          onChange={handleChange}
          placeholder= "Enter the Middle name"
          className={errors.middleName ? "error" : ""}
        />

        <label>Last name</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder={errors.lastName ? errors.lastName : "Enter the Last name"}
          className={errors.lastName ? "error" : ""}
        />

        <label>Gender</label>
        <div className="gender-options">
          <label><input type="radio" name="gender" value="male" checked={formData.gender === "male"} onChange={handleChange}/> Male</label>
          <label><input type="radio" name="gender" value="female" checked={formData.gender === "female"} onChange={handleChange}/> Female</label>
          <label><input type="radio" name="gender" value="other" checked={formData.gender === "other"} onChange={handleChange}/> Other</label>
        </div>
        {errors.gender && <p className="error-text">{errors.gender}</p>}

        <label>Phone number</label>
        <input
          type="number"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder={errors.phone ? errors.phone : "Enter the Phone number"}
          className={errors.phone ? "error" : ""}
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder={errors.email ? errors.email : "Enter the email"}
          className={errors.email ? "error" : ""}
        />

        <label>Aadhaar number</label>
        <input
          type="number"
          name="aadhaar"
          value={formData.aadhaar}
          onChange={handleChange}
          placeholder={errors.aadhaar ? errors.aadhaar : "Enter the Aadhaar number"}
          className={errors.aadhaar ? "error" : ""}
        />

        <label>Permanent Address</label>
        <textarea
          name="permanentAddress"
          value={formData.permanentAddress}
          onChange={handleChange}
          placeholder={errors.permanentAddress ? errors.permanentAddress : "Enter the Permanent Address"}
          className={errors.permanentAddress ? "error" : ""}
        />

        <label>Current Address</label>
        <textarea
          name="currentAddress"
          value={formData.currentAddress}
          onChange={handleChange}
          placeholder={errors.currentAddress ? errors.currentAddress : "Enter the Current Address"}
          className={errors.currentAddress ? "error" : ""}
        />

        <button type="submit">Submit</button>
      </form>
      </div>
    </div>
  );
};

export default UserForm;




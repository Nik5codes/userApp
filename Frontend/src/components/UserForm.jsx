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
  const [showMessage, setShowMessage] = useState(false);
const [fileInput, setFileInput] = useState(null);
  

  const handleChange = (e) => {
    const { name, value } = e.target;

    if(name==='aadhaar' && value.length  >12) return;
    if(name==='phone' && value.length>10) return;


    setFormData({...formData, [name]: value})  
    if(errors[name]){
      setErrors({...errors, [name]: "" })
    }
  };

  const validate = () => {
  let newErrors = {};

  if (!formData.firstName.trim()) {
    newErrors.firstName = "First name is required";
  }

  if (!formData.lastName.trim()) {
    newErrors.lastName = "Last name is required";
  }

  if (!formData.gender) {
    newErrors.gender = "Please select a gender";
  }

  if (!formData.phone.trim()) {
    newErrors.phone = "Phone number is required";
  
  }

  if (!formData.email) {
    newErrors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    newErrors.email = "Invalid email format";
  }

  if (!formData.aadhaar) {
    newErrors.aadhaar = "Aadhaar number is required";
 
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

const handleFocus= ()=>{
  setShowMessage(true);
}

const handleKeyDown = (e) => {
  if(e.key === "Enter"){
    e.preventDefault();
    setFormData((prev) =>({
     ...prev,
     currentAddress: prev.permanentAddress,
    }))
    setErrors((prev) => ({
      ...prev, currentAddress: ""
    }));
  }
};




  const onChangeHandle = (e) => setFileInput(e.target.files[0]);

  const handleImageUpload = async () => {
    if (!fileInput) return;

    const formData = new FormData();
    formData.append("image", fileInput);

    try {
      const response = await fetch("http://localhost:5000/api/images/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      fetchAndDisplayImage(data.id);
    } catch (err) {
      console.error("Error uploading image:", err);
    }
  };

  const fetchAndDisplayImage = async (imageId) => {
    try {
      const response = await fetch(`http://localhost:5000/api/images/${imageId}`);
      if (!response.ok) throw new Error("Failed to fetch image");

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);

      localStorage.setItem("selectedImageForDisplay", url);
    } catch (err) {
      console.error("Error fetching image:", err);
    }
  };

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
          placeholder={errors.firstName || "Enter the First name"}
          className={errors.firstName ? "error" : ""}
        />

        <label>Middle name</label>
        <input
          type="text"
          name="middleName"
          value={formData.middleName}
          onChange={handleChange}
          placeholder= "Middle name(if any)"
          className={errors.middleName ? "error" : ""}
        />

        <label>Last name</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder={errors.lastName || "Enter the Last name"}
          className={errors.lastName ? "error" : ""}
        />

        <label>Gender</label>
        <div className="gender-options">
          <label><input type="radio" name="gender" value="male" checked={formData.gender === "male"} onChange={handleChange}/> Male</label>
          <label><input type="radio" name="gender" value="female" checked={formData.gender === "female"} onChange={handleChange}/> Female</label>
          <label><input type="radio" name="gender" value="other" checked={formData.gender === "other"} onChange={handleChange}/> Other</label><br />
        {errors.gender && <p className="error-text">{errors.gender}</p>}
        </div>
        

        <label>Phone number</label>
        <input
          type="number"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder={errors.phone || "Enter the Phone number"}
          className={errors.phone ? "error" : ""}
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder={errors.email || "Enter the email"}
          className={errors.email ? "error" : ""}
        />

        <label>Aadhaar number</label>
        <input
          type="number"
          name="aadhaar"
          value={formData.aadhaar}
          onChange={handleChange}
          placeholder={errors.aadhaar ||"Enter the Aadhaar number"}
          className={errors.aadhaar ? "error" : ""}
        />

        <label>Permanent Address</label>
        <textarea
          name="permanentAddress"
          value={formData.permanentAddress}
          onChange={handleChange}
          placeholder={errors.permanentAddress ||"Enter the Permanent Address"}
          className={errors.permanentAddress ? "error" : ""}
        />

        <label>Current Address</label>
        <textarea
          name="currentAddress"
          value={formData.currentAddress}
          onChange={handleChange}
          onFocus={handleFocus}
          onKeyDown={handleKeyDown}
          placeholder={errors.currentAddress || "Press Enter for same address as permanent address"}
          className={errors.currentAddress ? "error" : ""}
        />

        {showMessage}


    <div>
      <input type="file" accept="image/*" onChange={onChangeHandle} />

      <button
        onClick={handleImageUpload}
        style={{
          margin: "20px",
          padding: "10px 20px",
          backgroundColor: "#9f7aea",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Upload Image
      </button>

   
    </div>


        <button type="submit">Submit</button>
      </form>
      </div>
    </div>
  );
};

export default UserForm;




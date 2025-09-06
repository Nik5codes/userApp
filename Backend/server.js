const express = require("express");
const app = express();
const PORT = process.env.PORT;

const mongoose = require("mongoose");

const cors = require("cors");
app.use(cors());
app.use(express.json());

const Form = mongoose.model("Form", formSchema);
const User = mongoose.model("User", formSchema);

mongoose
  .connect("mongodb://localhost:27017/UserDB")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error(" MongoDB connection error:", err));


app.listen(PORT, "0.0.0.0", () => {
  console.log("server open port 5000");
});

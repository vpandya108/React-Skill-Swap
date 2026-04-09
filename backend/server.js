const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path=require("path")
const userRoutes = require("./routes/userRoutes");

const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/Skill-Swap-react")
  .then(() => console.log("MongoDB Connected ✅"))
  .catch(err => console.log(err));

// ✅ routes
app.use("/api/users", userRoutes);

// test route
app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

// start server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
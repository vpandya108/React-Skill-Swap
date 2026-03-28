const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const userRoutes = require("./routes/userRoutes"); // 👈 ADD THIS

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/Skill-Swap-react")
.then(() => console.log("MongoDB Connected ✅"))
.catch(err => console.log(err));

// 👇 ADD THIS LINE
app.use("/api/users", userRoutes);

// test route
app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
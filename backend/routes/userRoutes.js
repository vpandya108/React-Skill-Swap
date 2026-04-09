const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");
const upload = require("../middleware/upload");

// 🔥 REGISTER API
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword });
    await user.save();

    const token = jwt.sign({ id: user._id }, "secretkey", { expiresIn: "1d" });
    res.json({ message: "User registered successfully", token, user });

  } catch (err) {
    res.status(500).json(err);
  }
});


// 🔥 LOGIN API
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "All fields required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found ❌" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password ❌" });
    }

    const token = jwt.sign({ id: user._id }, "secretkey", { expiresIn: "1d" });
    res.json({ message: "Login successful ✅", token, user });

  } catch (err) {
    res.status(500).json(err);
  }
});


// 🔥 UPDATE PROFILE WITH FILE UPLOAD (Protected)
router.put("/update/:id", auth, upload.fields([
  { name: "profilePhoto", maxCount: 1 },
  { name: "certificate", maxCount: 1 }
]), async (req, res) => {
  try {
    const { bio, location, skillTeach, skillLearn } = req.body;
    const updateData = { bio, location, skillTeach, skillLearn };

    if (req.files?.profilePhoto) {
      updateData.profilePhoto = "http://localhost:5000/uploads/" + req.files.profilePhoto[0].filename;
    }
    if (req.files?.certificate) {
      updateData.certificate = "http://localhost:5000/uploads/" + req.files.certificate[0].filename;
    }

    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    );

    res.json(updatedUser);

  } catch (err) {
    res.status(500).json(err);
  }
});


// 🔥 SEND SWAP REQUEST (Protected)
router.post("/swap-request/:id", auth, async (req, res) => {
  try {
    const { skillOffered, skillWanted } = req.body;
    const sender = await User.findById(req.user.id);

    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $push: {
          swapRequests: {
            fromUserId: sender._id,
            fromUserName: sender.name,
            skillOffered,
            skillWanted
          }
        }
      },
      { new: true }
    );

    res.json({ message: "Swap request sent ✅", updatedUser });

  } catch (err) {
    res.status(500).json(err);
  }
});


// ✅ BEFORE /:id — GET SWAP REQUESTS (Protected)
router.get("/swap-requests/:id", auth, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user.swapRequests);
  } catch (err) {
    res.status(500).json(err);
  }
});


// ✅ BEFORE /:id — GET UNREAD NOTIFICATIONS COUNT (Protected)
router.get("/notifications/:id", auth, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const unread = user.swapRequests.filter(r => r.status === "pending" && !r.seen).length;
    res.json({ count: unread, requests: user.swapRequests.filter(r => !r.seen) });
  } catch (err) {
    res.status(500).json(err);
  }
});


// ✅ BEFORE /:id — MARK NOTIFICATIONS AS SEEN (Protected)
router.put("/notifications/seen/:id", auth, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    user.swapRequests.forEach(r => r.seen = true);
    await user.save();
    res.json({ message: "Notifications marked as seen" });
  } catch (err) {
    res.status(500).json(err);
  }
});


// ✅ BEFORE /:id — ACCEPT SWAP REQUEST (Protected)
router.put("/swap-request/accept/:userId/:requestId", auth, async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    const request = user.swapRequests.id(req.params.requestId);
    request.status = "accepted";
    await user.save();
    res.json({ message: "Swap request accepted ✅" });
  } catch (err) {
    res.status(500).json(err);
  }
});


// ✅ BEFORE /:id — DECLINE SWAP REQUEST (Protected)
router.put("/swap-request/decline/:userId/:requestId", auth, async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    const request = user.swapRequests.id(req.params.requestId);
    request.status = "declined";
    await user.save();
    res.json({ message: "Swap request declined ❌" });
  } catch (err) {
    res.status(500).json(err);
  }
});


// 🔥 GET ALL USERS (Public)
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json(err);
  }
});


// ✅ ALWAYS LAST — GET SINGLE USER (Protected)
router.get("/:id", auth, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
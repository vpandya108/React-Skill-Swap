const express = require("express");
const router = express.Router();
const Message = require("../models/Message");
const User = require("../models/User");
const auth = require("../middleware/auth");

// 🔥 SEND MESSAGE
router.post("/send", auth, async (req, res) => {
  try {
    const { receiverId, message } = req.body;
    const newMessage = new Message({ senderId: req.user.id, receiverId, message });
    await newMessage.save();
    res.json({ message: "Message sent ✅", data: newMessage });
  } catch (err) {
    res.status(500).json(err);
  }
});

// 🔥 GET CONVERSATION BETWEEN TWO USERS
router.get("/conversation/:otherUserId", auth, async (req, res) => {
  try {
    const myId = req.user.id;
    const otherId = req.params.otherUserId;
    const messages = await Message.find({
      $or: [
        { senderId: myId, receiverId: otherId },
        { senderId: otherId, receiverId: myId }
      ]
    }).sort({ createdAt: 1 });
    res.json(messages);
  } catch (err) {
    res.status(500).json(err);
  }
});
// 🔥 GET CONTACTS (accepted swap partners)
router.get("/contacts", auth, async (req, res) => {
  try {
    const myId = req.user.id;
    const me = await User.findById(myId);
    const contactIds = me.swapRequests
      .filter(r => r.status === "accepted")
      .map(r => r.fromUserId);
    const contacts = await User.find({ _id: { $in: contactIds } })
      .select("name profilePhoto skillTeach");
    res.json(contacts);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

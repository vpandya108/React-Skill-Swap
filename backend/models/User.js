const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

  name: String,
  email: { type: String, unique: true },
  password: String,
  bio: String,
  location: String,
  skillTeach: String,
  skillLearn: String,
  profilePhoto: String,
  certificate: String,

  // ✅ ADD THIS
  swapRequests: [
    {
      fromUserId: String,
      fromUserName: String,
      skillOffered: String,
      skillWanted: String,
      status: { type: String, default: "pending" },
      seen: { type: Boolean, default: false }
    }
  ]

}, { timestamps: true });
module.exports = mongoose.model("User", userSchema);

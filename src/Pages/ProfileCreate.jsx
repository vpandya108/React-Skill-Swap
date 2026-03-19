import React, { useState } from "react";
import HomeScren from "../Pages/HomeScreen";
import { useNavigate } from "react-router-dom";

function ProfileCreate() {
  const navigate = useNavigate();
  const handleProfileCreate = (e) => {
    e.preventDefault(); // stop page refresh
    // You can add validation here later
    navigate("/HomeScreen"); // redirect to profile creation page
  };

  const [formData, setFormData] = useState({
    profilePhoto: null,
    bio: "",
    location: "",
    skillTeach: "",
    certificate: null,
    skillLearn: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("profilePhoto", formData.profilePhoto);
    data.append("bio", formData.bio);
    data.append("location", formData.location);
    data.append("skillTeach", formData.skillTeach);
    data.append("certificate", formData.certificate);
    data.append("skillLearn", formData.skillLearn);

    // Example API call (connect with your backend)
    fetch("http://localhost:5000/api/profile", {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Success:", data);
        alert("Profile Saved!");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-2xl">
        
        <h1 className="text-3xl font-bold mb-2">Complete Your Profile</h1>
        <p className="text-gray-600 mb-6">
          Tell the community more about your skills
        </p>

        <form onSubmit={handleProfileCreate} className="space-y-6">
          
          {/* Profile Photo */}
          <div>
            <label className="block font-medium mb-2">Profile Photo</label>
            <input
              type="file"
              name="profilePhoto"
              onChange={handleChange}
              className="w-full border p-2 rounded-md bg-gray-100"
            />
          </div>

          {/* Short Bio */}
          <div>
            <label className="block font-medium mb-2">Short Bio</label>
            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              placeholder="Tell us about yourself..."
              rows="4"
              className="w-full bg-gray-100 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          {/* Location */}
          <div>
            <label className="block font-medium mb-2">Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="City, Country"
              className="w-full bg-gray-100 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Skill I Teach */}
          <div>
            <label className="block font-medium mb-2">Skill I Teach</label>
            <input
              type="text"
              name="skillTeach"
              value={formData.skillTeach}
              onChange={handleChange}
              placeholder="Example: Web Development, Photoshop"
              className="w-full bg-gray-100 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Certification Upload */}
          <div>
            <label className="block font-medium mb-2">Upload Certification</label>
            <input
              type="file"
              name="certificate"
              onChange={handleChange}
              className="w-full border p-2 rounded-md bg-gray-100"
            />
          </div>

          {/* Skill I Want to Learn */}
          <div>
            <label className="block font-medium mb-2">Skill I Want to Learn</label>
            <input
              type="text"
              name="skillLearn"
              value={formData.skillLearn}
              onChange={handleChange}
              placeholder="Example: Data Science, Public Speaking"
              className="w-full bg-gray-100 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition"
          >
            Save Profile →
          </button>

        </form>
      </div>
    </div>
  );
}

export default ProfileCreate;
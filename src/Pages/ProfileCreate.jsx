import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ProfileCreate() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    profilePhoto: null,
    bio: "",
    location: "",
    skillTeach: "",
    certificate: null,
    skillLearn: "",
  });

  const [preview, setPreview] = useState(null); // ✅ photo preview
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (files) {
      setFormData({ ...formData, [name]: files[0] });

      // ✅ Show preview for profile photo
      if (name === "profilePhoto") {
        setPreview(URL.createObjectURL(files[0]));
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.bio || !formData.location || !formData.skillTeach || !formData.skillLearn) {
      alert("Please fill all fields ❌");
      return;
    }

    const userId = localStorage.getItem("userId");
    const token = localStorage.getItem("token");

    // ✅ Use FormData to send files + text together
    const data = new FormData();
    data.append("bio", formData.bio);
    data.append("location", formData.location);
    data.append("skillTeach", formData.skillTeach);
    data.append("skillLearn", formData.skillLearn);

    if (formData.profilePhoto) {
      data.append("profilePhoto", formData.profilePhoto);
    }
    if (formData.certificate) {
      data.append("certificate", formData.certificate);
    }

    setLoading(true);

    try {
      const res = await fetch(`http://localhost:5000/api/users/update/${userId}`, {
        method: "PUT",
        headers: {
          // ✅ NO Content-Type here — browser sets it automatically for FormData
          Authorization: `Bearer ${token}`,
        },
        body: data,
      });

      const result = await res.json();
      console.log(result);

      alert("Profile Saved ✅");
      navigate("/HomeScreen");
    } catch (err) {
      console.log(err);
      alert("Error saving profile ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-2xl">
        <h1 className="text-3xl font-bold mb-2">Complete Your Profile</h1>
        <p className="text-gray-600 mb-6">Tell the community more about your skills</p>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Profile Photo */}
          <div>
            <label className="block font-medium mb-2">Profile Photo</label>

            {/* ✅ Preview */}
            {preview && (
              <img
                src={preview}
                alt="Preview"
                className="w-24 h-24 rounded-full object-cover mb-3 border-2 border-blue-400"
              />
            )}

            <input
              type="file"
              name="profilePhoto"
              accept="image/*"
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
            />
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
              accept=".pdf,image/*"
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
            disabled={loading}
            className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition disabled:opacity-50"
          >
            {loading ? "Saving..." : "Save Profile →"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ProfileCreate;
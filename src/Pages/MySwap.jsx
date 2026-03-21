import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";

function MySwap() {
  const activeSwaps = [
    {
      title: "Learning Python",
      exchange: "For: Teaching Guitar",
      name: "Sarah Jenkins",
      session: "Next Session: Thursday, 4 PM",
      progress: "65%",
      img: "https://i.pravatar.cc/40",
    },
    {
      title: "Learning UI Design",
      exchange: "For: Teaching French",
      name: "Marc Laurent",
      session: "Next Session: Monday, 10 AM",
      progress: "30%",
      img: "https://i.pravatar.cc/41",
    },
  ];

  const pendingRequests = [
    {
      name: "Alex Thorne",
      text: "Cooking for SEO",
      img: "https://i.pravatar.cc/42",
    },
  ];

  const completedSwaps = [
    {
      name: "David Chen",
      skills: "Node.js for Public Speaking",
      date: "Oct 12, 2023",
      rating: "⭐ 5.0",
    },
    {
      name: "Maria Garcia",
      skills: "Spanish 101 for React",
      date: "Sep 28, 2023",
      rating: "⭐ 4.8",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">

      {/* MAIN SECTION */}
      <div className="flex flex-1">

        {/* Sidebar */}
        <div className="w-64 bg-white shadow-lg p-6">
          <h2 className="text-2xl font-bold text-green-600 mb-10">
            SkillSwap
          </h2>

          <ul className="space-y-4">
            <li className="text-gray-600 hover:text-green-600 cursor-pointer">
              Dashboard
            </li>

            <li className="bg-green-100 text-green-700 px-3 py-2 rounded-lg font-semibold">
              My Swaps
            </li>

            <li className="text-gray-600 hover:text-green-600 cursor-pointer">
              Profile
            </li>

            <li className="text-gray-600 hover:text-green-600 cursor-pointer">
              Messages
            </li>

            <li className="text-gray-600 hover:text-green-600 cursor-pointer">
              Find a Skill
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">

          <h1 className="text-3xl font-bold mb-6">My Swaps</h1>

          {/* Active Swaps */}
          <h2 className="text-xl font-semibold mb-4">Active Swaps</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activeSwaps.map((swap, index) => (
              <div key={index} className="bg-white rounded-xl shadow p-6">

                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-lg">
                    {swap.title}
                  </h3>

                  <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">
                    In Progress
                  </span>
                </div>

                <p className="text-gray-500 text-sm mb-4">
                  {swap.exchange}
                </p>

                <div className="flex items-center mb-4">
                  <img src={swap.img} alt="" className="rounded-full mr-3" />
                  <div>
                    <p className="font-medium">{swap.name}</p>
                    <p className="text-sm text-gray-500">
                      {swap.session}
                    </p>
                  </div>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-green-500 h-2 rounded-full"
                    style={{ width: swap.progress }}
                  ></div>
                </div>

              </div>
            ))}
          </div>

          {/* Pending Requests */}
          <h2 className="text-xl font-semibold mt-10 mb-4">
            Pending Requests
          </h2>

          <div className="space-y-4">
            {pendingRequests.map((req, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-xl shadow flex justify-between items-center"
              >
                <div className="flex items-center">
                  <img src={req.img} alt="" className="rounded-full mr-4" />

                  <div>
                    <p className="font-medium">
                      {req.name} wants to swap
                    </p>

                    <p className="text-sm text-gray-500">
                      {req.text}
                    </p>
                  </div>
                </div>

                <div className="space-x-2">
                  <button className="bg-green-500 text-white px-4 py-2 rounded">
                    Accept
                  </button>

                  <button className="bg-gray-300 px-4 py-2 rounded">
                    Decline
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Completed Swaps */}
          <h2 className="text-xl font-semibold mt-10 mb-4">
            Completed Swaps
          </h2>

          <div className="bg-white rounded-xl shadow p-6 overflow-x-auto">
            <table className="w-full">
              <thead className="text-left text-gray-500 text-sm">
                <tr>
                  <th className="pb-3">Skill Partner</th>
                  <th>Swapped Skills</th>
                  <th>Completed Date</th>
                  <th>Rating</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody className="text-sm">
                {completedSwaps.map((item, index) => (
                  <tr key={index} className="border-t">
                    <td className="py-3">{item.name}</td>
                    <td>{item.skills}</td>
                    <td>{item.date}</td>
                    <td>{item.rating}</td>
                    <td>
                      <span className="bg-gray-200 px-3 py-1 rounded">
                        Closed
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </div>

      {/* ✅ FULL WIDTH FOOTER */}
      <Footer />

    </div>
  );
}

export default MySwap;
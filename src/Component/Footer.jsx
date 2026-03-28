import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">
      
      <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
        
        {/* About */}
        <div>
          <h2 className="text-xl font-semibold text-white">SkillSwap</h2>
          <p className="mt-3 text-sm">
            A global platform where people exchange skills,
            learn together, and grow professionally.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Explore Skills</li>
            <li className="hover:text-white cursor-pointer">My Swaps</li>
            <li className="hover:text-white cursor-pointer">Messages</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
          <p className="text-sm">Email: support@skillswap.com</p>
          <p className="text-sm mt-2">Phone: +91 98765 43210</p>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 text-center py-4 text-sm">
        © 2026 SkillSwap. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;
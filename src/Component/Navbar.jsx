import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow">
      
      {/* Logo */}
      <div className="flex items-center gap-2">
        <span className="text-2xl text-blue-500">⇅</span>
        <h2 className="text-lg font-semibold">Skill Swap</h2>
      </div>

      {/* Links */}
      <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
        <li>
          <Link to="/explore" className="hover:text-blue-500">
            Find a Skill
          </Link>
        </li>
        <li>
          <Link to="/howworks" className="hover:text-blue-500">
            How it Works
          </Link>
        </li>
        <li>
          <Link to="/AboutUs" className="hover:text-blue-500">
            About Us
          </Link>
        </li>
      </ul>

      {/* Buttons */}
      <div className="flex gap-3">
        <Link to="/SignUp">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1.5 rounded-lg">
            Sign Up
          </button>
        </Link>

        <Link to="/login">
          <button className="bg-gray-200 hover:bg-gray-300 px-4 py-1.5 rounded-lg">
            Login
          </button>
        </Link>
      </div>

    </nav>
  );
}

export default Navbar;

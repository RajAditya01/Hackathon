import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="static top-0 left-0 right-0 bg-blue-900 p-4 z-10" id="nav">
      <nav className="container mx-auto">
        <ul className=" flex justify-center items-center space-x-4">
          <li className="text-white hover:text-red-500 cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className="text-white hover:text-red-500 cursor-pointer">
            <Link to="/About">About Us</Link>
          </li>
          <li className="text-white hover:text-red-500 cursor-pointer">
            <Link to="/Join">Join</Link>
          </li>
          <li className="text-white hover:text-red-500 cursor-pointer">
            <Link to="/Guidelines">Guidelines</Link>
          </li>
          <li className="ml-auto"> {/* Use ml-auto to push this to the right */}
            <Link to="/loginform" className="text-white hover:text-red-500 cursor-pointer">
              Login Now
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;








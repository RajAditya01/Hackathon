import React, { useState } from 'react';
import {Link} from "react-router-dom";

function Sidebar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className={`bg-gray-900 text-white static  w-60 ${
        isMenuOpen ? 'w-72' : 'w-60'
      }`}
    >
      <button
        onClick={toggleMenu}
        className="p-3 bg-blue-500 hover:bg-green-500 text-white w-full text-left cursor-pointer"
      >
        User Profile
      </button>
      {isMenuOpen && (
        <div className=" mt-4">
          <div className="p-3 hover:bg-gray-800 cursor-pointer">Profile</div>
          <div className="p-3 hover:bg-gray-800 cursor-pointer">Settings</div>
          <div className="p-3 hover:bg-gray-800 cursor-pointer">Public Chat</div>
          <div className="p-3 hover:bg-gray-800 cursor-pointer">Forum</div>
          <Link to="Chatbot">
          <div className="p-3 hover:bg-gray-800 cursor-pointer">Chat Bot</div>
          </Link>
          <Link to="/">
          <div className="p-3 hover:bg-gray-800 cursor-pointer">Logout</div>
          </Link>
          
        </div>
      )}
    </div>
  );
}

export default Sidebar
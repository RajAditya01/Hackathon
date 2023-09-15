import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="bg-gray-200 static">
      <div id="head">
        <h1 id="heading">Mental Health</h1>
      <Navbar />
      </div>
      <Sidebar />

      <div className="flex flex-row justify-between mt-8">
        {/* First Image and Button */}
        <div className="max-w-md flex flex-col items-center">
          <img
            src="WhatsApp Image 2023-09-13 at 20.27.50.jpg"
            className="rounded-lg shadow-lg w-full h-auto"
            alt="Image"
          />
          <Link to="/Depression">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
              Read More
            </button>
          </Link>
        </div>

        {/* Second Image and Button */}
        <div className="max-w-md flex flex-col items-center">
          <img
            src="WhatsApp Image 2023-09-13 at 20.38.35.jpg"
            className="rounded-lg shadow-lg w-full h-auto"
            alt="Image"
          />
          <Link to="/Schizophrenia">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
              Read More
            </button>
          </Link>
        </div>

        {/* Third Image and Button */}
        <div className="max-w-md flex flex-col items-center">
          <img
            src="WhatsApp Image 2023-09-13 at 20.35.15.jpg"
            className="rounded-lg shadow-lg w-full h-auto"
            alt="Image"
          />
          <Link to="/BipolarDisorder">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
              Read More
            </button>
          </Link>
        </div>
      </div>

      <div className="mt-4">
        <Footer />
      </div>
    </div>
  );
}

export default Home;







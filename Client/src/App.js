import React from "react";
import Home from "./components/Home";
import LoginForm from "./components/LoginForm";
import {Routes,Route } from "react-router-dom";
import Depression from "./components/Depression";
import Schizophrenia from "./components/Schizophrenia";
import BipolarDisorder from "./components/BipolarDisorder";
import About from "./components/About";
import Guidelines from "./components/Guidelines";
import Join from "./components/Join";

// import LoginForm from "./components/LoginForm";

function App() {
  // const [isLoginFormVisible, setIsLoginFormVisible] = useState(false);

  // const handleLoginFormClick = () => {
  //   setIsLoginFormVisible(!isLoginFormVisible);
  // };

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="loginform" element={<LoginForm/>}></Route>
        <Route path="Depression" element={<Depression/>}></Route>
        <Route path="Schizophrenia" element={<Schizophrenia/>}></Route>
        <Route path="BipolarDisorder" element={<BipolarDisorder/>}></Route>
        <Route path="About" element={<About/>}></Route>
        <Route path="Guidelines" element={<Guidelines/>}></Route>
        <Route path="Join" element={<Join/>}></Route>

      {/* <footer className="bg-gray-800 text-white text-center py-4">
        <div className="flex justify-center space-x-4">

      </footer>  */}
      </Routes>
      {/* <div className="bg-blue-950 flex-grow">
        <Navbar />
        <Sidebar />
        {/* Your other components/content */}
      {/* <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded absolute top-0 right-4 mt-4"
        onClick={<LoginForm/>}
      >
        LOGIN
      </button> */}
      {/* {isLoginFormVisible && (
        <div className="modal-container absolute top-0 right-0 w-full h-full">
          <LoginForm />
        </div>
      )} */}
         
    </div>

  );
}

export default App;
























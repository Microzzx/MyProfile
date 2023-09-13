import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";

const App: React.FC = () => {
  return (
    <div className="flex flex-col bg-[#2B2A2F] relative">
      <NavBar />
      <div className="px-6 h-[calc(100vh)] border-xl">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;

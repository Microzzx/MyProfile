import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { NavBar, ImageBox } from "./components";

const App: React.FC = () => {
  return (
    <div className="flex flex-col relative">
      <ImageBox />
      <NavBar />
      <div className="px-6 h-[calc(100vh)] bg-[#2B2A2F]">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;

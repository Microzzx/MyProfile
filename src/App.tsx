import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { NavBar, ImageBox } from "./components";

const App: React.FC = () => {
  return (
    <div className="flex flex-col overflow-x-clip relative">
      <NavBar />
      <ImageBox />
      <div className="flex h-full bg-[#2d2d39] max-[900px]:mt-[80px] mt-[300px]">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;

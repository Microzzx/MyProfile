import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { NavBar, VideoBox, SongBar } from "./components";

const App: React.FC = () => {
  return (
    <div className="flex flex-col overflow-x-clip relative">
      <NavBar />
      <VideoBox />
      <div className="flex flex-col mt-[0px] lg:mt-[250px] smooth-transition">
        <SongBar />
        <div className="flex flex-col w-full bg-[#2d2d39] ">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;

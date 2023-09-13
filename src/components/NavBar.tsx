// import React from 'react'
import { BsTextLeft } from "react-icons/bs";
type Props = {};

const NavBar = ({}: Props) => {
  return (
    <nav className="flex w-[100%]  h-[100px] mx-auto items-center justify-center bg-red-600">
      <div className="mr-[1000px]">
        <h2 className="font-bold text-3xl">My Profile</h2>
      </div>
      <ul className="flex gap-[40px] mr-[60px]">
        <li>
          <a href="/aboutme">AboutMe</a>
        </li>
        <li>
          <a href="/skills">Skills</a>
        </li>
        <li>
          <a href="/project">Project</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
      <div>
        <BsTextLeft size={25} color="#f6c344" />
      </div>
    </nav>
  );
};

export default NavBar;

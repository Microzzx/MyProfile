import { useState } from "react";
import { BsList } from "react-icons/bs";

type Props = {};

const NavBar = ({}: Props) => {
  const [dropdownToggle, setDropdownToggle] = useState(false);
  const handleToggle = () => {
    console.log("toggle");
    setDropdownToggle(!dropdownToggle);
  };
  return (
    <nav className="flex w-[100%] h-[100px] justify-center items-center bg-[#1e1e28] relative">
      <div className="flex  justify-start ms-[100px]">
        <a href="/" className="font-bold min-[850px]:text-3xl text-2xl">
          My Profile
        </a>
      </div>
      <ul className="min-[850px]:flex hidden flex-1 justify-end gap-[50px] mr-[100px]">
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
      <div className="min-[850px]:hidden flex flex-1 justify-end me-[100px]">
        <button className="" onClick={() => handleToggle()}>
          <BsList size={30} color={dropdownToggle ? "#f6c344" : "#ffffff"} />
        </button>
      </div>

      {/* Slide Menu */}
      <div
        className={`min-[850px]:hidden flex absolute justify-center items-center rounded-md p-5 
      w-[235px] h-screen top-[100px] right-[0px] bg-[#20202a] bg-opacity-50 backdrop-blur-sm 
      smooth-transition select-none ${
        dropdownToggle ? "right-0" : "right-[-100%]"
      }`}
      >
        <ul className="absolute flex flex-col top-[100px] gap-[40px] ">
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
      </div>
    </nav>
  );
};

export default NavBar;

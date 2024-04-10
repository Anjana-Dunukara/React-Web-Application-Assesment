import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import ATDigitalLogo from "../assets/AT-Digital-Logo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="mx-auto flex h-24 max-w-screen-xl items-center justify-between px-4 bg-primary text-white">
      <div>
        <img src={ATDigitalLogo} alt="ATDigitalLogo" />
      </div>
      <div className="hidden md:flex">
        <p className="header-link">SERVICES</p>
        <p className="header-link">ABOUT US</p>
        <p className="header-link">CONTACT US</p>
        <p className="header-link">CAREERS</p>
      </div>

      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
      </div>

      <div
        className={
          nav
            ? "fixed left-0 top-0 h-full w-[60%] max-w-[300px] border-r border-gray-800 bg-gray-950 duration-500 ease-in-out"
            : "fixed left-[-100vw]"
        }
      >
        <ul>
          <li className="navbar-link">HOME</li>
          <li className="navbar-link">SERVICES</li>
          <li className="navbar-link">ABOUT US</li>
          <li className="navbar-link">CONTACT US</li>
          <li className="navbar-link">CAREERS</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import ATDigitalLogo from "../assets/AT-Digital-Logo.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const navigate = useNavigate();

  const handleNav = () => {
    setNav(!nav);
  };

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="h-[77px] max-w-full  bg-primary">
      <div className="mx-auto flex h-[77px] max-w-[1440px] items-center justify-between px-4 bg-primary">
        <button onClick={handleClick} className="pb-3">
          <img src={ATDigitalLogo} alt="ATDigitalLogo" />
        </button>
        <div className="hidden md:flex">
          <p className="header-link">SERVICES</p>
          <p className="header-link">ABOUT US</p>
          <p className="header-link">CONTACT US</p>
          <p className="header-link">CAREERS</p>
        </div>

        <div onClick={handleNav} className="block md:hidden relative z-20">
          {nav ? (
            <AiOutlineClose size={24} style={{ color: "black" }} />
          ) : (
            <AiOutlineMenu size={24} style={{ color: "white" }} />
          )}
        </div>

        <div
          className={
            nav
              ? "fixed left-0 top-0 h-full w-full bg-white duration-500 ease-in-out"
              : "fixed left-[-100vw] duration-500 ease-in-out"
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
    </div>
  );
};

export default Navbar;

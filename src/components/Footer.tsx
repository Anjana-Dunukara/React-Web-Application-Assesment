import { useNavigate } from "react-router-dom";
import ATDigitalLogo from "../assets/AT-Digital-Logo.png";

const Footer = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="h-[266px] max-w-full bg-primary">
      <footer className="bg-primary justify-center">
        <div className="mx-auto grid max-w-[1440px] gap-6 px-4 py-8 lg:grid-cols-3 bg-primary">
          <div>
            <button onClick={handleClick} className="pb-3 hover:cursor-pointer">
              <img src={ATDigitalLogo} alt="ATDigitalLogo" />
            </button>
            <p className="pb-4 pt-[20px] text-white font-lato text-[16px] font-normal leading-[19.2px]">
              Your goal is our target. Not anything in between. We use online
              marketing platforms and tools to achieve single objective - your
              business results.
            </p>
          </div>
          <div className="flex justify-around lg:col-span-2">
            <div>
              <h4 className="text-white font-inter text-[21px] font-semibold leading-[25.41px]">
                Our Technologies
              </h4>
              <ul>
                <li className="footer-page-link">ReactJS</li>
                <li className="footer-page-link">Gatsby</li>
                <li className="footer-page-link">NextJS</li>
                <li className="footer-page-link">NodeJS</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-inter text-[21px] font-semibold leading-[25.41px]">
                Our Services
              </h4>
              <ul>
                <li className="footer-page-link">Social media Marketing</li>
                <li className="footer-page-link">
                  Web & Mobile App Development
                </li>
                <li className="footer-page-link">Data & Analytics</li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="border-t border-white w-[30%] m-auto" />
        <div className="flex justify-center w-full">
          <div className="flex justify-center mt-4">
            <a href="/privacy-policy" className="text-white pr-4">
              Privacy Policy
            </a>
            <p className="text-white"> | </p>
            <a href="/terms-and-conditions" className="text-white pl-4">
              Terms and Conditions
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

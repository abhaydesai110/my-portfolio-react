import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="bg-primary">
        <div className="container flex flex-col justify-between py-6 sm:flex-row">
          <p className="text-center font-body text-white md:text-left">
            Thanks for Visiting
          </p>
          <div className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0">
            <Link to="https://www.facebook.com/abhay.desai.9028" target="_black">
              <i className="bx bxl-facebook-square text-2xl text-white hover:text-yellow"></i>
            </Link>
            <Link
              to="https://www.twitter.com/abhaydesai110"
              target="_black"
              className="pl-4"
            >
              <i className="bx bxl-twitter text-2xl text-white hover:text-yellow"></i>
            </Link>
            <Link to="https://abhaydesai.netlify.app/" className="pl-4" target="_black">
              <i className="bx bxl-dribbble text-2xl text-white hover:text-yellow"></i>
            </Link>
            <Link
              to="https://www.linkedin.com/in/abhay-desai-336863166/"
              className="pl-4"
              target="_black"
            >
              <i className="bx bxl-linkedin text-2xl text-white hover:text-yellow"></i>
            </Link>
            <Link
              to="https://www.instagram.com/abhay_desai_110/"
              className="pl-4"
              target="_blank"
            >
              <i className="bx bxl-instagram text-2xl text-white hover:text-yellow"></i>
            </Link>
            <Link
              to="https://github.com/abhaydesai110"
              className="pl-4 "
              target="_black"
            >
              <i className="bx bxl-github text-2xl text-white hover:text-yellow"></i>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

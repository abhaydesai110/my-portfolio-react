import React from "react";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import "../Pages/button.css";
import Abhay from "../assets/img/Abhay.jpeg";
import Resume from "../assets/img/AbhayDesai_3_Year_Exp_React_Js.pdf";

const Home = () => {
  return (
    <div>
      <div className="relative sticky bg-cover  bg-center  bg-no-repeat py-8">
        <div className="absolute  inset-0 bg-fixed  lg:bg-[url('../src/assets/img/ReactWallpaper8.png')] bg-[url('../src/assets/img/MobileBg4.jpeg')]  bg-cover bg-center bg-no-repeat"></div>

        <div className="container relative  pt-20 pb-12 sm:pt-56 sm:pb-48 lg:pt-64 lg:pb-48">
          <div className="flex flex-col items-center justify-center lg:flex-row">
            <div className="rounded-full animate-upDown border-8 border-primary shadow-xl">
              <img
                src={Abhay}
                className="h-48 object-scale-down rounded-full sm:h-56"
              />
            </div>
            <div className="pt-8 sm:pt-10 lg:pl-8 lg:pt-0">
              <h1 className="text-center font-header text-3xl text-white sm:text-left sm:text-5xl md:text-5xl">
                <h1 className=" lg:text-left md:text-center">Hello </h1>
                <TypeAnimation
                  className="text-center font-header text-2xl text-white sm:text-left sm:text-5xl  md:text-5xl"
                  sequence={["I'm Abhay Desai!", 1000, "", 1000]}
                  wrapper="span"
                  speed={200}
                  // style={{ fontSize: "40px", display: "block" }}
                  repeat={Infinity}
                />
              </h1>
              <div className="flex flex-col justify-center pt-3 sm:flex-row sm:pt-5 lg:justify-start">
                <div className="flex items-center justify-center pl-0 sm:justify-start md:pl-1">
                  <p className="font-body text-lg uppercase text-white">
                    Let's connect
                  </p>
                  <div className="hidden sm:block">
                    <i className="bx bx-chevron-right text-3xl text-yellow"></i>
                  </div>
                </div>
                <div className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0">
                  <Link
                    to="https://www.facebook.com/abhay.desai.9028"
                    target="_black"
                  >
                    <i className="bx bxl-facebook-square text-2xl text-white hover:text-yellow"></i>
                  </Link>
                  <Link
                    to="https://www.twitter.com/abhaydesai110"
                    target="_black"
                    className="pl-4"
                  >
                    <i className="bx bxl-twitter text-2xl text-white hover:text-yellow"></i>
                  </Link>
                  <Link
                    to="https://abhaydesai.netlify.app/"
                    className="pl-4"
                    target="_black"
                  >
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
              <div className="flex items-center justify-center xl:items-center pl-0 sm:justify-start md:pl-1 mt-8">
                <Link to={Resume} download="AbhayDesai_3_Year_Exp_React_Js" target="_black">
                  <button className="btn classes.navLinks">
                    <span>Download CV</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import EventoPackage from "../assets/img/eventopakage.png";
import FestumField from "../assets/img/festumfield2.png";
import Interior from "../assets/img/Interior.png";
import MyWebsite from "../assets/img/AbhayWebsite.png";
import Demo from "../assets/img/Demo_Dashboard.png";
import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <div className="bg-grey-50">
      <div className="container py-16 md:py-20" id="portfolio">
        <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
          Check out my Portfolio
        </h2>
        <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
          Here's what I have done with the past
        </h3>

        <div className="mx-auto grid w-full grid-cols-1 gap-8 pt-12 sm:w-3/4 md:gap-10 lg:w-full lg:grid-cols-2">
          <Link
            to="https://eventopackage.com/"
            className="mx-auto transform transition-all shadow-2xl hover:scale-105 md:mx-0"
            target="_blanl"
          >
            <img src={EventoPackage} className="w-full h-full shadow" />
          </Link>
          <Link
            to="https://festumfield.com/"
            className="mx-auto transform transition-all shadow-2xl hover:scale-105 md:mx-0"
            target="_blank"
          >
            <img src={FestumField} className="w-full shadow" />
          </Link>
          <Link
            to="https://interiormt.netlify.app/"
            target="_blank"
            className="mx-auto transform transition-all shadow-2xl hover:scale-105 md:mx-0"
          >
            <img src={Interior} className="w-full shadow" />
          </Link>
          <Link
            href="https://abhaydesai.netlify.app"
            className="mx-auto transform transition-all shadow-2xl  hover:scale-105 md:mx-0"
            target="_blank"
          >
            <img src={MyWebsite} className="w-full shadow " />
          </Link>
          {/* <Link
            to="https://www.bdhtppm.com/"
            target="_blank"
            className="mx-auto transform transition-all shadow-2xl hover:scale-105 md:mx-0"
          >
            <img src={Demo} className="w-full shadow" />
          </Link> */}

        </div>
      </div>
    </div>
  );
};

export default Portfolio;

import React from "react";
import ScalelotLogo from "../../src/assets/img/ScalelotLogo2.jpg";
import JeevesLogo from "../../src/assets/img/JeevesLogo.svg";
import Webytude from "../assets/img/webytude-logo.png";
import { Link } from "react-router-dom";

const MyExperience = () => {
  return (
    <div className="">
      <div className="container  py-16 md:py-20" id="work">
        <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
          My work experience
        </h2>
        <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl"></h3>

        <div className="relative mx-auto mt-12 flex w-full flex-col lg:w-2/3">
          <span className="left-2/5 absolute inset-y-0 ml-10 hidden w-0.5 bg-grey-40 md:block"></span>

          <div className="mt-8 flex flex-col text-center md:flex-row md:text-left">
            <div className="md:w-2/5">
              <div className="flex justify-center md:justify-start">
                <span className="shrink-0">
                  <img src={ScalelotLogo} className="h-12 w-12" />
                </span>
                <div className="relative ml-3 hidden w-full md:block">
                  <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70"></span>
                </div>
              </div>
            </div>
            <div className="md:w-3/5">
              <div className="relative flex md:pl-18">
                <span className="absolute left-8 top-1 hidden h-4 w-4 rounded-full border-2 border-grey-40 bg-white md:block"></span>

                <div className="mt-1 flex">
                  <i className="bx bxs-right-arrow hidden text-primary md:block"></i>
                  <div className="md:-mt-1 md:pl-8">
                    <span className="block font-body font-bold text-grey-40">
                      Auguset 2023 - Present
                    </span>
                    <span className="block pt-2 font-header text-xl font-bold uppercase text-primary">
                      React Js Developer (SCALELOT TECHNOLOGY)
                    </span>
                    <div className="pt-2">
                      <span className="block font-body text-black">
                        As a React.js developer at Scalelot Technology, I create
                        and maintain scalable web applications, utilizing
                        cutting-edge technologies to deliver exceptional user
                        experiences and robust functionality.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 flex flex-col text-center md:flex-row md:text-left">
            <div className="md:w-2/5">
              <div className="flex justify-center md:justify-start">
                <span className="shrink-0">
                  <img src={Webytude} className="h-auto w-32 " />
                </span>
                <div className="relative ml-3 hidden w-full md:block">
                  <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70"></span>
                </div>
              </div>
            </div>
            <div className="md:w-3/5">
              <div className="relative flex md:pl-18">
                <span className="absolute left-8 top-1 hidden h-4 w-4 rounded-full border-2 border-grey-40 bg-white md:block"></span>

                <div className="mt-1 flex">
                  <i className="bx bxs-right-arrow hidden text-primary md:block"></i>
                  <div className="md:-mt-1 md:pl-8">
                    <span className="block font-body font-bold text-grey-40">
                      January 2022 - July 2022
                    </span>
                    <span className="block pt-2 font-header text-xl font-bold uppercase text-primary">
                      Reacj Js InternShip (Webytude web SOLUTION)
                    </span>
                    <div className="pt-2">
                      <span className="block font-body text-black">
                        I completed a React.js internship, gaining practical
                        experience in building web applications with JavaScript,
                        React components, state management, and modern frontend
                        development techniques.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 flex flex-col text-center md:flex-row md:text-left">
            <div className="md:w-2/5">
              <div className="flex justify-center md:justify-start">
                <span className="shrink-0">
                  <img src={JeevesLogo} className="h-auto w-32" />
                </span>
                <div className="relative ml-3 hidden w-full md:block">
                  <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70"></span>
                </div>
              </div>
            </div>
            <div className="md:w-3/5">
              <div className="relative flex md:pl-18">
                <span className="absolute left-8 top-1 hidden h-4 w-4 rounded-full border-2 border-grey-40 bg-white md:block"></span>

                <div className="mt-1 flex">
                  <i className="bx bxs-right-arrow hidden text-primary md:block"></i>
                  <div className="md:-mt-1 md:pl-8">
                    <span className="block font-body font-bold text-grey-40">
                      August 2018 - December 2021
                    </span>
                    <span className="block pt-2 font-header text-xl font-bold uppercase text-primary">
                      Team Leader (JEEVES CONSUMER SERVICES)
                    </span>
                    <div className="pt-2">
                      <span className="block font-body text-black">
                        As Team Leader at Jeeves Consumer Services, I excelled
                        in managing electronics repair teams, optimizing
                        workflows, and achieving exceptional customer
                        satisfaction through efficient service delivery.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyExperience;

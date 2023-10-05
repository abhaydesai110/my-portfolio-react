import React from "react";
import WebDesigneWhite from "../../src/assets/img/icon-graphics-white.svg";
import WebDesigneBlack from "../../src/assets/img/icon-graphics-black.svg";
import WebDevelopement from "../../src/assets/img/icon-development-black.svg";
import WebDevelopementWhite from "../../src/assets/img/icon-development-white.svg";
import StateManagementWhite from "../../src/assets/img/icon-content-black.svg";
import StateManagementBlack from "../../src/assets/img/icon-content-white.svg";
import ComponentWhite from "../../src/assets/img/icon-mobile-white.svg";
import ComponentBlack from "../../src/assets/img/icon-mobile-black.svg";
import EmailWhite from "../../src/assets/img/icon-email-white.svg";
import EmailBlack from "../../src/assets/img/icon-email-black.svg";
import DebuggWhite from "../../src/assets/img/icon-design-white.svg";
import DebuggBlack from "../../src/assets/img/icon-design-black.svg";
import Github from "../assets/img/Untitled_design-removebg-preview.png"

const Services = () => {
  return (
    <div>
      <div className="container py-16 md:py-20" id="services">
        <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
          Here's what I'm good at
        </h2>
        <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
          These are the services Ioffer
        </h3>

        <div className="grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3">
          <div className="group rounded px-8 py-12 shadow duration-300 hover:bg-primary">
            <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
              <div className="hidden group-hover:block">
                <img src={WebDevelopementWhite} />
              </div>
              <div className="block group-hover:hidden">
                <img src={WebDevelopement} />
              </div>
            </div>
            <div className="text-center">
              <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                WEB DEVELOPMENT
              </h3>
              <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div className="group rounded px-8 py-12 shadow  duration-300 hover:bg-primary">
            <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
              <div className="hidden group-hover:block">
                <img src={StateManagementBlack} />
              </div>
              <div className="block group-hover:hidden">
                <img src={StateManagementWhite} />
                <img src={StateManagementBlack} />
              </div>
            </div>
            <div className="text-center">
              <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                State Management
              </h3>
              <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                React provides tools like Redux and React Context API for
                managing application state. Developers use these tools to manage
                data and UI state efficiently.
              </p>
            </div>
          </div>
          <div className="group rounded px-8 py-12 shadow  duration-300 hover:bg-primary">
            <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
              <div className="hidden group-hover:block">
                <img src={ComponentWhite} />
              </div>
              <div className="block group-hover:hidden">
                <img src={ComponentBlack} />
              </div>
            </div>
            <div className="text-center">
              <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                Component Development
              </h3>
              <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                React is built around the concept of reusable UI components.
                React developers create and maintain these components, which can
                be combined to build complex user interfaces.
              </p>
            </div>
          </div>
          <div className="group rounded px-8 py-12 shadow  duration-300 hover:bg-primary">
            <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
              <div className="hidden group-hover:block">
                <img src={EmailWhite} />
              </div>
              <div className="block group-hover:hidden">
                <img src={EmailBlack} />
              </div>
            </div>
            <div className="text-center">
              <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                Documentation
              </h3>
              <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div className="group rounded px-8 py-12 shadow  duration-300 hover:bg-primary">
            <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
              <div className="hidden group-hover:block">
                <img src={DebuggWhite} />
              </div>
              <div className="block group-hover:hidden">
                <img src={DebuggBlack} />
              </div>
            </div>
            <div className="text-center">
              <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                Debugging and Troubleshooting
              </h3>
              <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                React frequently releases new versions, and so we have may be
                involved in upgrading existing projects to the latest React
                version or migrating from older libraries or frameworks.
              </p>
            </div>
          </div>
          <div className="group rounded px-8 py-12 shadow  duration-300 hover:bg-primary">
            <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
              <div className="hidden group-hover:block">
                <img src={WebDesigneWhite} />
              </div>
              <div className="block group-hover:hidden">
                <img src={WebDesigneBlack} />
              </div>
            </div>
            <div className="text-center">
              <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                Web Design
              </h3>
              <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

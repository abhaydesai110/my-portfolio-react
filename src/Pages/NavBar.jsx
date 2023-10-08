import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { BiCodeAlt } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseFill } from "react-icons/ri";

const NavBar = () => {
  const outside = useRef(null);
  const inside = useRef(null);
  const smoothScrollTo = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        behavior: "smooth",
        top: targetElement.offsetTop,
      });
    }
  };

  // Add state to manage the mobile menu
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMenu = () => {
    setMobileMenuOpen(outside.current.false);
  };
  const inneNav = () => {
    setMobileMenuOpen(inside.current.true);
  };

  return (
    <div>
      <nav className="w-full z-50 top-0 py-3 sm:py-5 absolute">
        <div className="container flex items-center justify-between">
          <div>
            <Link to="">
              <div className="flex items-center justify-center">
                <BiCodeAlt size="50px" cursor="none" color="red" />
                <h1 className="font-logofont text-white text-4xl">ABHAY</h1>
              </div>
            </Link>
          </div>
          <div className="hidden lg:block">
            <ul className="flex items-center">
              <li className="group pl-6">
                <Link
                  to="/about"
                  className="cursor-pointer pt-0.5 font-header font-semibold uppercase hover:text-yellow duration-300 hover:font-bold text-white"
                  onClick={() => smoothScrollTo("about")}
                >
                  About
                </Link>

                <span className="block h-0.5 w-full bg-transparent duration-500 group-hover:bg-error"></span>
              </li>

              <li className="group pl-6">
                <Link
                  to="/services"
                  className="cursor-pointer pt-0.5 font-header font-semibold uppercase hover:text-yellow duration-300 hover:font-bold text-white"
                  onClick={() => smoothScrollTo("services")}
                >
                  Services
                </Link>

                <span className="block h-0.5 w-full bg-transparen duration-500 group-hover:bg-error"></span>
              </li>

              <li className="group pl-6">
                <Link
                  to="/portfolio"
                  className="cursor-pointer pt-0.5 font-header font-semibold uppercase hover:text-yellow duration-300 hover:font-bold text-white"
                  onClick={() => smoothScrollTo("portfolio")}
                >
                  Portfolio
                </Link>

                <span className="block h-0.5 w-full bg-transparen duration-500 group-hover:bg-error"></span>
              </li>

              {/* <li className="group pl-6">
                <Link
                  to="/clients"
                  className="cursor-pointer pt-0.5 font-header font-semibold uppercase hover:text-yellow duration-300 hover:font-bold text-white"
                  onClick={() => smoothScrollTo("clients")}
                >
                  clients
                </Link>

                <span className="block h-0.5 w-full bg-transparen duration-500 group-hover:bg-error"></span>
              </li> */}

              <li className="group pl-6">
                <Link
                  to="/work"
                  className="cursor-pointer pt-0.5 font-header font-semibold uppercase hover:text-yellow duration-300 hover:font-bold text-white"
                  onClick={() => smoothScrollTo("work")}
                >
                  Work
                </Link>

                <span className="block h-0.5 w-full bg-transparen duration-500 group-hover:bg-error"></span>
              </li>

              <li className="group pl-6">
                <Link
                  to="/statistics"
                  className="cursor-pointer pt-0.5 font-header font-semibold uppercase hover:text-yellow duration-300 hover:font-bold text-white"
                  onClick={() => smoothScrollTo("statistics")}
                >
                  Statistics
                </Link>

                <span className="block h-0.5 w-full bg-transparen duration-500 group-hover:bg-error"></span>
              </li>

              {/* <li className="group pl-6">
                <Link
                  to="/blogss"
                  className="cursor-pointer pt-0.5 font-header font-semibold uppercase hover:text-yellow duration-300 hover:font-bold text-white"
                  onClick={() => smoothScrollTo("blogss")}
                >
                  Blogs
                </Link>

                <span className="block h-0.5 w-full bg-transparen duration-500 group-hover:bg-error"></span>
              </li> */}

              <li className="group pl-6">
                <Link
                  to="/contacts"
                  className="cursor-pointer pt-0.5 font-header font-semibold uppercase hover:text-yellow duration-300 hover:font-bold text-white"
                  onClick={() => smoothScrollTo("contacts")}
                >
                  contacts
                </Link>

                <span className="block h-0.5 w-full bg-transparen duration-500 group-hover:bg-error"></span>
              </li>
            </ul>
          </div>
          <div className="block lg:hidden">
            <button className="text-formerror hover:text-white duration-300 text-xl " onClick={toggleMobileMenu}>
              {/* Add a mobile menu icon (e.g., hamburger menu icon) */}
              <GiHamburgerMenu size="35px" />
            </button>
          </div>
        </div>
      </nav>
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <section
          ref={outside}
          className="fixed inset-0 z-60   min-h-screen bg-black bg-opacity-70 opacity-100 transition-opacity lg:hidden"
          onClick={closeMenu}
          // style={{ display: "block" }}
        >
          <div className=""></div>
          <div
            ref={inside}
            onClick={inneNav}
            className="absolute right-0 min-h-screen w-2/3 bg-primary py-4 px-8 shadow md:w-1/3"
          >
            <button
              className="absolute text-formerror top-0 right-0 mt-4 mr-4"
              onClick={toggleMobileMenu}
            >
              <RiCloseFill size="35px" />
            </button>
            <ul className="mt-8 flex flex-col z-40">
              <li
                className="py-2 hover:bg-error rounded-md duration-300"
                onClick={() => {
                  toggleMobileMenu;
                  smoothScrollTo("about");
                }}
              >
                <span className="cursor-pointer pt-0.5 font-header mx-5 hover:bg-blue-700 font-semibold uppercase text-white">
                  About
                </span>
              </li>

              <li
                className="py-2 hover:bg-error rounded-md duration-300 "
                onClick={() => {
                  toggleMobileMenu;
                  smoothScrollTo("services");
                }}
              >
                <span className="cursor-pointer pt-0.5 font-header mx-5 hover:bg-blue-700 font-semibold uppercase text-white">
                  Services
                </span>
              </li>

              <li
                className="py-2 hover:bg-error rounded-md duration-300"
                onClick={() => {
                  toggleMobileMenu;
                  smoothScrollTo("portfolio");
                }}
              >
                <span className="cursor-pointer pt-0.5 font-header mx-5 hover:bg-blue-700 font-semibold uppercase text-white">
                  Portfolio
                </span>
              </li>

              {/* <li className="py-2 hover:bg-error rounded-md duration-300"   onClick={() => {
                  toggleMobileMenu;
                  smoothScrollTo("clients");
                }}>
                <span className="cursor-pointer pt-0.5 font-header mx-5 hover:bg-blue-700 font-semibold uppercase text-white">
                  Clients
                </span>
              </li> */}

              <li
                className="py-2 hover:bg-error rounded-md duration-300"
                onClick={() => {
                  toggleMobileMenu;
                  smoothScrollTo("work");
                }}
              >
                <span className="cursor-pointer pt-0.5 font-header mx-5 hover:bg-blue-700 font-semibold uppercase text-white">
                  Work
                </span>
              </li>

              <li
                className="py-2 hover:bg-error rounded-md duration-300"
                onClick={() => {
                  toggleMobileMenu;
                  smoothScrollTo("statistics");
                }}
              >
                <span className="cursor-pointer pt-0.5 font-header mx-5 hover:bg-blue-700 font-semibold uppercase text-white">
                  Statistics
                </span>
              </li>

              {/* <li className="py-2 hover:bg-error rounded-md duration-300" onClick={toggleMobileMenu}>
                <span className="cursor-pointer pt-0.5 font-header mx-5 hover:bg-blue-700 font-semibold uppercase text-white">
                  Blog
                </span>
              </li> */}

              <li
                className="py-2 hover:bg-error rounded-md duration-300"
                onClick={() => {
                  toggleMobileMenu;
                  smoothScrollTo("contacts");
                }}
              >
                <span className="cursor-pointer pt-0.5 font-header mx-5 hover:bg-blue-700 font-semibold uppercase text-white">
                  Contact
                </span>
              </li>
            </ul>
          </div>
        </section>
      )}
    </div>
  );
};

export default NavBar;

import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  const smoothScrollTo = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        behavior: "smooth",
        top: targetElement.offsetTop,
      });
    }
  };
  return (
    <div>
      <nav className="w-full z-50 top-0 py-3 sm:py-5  absolute">
        <div className="container flex items-center justify-between">
          <div>
            <a href="#home">
              <h1 className="font-logofont text-white text-4xl">Abhay</h1>
            </a>
          </div>
          <div className="hidden lg:block">
            <ul className="flex items-center">
              <li className="group pl-6">
                <Link
                  to="/about"
                  className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                  onClick={() => smoothScrollTo("about")}
                >
                  About
                </Link>

                <span className="block h-0.5 w-full bg-transparent  group-hover:bg-yellow"></span>
              </li>

              <li className="group pl-6">
                <Link
                  to="/services"
                  className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                  onClick={() => smoothScrollTo("services")}
                >
                  Services
                </Link>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

              <li className="group pl-6">
                <Link
                  to="/portfolio"
                  className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                  onClick={() => smoothScrollTo("portfolio")}
                >
                  Portfolio
                </Link>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

              {/* <li className="group pl-6">
                <Link
                  to="/clients"
                  className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                  onClick={() => smoothScrollTo("clients")}
                >
                  clients
                </Link>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li> */}

              <li className="group pl-6">
                <Link
                  to="/work"
                  className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                  onClick={() => smoothScrollTo("work")}
                >
                  Work
                </Link>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

              <li className="group pl-6">
                <Link
                  to="/statistics"
                  className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                  onClick={() => smoothScrollTo("statistics")}
                >
                  Statistics
                </Link>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

              {/* <li className="group pl-6">
                <Link
                  to="/blogss"
                  className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                  onClick={() => smoothScrollTo("blogss")}
                >
                  Blogs
                </Link>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li> */}

              <li className="group pl-6">
                <Link
                  to="/contacts"
                  className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                  onClick={() => smoothScrollTo("contacts")}
                >
                  contacts
                </Link>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>
            </ul>
          </div>
          <div className="block lg:hidden">
            <button>
              <i className="bx bx-menu text-4xl text-white"></i>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

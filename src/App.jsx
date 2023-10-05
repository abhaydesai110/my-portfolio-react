import React from "react";

// import GraphicWhite from "../src/assets/img/icon-graphics-white.svg";

import About from "./Pages/About";
import Services from "./Pages/Services";
import Portfolio from "./Pages/Portfolio";
import MyExperience from "./Pages/MyExperience";
import Home from "./Pages/Home";
import NavBar from "./Pages/NavBar";
import Contact from "./Pages/Contact";
import Statistic from "./Pages/Statistic";
import Blogs from "./Pages/Blogs";
import Footer from "./Pages/Footer";
import DailyUpdates from "./Pages/DailyUpdates";
import MobileNavbar from "./Pages/MobileNavbar";
import Clients from "./Pages/Clients";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Github from "./Pages/Github";
// import AbhayzImage from "../src/assets/img/blog-author.jpg"

const App = () => {
  return (
    <>
      <div>
        <NavBar />
        {/* <MobileNavbar /> */}
        <Home id="home" />
        <About id="about" />
        <Github />
        <Services id="services" />
        <Portfolio id="portfolio" />
        <Clients id="clients" />
        <MyExperience id="work" />
        <Statistic id="statistics" />
        <Contact id="contacts" />
        {/* <Blogs id="blogss" /> */}
        <DailyUpdates id="dailyupdates" />
        <Footer id="footer" />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </div>
    </>
  );
};

export default App;

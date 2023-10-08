import React, { useState } from "react";
import { toast } from "react-toastify";

const DailyUpdates = () => {
  const [email, setEmail] = useState("");
  return (
    <div>
      <div className="relative bg-primary bg-cover bg-center bg-no-repeat py-16 bg-blend-multiply lg:py-24">
        <div className="container relative z-30">
          <h3 className="text-center font-header text-3xl uppercase leading-tight tracking-wide text-white sm:text-4xl lg:text-5xl">
            Keep <span className="font-bold">up-to-date</span> <br />
            with what I'm up to
          </h3>
          <form className="mt-6 flex flex-col justify-center sm:flex-row">
            <input
              className="w-full rounded px-4 py-3 font-body text-black sm:w-2/5 sm:py-4 lg:w-1/3"
              type="email"
              id="email"
              placeholder="Give me your Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                toast.success(email !== "" ? "Email sent Successfully" : null);
                setTimeout(() => {
                  setEmail(" ");
                }, 200);
              }}
              className="mt-2 rounded bg-yellow px-8 py-3 font-body text-base font-bold uppercase text-primary transition-colors  duration-300 hover:bg-primary hover:text-white focus:border-transparent focus:outline-none focus:ring focus:ring-yellow sm:ml-2 sm:mt-0 sm:py-4 md:text-lg"
            >
              Join the club
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DailyUpdates;

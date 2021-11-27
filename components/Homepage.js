import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import Link from "next/link";

const Homepage = () => {
  const [petData, setPetData] = useState({});

  console.log(petData);

  useEffect(() => {
    fetch("/homepagePets.json")
      .then((res) => res.json())
      .then((data) => setPetData(data));
  }, []);
  return (
    <Layout>
      <div className="Homepage w-screen sm:h-screen pb-24 relative font-asap">
        <div className="flex flex-col pt-24">
          <img className="ml-4 sm:hidden" src="/images/dogcat.svg" alt="" />
          <div className="flex justify-center relative bottom-5">
            <button className="bg-purple-500 sm:hidden p-4 w-[200px] rounded-full font-medium text-2xl text-white">
              Find your pet
            </button>
          </div>
          <div className="hidden sm:flex sm:ml-[80px] sm:max-w-[50%] sm:flex-col sm:mt-[100px]">
            <h1 className="sm:text-5xl md:text-6xl font-medium">
              Adopt a pet to change your life.
            </h1>
            <p className="font-bellota mt-[22px] text-lg md:text-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus
              sodales habitasse ultricies ut.
            </p>
            <div className="flex gap-2 mt-[30px]">
              <Link href="/adopt">
                <button className="text-xl font-medium lg:text-2xl px-6 lg:px-8 text-white bg-purple-500 rounded-full h-[55px] md:h-[64px] hover:shadow-xl active:scale-90 transition duration-150">
                  Find your pet
                </button>
              </Link>

              <a
                target="_blank"
                href="https://mailchi.mp/70538d956382/furever-pets"
              >
                <button className="text-xl relative font-medium z-10 lg:text-2xl px-6 lg:px-8 text-black bg-white rounded-full h-[55px] md:h-[64px]  hover:shadow-xl active:scale-90 transition duration-150">
                  Join Us
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Mobile */}

        <div className="flex flex-col justify-center sm:hidden items-center">
          <h2 className="font-bellota text-[30px]">
            Find your nearest shelter!
          </h2>
          <div>
            <div className="mt-1 flex rounded-md shadow-sm">
              <div className="relative flex items-stretch flex-grow focus-within:z-10">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"></div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-none pl-10 text-[23px] border-gray-300"
                  placeholder="Zip Code"
                />
              </div>
              <button
                type="button"
                className="-ml-px relative inline-flex items-center space-x-2 px-4 py-2 border border-gray-300 text-[23px] font-medium text-white bg-purple-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
              >
                <span>Submit</span>
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:hidden justify-center items-center mt-[42px]">
          <h2 className="uppercase text-[26px] sm:hidden">Asap home needed</h2>
          <div className="flex mt-[28px] overflow-scroll">
            <img src="/images/cat7.svg" alt="" />
            <img src="/images/dog15.svg" alt="" />
            <img src="/images/dog16.svg" alt="" />
          </div>
        </div>

        <div className="flex flex-col sm:hidden justify-center items-center mt-[42px]">
          <h2 className="uppercase text-[26px]">Kid Friendly</h2>
          <div className="flex mt-[28px] overflow-scroll">
            <img src="/images/cat2.svg" alt="" />
            <img src="/images/dog1.svg" alt="" />
            <img src="/images/cat2.svg" alt="" />
          </div>
        </div>

        <div className="flex flex-col sm:hidden justify-center items-center mt-[42px]">
          <h2 className="uppercase text-[26px]">Suited for small homes</h2>
          <div className="flex mt-[28px] overflow-scroll">
            <img src="/images/cat8.svg" alt="" />
            <img src="/images/cat9.svg" alt="" />
            <img src="/images/dog18.svg" alt="" />
          </div>
        </div>

        <img
          className="hidden relative z-5 sm:absolute sm:flex sm:bottom-0 sm:right-0 sm:max-w-md md:max-w-lg lg:max-w-xl"
          src="/images/homeimg.png"
          alt=""
        />
      </div>
    </Layout>
  );
};

export default Homepage;

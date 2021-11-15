import React from "react";
import Layout from "../components/Layout";
import { FaSearch } from "react-icons/fa";
import PetCard from "../components/PetCard";

const pets = [
  {
    name: "Charlie",
    img: "/images/dog8.jpeg",
  },
  {
    name: "Jake",
    img: "/images/dog2.jpeg",
  },
  {
    name: "Diesel",
    img: "/images/dog9.jpeg",
  },
  {
    name: "Sammy",
    img: "/images/cat1.jpeg",
  },
  {
    name: "Angel",
    img: "/images/cat5.jpeg",
  },
  {
    name: "Buddy",
    img: "/images/dog3.jpeg",
  },
];

const Adopt = () => {
  return (
    <Layout>
      <div className="Adopt relative w-screen h-full">
        <div className="hidden sm:block sm:absolute sm:right-0 sm:top-20">
          <img
            className="w-[130px] md:w-[160px] slide-in-right"
            src="/images/binoculars.png"
            alt=""
          />
        </div>
        <div className="flex flex-col justify-center items-center pt-40 font-asap text-white font-medium">
          <h1 className="adopt-heading text-[52px] mb-[22px]">Adopt a pet</h1>
          <div className="flex items-center justify-center">
            <div class="relative w-full text-gray-600 mr-2">
              <input
                class="placeholder-gray-300 bg-white h-10 pl-4 w-[400px] md:w-[500px] lg:w-[600px] rounded-lg text-lg focus:outline-none"
                placeholder="Search for a pet"
              />

              <div type="submit" class="absolute right-0 top-3 mr-4">
                <FaSearch />
              </div>
            </div>

            <div className="text-black cursor-pointer relative">
              <img className="w-[30px]" src="/images/filter.svg" alt="" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-center gap-8 py-[38px] mx-[15px]">
          {pets.map((pet) => (
            <PetCard pet={pet} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Adopt;

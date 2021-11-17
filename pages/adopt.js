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
            className="w-[140px] slide-in-right"
            src="/images/binoculars.png"
            alt=""
          />
        </div>
        <div className="flex flex-col justify-center items-center pt-40 font-asap text-white font-medium">
          <h1 className="adopt-heading text-5xl md:text-6xl mb-[22px]">
            Adopt a pet
          </h1>
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

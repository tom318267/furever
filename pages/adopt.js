import React from "react";
import Layout from "../components/Layout";
import PetCard from "../components/PetCard";

const Adopt = ({ pets }) => {
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
        <div className="font-quest py-20 bg-grayBackground">
          <div className="flex flex-col justify-center items-center pt-28 font-asap text-white font-medium">
            <h1 className="adopt-heading text-5xl lg:text-7xl md:text-6xl mb-[22px]">
              Adopt a pet
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl mb-5 font-bellota">
              Help us find these loving pets a home!
            </p>
          </div>
          <div className="flex flex-col items-center sm:flex-row sm:flex-wrap sm:items-stretch sm:justify-center">
            {pets.map((pet) => (
              <PetCard key={pet.id} pet={pet} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Adopt;

export async function getServerSideProps() {
  const res = await fetch("https://furever-pets-api.herokuapp.com/pets");
  const data = await res.json();

  return {
    props: {
      pets: data,
    },
  };
}

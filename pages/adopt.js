import React, { useEffect } from "react";
import { getPets } from "../actions/pets";
import Layout from "../components/Layout";
import PetCard from "../components/PetCard";
import { connect } from "react-redux";

const Adopt = ({ pets, getPets }) => {
  useEffect(() => {
    getPets();
  }, []);

  return !pets ? (
    <h1>Loading...</h1>
  ) : (
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
            <PetCard key={pet.name} pet={pet} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  pets: state.pets.pets,
});

export default connect(mapStateToProps, { getPets })(Adopt);

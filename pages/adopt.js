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
        <div className="font-quest py-20 bg-grayBackground">
          <div className="flex flex-col justify-center items-center pt-28 font-asap text-white font-medium">
            <h1 className="adopt-heading text-5xl md:text-6xl mb-[22px]">
              Adopt a pet
            </h1>
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

const mapStateToProps = (state) => ({
  pets: state.pets.pets,
});

export default connect(mapStateToProps, { getPets })(Adopt);

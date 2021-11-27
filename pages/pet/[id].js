import React from "react";
import Layout from "../../components/Layout";

const PetPage = ({ petData }) => {
  return (
    <Layout>
      <div className="PetPage w-screen h-full py-40 font-asap">
        <div className="max-w-md mx-auto justify-center items-center bg-white shadow-lg rounded-lg flex flex-col">
          <img
            src={petData.img}
            alt={petData.name}
            className="w-full object-cover rounded-t-lg"
          />
          <div className="w-full p-4 justify-start flex flex-col">
            <h4 className="border-b-2 font-bold text-3xl" id="whoobe-3mr7n">
              {petData.name} -{" "}
              <span className="font-normal">{petData.age} years old</span>
            </h4>
            <p className="my-4" id="whoobe-950fw">
              <span className="font-bold">Story: </span>
              {petData.story}
            </p>
            <div className="flex justify-between">
              <p className="font-bold">
                Info: <span className="font-normal">{petData.info}</span>
              </p>

              <p className="font-bold">
                Breed: <span className="font-normal">{petData.breed}</span>
              </p>
            </div>
            <button
              value="button"
              className="px-8 py-2 mt-[16px] bg-purple-500 w-full text-xl rounded-md text-white font-asap font-semibold hover:shadow-xl active:scale-90 transition duration-150"
            >
              Adopt {petData.name}
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PetPage;

export async function getServerSideProps({ query: { id } }) {
  const res = await fetch(`https://furever-pets-api.herokuapp.com/pets/${id}`);
  const data = await res.json();

  return {
    props: {
      petData: data,
    },
  };
}

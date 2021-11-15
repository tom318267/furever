import React from "react";

const PetCard = ({ pet }) => {
  return (
    <div className="PetCard w-full font-asap rounded-lg">
      <div className="bg-white relative p-4 w-full rounded-lg">
        <img
          className="w-full h-[250px] sm:h-[160px] object-cover"
          src={pet.img}
          alt=""
        />
        <img
          className="absolute top-8 left-8 cursor-pointer"
          src="/images/heart.svg"
          alt=""
        />
        <h1 className="text-xl mt-[16px] font-semibold">{pet.name}</h1>
        <p>
          Sed vel turpis adipiscing penatibus orci neque. Erat sed fermentum
          ipsum vel quis quam. Nunc etiam dui tortor, non in aliquam lacinia
          tempor.
        </p>
        <div className="flex justify-end">
          <button className="px-8 py-2 mt-[16px] bg-purple-500 rounded-md text-white font-asap font-semibold hover:shadow-xl active:scale-90 transition duration-150">
            Adopt
          </button>
        </div>
      </div>
    </div>
  );
};

export default PetCard;

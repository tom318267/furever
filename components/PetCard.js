import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";

const PetCard = ({ pet }) => {
  const [like, setLike] = useState(false);
  const [selectedDog, setSelectedDog] = useState(null);
  console.log(selectedDog);
  return (
    <div className="PetCard w-full font-asap rounded-lg">
      <div className="bg-white relative p-4 w-full rounded-lg">
        <img
          className="w-full h-[250px] sm:h-[160px] object-cover"
          src={pet.imageUrl}
          alt=""
        />
        <FaHeart
          onClick={() => {
            setLike(!like);
            setSelectedDog(pet);
          }}
          className={`absolute ${
            like ? "text-pink-300" : "text-white"
          } text-white top-8 left-8 text-2xl cursor-pointer`}
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
            Adopt {pet.name}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PetCard;

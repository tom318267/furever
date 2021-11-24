import React, { useState } from "react";
import { FaPaw } from "react-icons/fa";
import Link from "next/dist/client/link";

const PetCard = ({ pet }) => {
  const [like, setLike] = useState(false);
  const [selectedDog, setSelectedDog] = useState(null);

  return (
    <div className="PetCard h-1/2 font-asap rounded-lg m-8">
      <div className="max-w-xs bg-white p-4 rounded overflow-hidden shadow-lg font-quest">
        <img className="w-full object-cover" src={pet.img} alt="clothing" />
        <div className="py-4">
          <p className="text-lg">{pet.story}</p>
          <div className="flex items-center justify-end">
            <button className="px-8 py-2 mt-[16px] bg-purple-500 w-full text-xl rounded-md text-white font-asap font-semibold hover:shadow-xl active:scale-90 transition duration-150">
              <span className="flex items-center justify-center gap-2">
                <FaPaw />
                Adopt {pet.name}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetCard;

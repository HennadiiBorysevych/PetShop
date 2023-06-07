import React, { useState } from "react";
import Image from "next/image";
import Badge from "../public/img/pets/badge.svg";

import { pets } from "../utils/pets.js";

const Pets = () => {
  const [petDetails, setPetDetails] = useState(pets[0]);
  const [petIndex, setPetIndex] = useState(10);

  const getPetDetails = (id) => {
    const pet = pets.find((pet) => {
      return pet.id === id;
    });
    setPetDetails(pet);
  };

  return (
    <section className="bg-pets bg-center py-6 overflow-hidden">
      <div className="flex flex-col lg:flex-row">
        <div className="hidden xl:flex xl:w-[30%] xl:pl-[160px]">
          <Image src={Badge} width={230} height={227} alt="badge" />
        </div>
        <div className="flex-1 flex flex-col lg:flex-row">
          <div className="lg:w-[30%] flex flex-col justify-center items-end pb-6 lg:py-2 mx-auto lg:mx-0">
            <div className="text-center text-white">
              <div className="text-[32px] capitalize">
                {petDetails.category}
              </div>
              <div className="uppercase text-[17px] mb-1">
                ({petDetails.name})
              </div>
              <div className="w-[150px] h-[150px] mx-auto lg:mx-0 border-4 border-white rounded-full ">
                <Image src={petDetails.image} width={150} height={150} alt="" />
              </div>
            </div>
          </div>
          <div className="relative lg:w-[60%] flex-1 flex flex-wrap items-center">
            <ul className="flex flex-wrap gap-4 justify-center lg:justify-end lg:-mr-6">
              {pets.map((pet, index) => {
                return (
                  <li
                    onClick={() => {
                      getPetDetails(pet.id);
                      setPetIndex(index);
                    }}
                    className="cursor-pointer relative"
                    key={index}
                  >
                    <div
                      className={`w-full h-full absolute rounded-full ${
                        petIndex === index
                          ? "border-2 border-white"
                          : "bg-black/40"
                      }`}
                    ></div>
                    <Image
                      src={pet.image}
                      width={95}
                      height={95}
                      alt="pet"
                      draggable="false"
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pets;

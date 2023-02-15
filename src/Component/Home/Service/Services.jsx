import React from "react";
import fluoride from "../../../assets/images/fluoride.png";
import cavity from "../../../assets/images/cavity.png";
import whitening from "../../../assets/images/whitening.png";
import Service from "./Service";

const Services = () => {
  const cardData = [
    {
      id: 1,
      img: fluoride,
      Title: "Fluoride Treatment",
      description: "loremefefdsfdsfsdfsdfdfdfsdf",
      bg: "bg-gradient-to-r from-primary to-dark",
    },
    {
      id: 2,
      img: cavity,
      Title: "Fluoride Treatment",
      description: "loefdsfdsfsdfsdfdfdfsdf",
      bg: "bg-gradient-to-r from-primary to-accent",
    },
    {
      id: 3,
      img: whitening,
      Title: "Teeth Whitening",
      description: "lorefefdsfdsfsdfsdfdfdfsdf",
      bg: "bg-gradient-to-r from-secondary to-primary",
    },
  ];
  return (
    <div>
      {/* center text */}
      <div className="text-center mb-10 mt-10">
        <h3 className="text-xl font-bold text-primary uppercase">
          Our Services
        </h3>
        <h2 className="text-3xl">Servcices We Provide</h2>
      </div>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {cardData.map((card) => (
        <Service key={card.id} card={card}></Service>
      ))}
      </div>
      
    </div>
  );
};

export default Services;

import React from "react";
import clock from "../../../assets/icons/clock.svg";
import marker from "../../../assets/icons/marker.svg";
import phone from "../../../assets/icons/phone.svg";
import InfoCard from "./InfoCard";
const InfoCards = () => {
  const cardData = [
    {
      id: 1,
      name: "Opening Hours",
      description: "Open 9 to 5",
      icon: clock,
      bg: "bg-gradient-to-r from-primary to-secondary",
    },
    {
      id: 2,
      name: "Our Location",
      description: "Open 9 to 5",
      icon: marker,
      bg: "bg-accent",
    },
    {
      id: 3,
      name: "Contact Us",
      description: "Open 9 to 5",
      icon: phone,
      bg: "bg-gradient-to-r from-primary to-secondary",
    },
  ];
  return (
    <div className="grid mt-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {cardData.map((card) => (
        <InfoCard key={card.id} card={card}></InfoCard>
      ))}
    </div>
  );
};

export default InfoCards;

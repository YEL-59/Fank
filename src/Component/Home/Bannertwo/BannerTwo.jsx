import React from "react";
import treatment from "../../../assets/images/treatment.png";
const BannerTwo = () => {
  return (
    <div>
      <div className="hero mt-10 ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div>
            <h1 className="text-4xl font-bold">Your New Smile Starts Here</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">
              Get Started
            </button>
          </div>
          <img
            src={treatment}
            className="lg:w-1/2 rounded-lg shadow-2xl"
            alt=" treatment img"
          />
        </div>
      </div>
    </div>
  );
};

export default BannerTwo;

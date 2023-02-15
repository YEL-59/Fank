import React from "react";

const Service = ({card}) => {
  const {Title,description,img,bg}=card
  return (
    <div>
      <div className={`card text-white p-6  shadow-xl ${bg}`}>
        <figure className="px-10 pt-10">
          <img
            src={img}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{Title}</h2>
          <p>{description}</p>
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;

import React from "react";

const Testimonial = ({ review }) => {
  const { name, location, reviews, img } = review;
  return (
    <div>
      <div className="card  shadow-xl">
        <div className="card-body">
          <p>{review.reviews}</p>
          <div className="flex items-center mt-6 ">
            <div className="avatar ">
              <div className="w-16 h-16  mr-5 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={img} alt="" />
              </div>
              <div>
                <h5 className="text-lg font-bold">{review.name}</h5>
                <p>{review.location}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

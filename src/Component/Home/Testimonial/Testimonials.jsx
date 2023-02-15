import React from "react";
import quote from "../../../assets/icons/quote.svg";
import people1 from   "../../../assets/images/people1.png";
import people2 from   "../../../assets/images/people2.png";
import people3 from   "../../../assets/images/people3.png";
import Testimonial from "./Testimonial";
const Testimonials = () => {
    const reviewsData=[
        {
            id:1,
            img:people1,
            name:'winson Herry',
            reviews:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, voluptates quo incidunt harum minus mollitia! ',
            location:'calrifornia'
        },
        {
            id:2,
            img:people2,
            name:'winson Herry',
            reviews:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, voluptates quo incidunt harum minus mollitia!',
            location:'calrifornia'
        },
        {
            id:3,
            img:people3,
            name:'winson Herry',
            reviews:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, voluptates quo incidunt harum minus mollitia! ',
            location:'calrifornia'
        },
    ]
  return (
    <section className="my-16">
      <div className="flex justify-between">
        <div>
          <h4 className="text-xl text-primary font-bold">Testimonial</h4>
          <h2 className="text-4xl">what Our Patients Says</h2>
        </div>

        <figure className="w-24 lg:w-48">
          <img src={quote} alt="Shoes" className="rounded-xl" />
        </figure>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {
          reviewsData.map(review=>
            <Testimonial
            
            key={review.id} review={review}></Testimonial>
            )
        }
      </div>
    </section>
  );
};

export default Testimonials;

import React from "react";
import doctor from "../../../assets/images/doctor.png";
import appointment from "../../../assets/images/appointment.png";
const MakeAppoinment = () => {
  return (
    <section
      className="mt-16"
      style={{
        background: `url(${appointment})`,
      }}
    >
      <div>
        <div className="hero mt-32 ">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src={doctor}
              className="lg:w-1/2 -mt-32 hidden md:block lg:block rounded-lg shadow-2xl"
              alt=" doctor img"
            />
            <div className="text-white">
              <h4 className="text-lg text-primary font-bold">Appointment</h4>
              <h1 className="text-4xl font-bold">Make An Appointment Today</h1>
              <p className="py-6 ">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppoinment;

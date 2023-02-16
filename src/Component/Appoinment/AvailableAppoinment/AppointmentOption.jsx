import React from "react";

const AppointmentOption = ({ appoinmentOption }) => {
  const { slots, name } = appoinmentOption;
  return (
    <div>
      <div className="card  shadow-xl">
        <div className="card-body text-center ">
          <h2 className="text-2xl text-secondary font-bold text-center">{name}</h2>
          <p>{slots.length>0?slots[0]:'Try Anotherday'}</p>
          <p>{slots.length} {slots.length>1 ?'spaces':'space'} available</p>
          <div className="card-actions justify-center">
            <button className="btn btn-primary text-white">Book Appoinment</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOption;

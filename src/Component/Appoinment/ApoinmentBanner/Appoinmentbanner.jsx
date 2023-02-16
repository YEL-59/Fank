import React, { useState } from "react";
import chair from "../../../assets/images/chair.png";

import { DayPicker } from "react-day-picker";

const Appoinmentbanner = ({selectedDate, setselectedDate }) => {

  return (
    <div>
      <header className="my-6">
        <div className="hero">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src={chair}
              className="max-w-sm lg:w-1/2 rounded"
              alt="chair"
            />
            <div className="mr-6">
              <DayPicker
                mode="single"
                selected={selectedDate}
                onSelect={setselectedDate}
              ></DayPicker>
              {/* <p>You Hava selected date:{format(selectedDate, "pp")}</p> */}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Appoinmentbanner;

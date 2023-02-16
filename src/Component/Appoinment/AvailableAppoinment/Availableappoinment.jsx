import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import AppointmentOption from "./AppointmentOption";
import BookingModalInfo from "../BookingModal/BookingModalInfo";

const Availableappoinment = ({ selectedDate }) => {
  const [appoinmentOptions, setAppoinmentOptions] = useState([]);
  const [treatment,settreatment]=useState(null)
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setAppoinmentOptions(data));
  }, []);
  return (
    <div className="my-6">
      <p className="text-center font-bold text-secondary">
        Available Appointment on: {format(selectedDate, "pp")}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 ">
        {appoinmentOptions.map((option) => (
          <AppointmentOption
            key={option._id}
            appoinmentOption={option}
            settreatment={settreatment}
          ></AppointmentOption>
        ))}
      </div>
      {treatment&&
      <BookingModalInfo
      selectedDate={selectedDate}
      treatment={treatment} ></BookingModalInfo>
      }
    </div>
  );
};

export default Availableappoinment;

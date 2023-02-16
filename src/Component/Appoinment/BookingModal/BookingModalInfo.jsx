import { format } from "date-fns";
import React from "react";

const BookingModalInfo = ({ treatment, selectedDate }) => {
  const { name,slots } = treatment;
  const date = format(selectedDate, "pp");
  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>
          <form action="" className="grid grid-cols-1 gap-2 mt-2">
            <input
              type="text"
              disabled
              value={date}
              className="input w-full input-bordered "
            />
            <select className="select select-bordered w-full ">
              {
                slots.map(slot=><option value={slot}>{slot}</option>)
              }
            </select>
            <input
              type="text"
              placeholder="Type here"
              className="input w-full input-bordered"
            />
            <input
              type="text"
              placeholder="Type here"
              className="input w-full input-bordered"
            />
            <input
              type="text"
              placeholder="Type here"
              className="input w-full input-bordered"
            />
            <input
              type="text"
              placeholder="Type here"
              className="input w-full input-bordered"
            />
            <input
              type="submit"
              className="w-full btn btn-accent text-white"
              value="submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModalInfo;

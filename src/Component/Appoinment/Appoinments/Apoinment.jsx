
import React, { useState } from "react";
import Appoinmentbanner from '../ApoinmentBanner/Appoinmentbanner'
import Availableappoinment from '../AvailableAppoinment/Availableappoinment'


const Apoinment = () => {
  const [selectedDate,setselectedDate]=useState(new Date())
  return (
    <div>
      <Appoinmentbanner selectedDate={selectedDate}
       setselectedDate={setselectedDate}></Appoinmentbanner>
      <Availableappoinment selectedDate={selectedDate}></Availableappoinment>
    </div>
  )
}

export default Apoinment
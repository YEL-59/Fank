import { format } from 'date-fns'
import React from 'react'

const Availableappoinment = ({selectedDate}) => {
  return (
    <div>
        <p className='text-center font-bold text-secondary'>Available Appointment on: {format(selectedDate,'pp')}</p>
    </div>
  )
}

export default Availableappoinment
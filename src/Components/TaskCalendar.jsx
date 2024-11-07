
import { Datepicker } from 'flowbite-react';
import React, { useState } from 'react'

export const TaskCalendar = () => {

  const [selectedDate, setSelectedDate] = useState(new Date()); // Date object

  return (
    <>
<Datepicker
  
  value={selectedDate}
  onChange={setSelectedDate}
  
/>


    </>
  )
}



export default TaskCalendar;

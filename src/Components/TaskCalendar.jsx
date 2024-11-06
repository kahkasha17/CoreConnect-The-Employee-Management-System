import React, { useState, useEffect } from "react";
import Calendar from 'react-calendar';


import { Datepicker } from "flowbite-react";

export const TaskCalendar = () => {
    const [date, setDate] = useState(new Date());
  
    const handleDateChange = (newDate) => {
      setDate(newDate); // Update the date when a new day is selected
    };
  
    return (
      <div className="calendar-container">
        <h2>Select a Date</h2>
        <Calendar
          onChange={handleDateChange}  // Trigger date change handler
          value={date}  // Set the current selected date
          className="my-custom-calendar"  // Optional: Add custom styles
        />
        <p>Selected Date: {date.toDateString()}</p>
      </div>
    );
};

export default TaskCalendar;

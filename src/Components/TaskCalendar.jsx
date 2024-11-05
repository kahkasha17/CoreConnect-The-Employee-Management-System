import React, { useState, useEffect } from "react";
import { Datepicker } from "flowbite-react";


export const TaskCalendar = () => {
    const events = [
        { date: "2024-11-10", title: "Project Deadline" },
        { date: "2024-11-15", title: "Team Meeting" },
        { date: "2024-11-20", title: "Client Presentation" },
      ];
    
      const [selectedDate, setSelectedDate] = useState(null);
      const [eventDetails, setEventDetails] = useState(null);
    
      // Check if the selected date has an event
      useEffect(() => {
        if (selectedDate) {
          const event = events.find(
            (event) => event.date === selectedDate.toISOString().split("T")[0]
          );
          setEventDetails(event || null);
        } else {
          setEventDetails(null);
        }
      }, [selectedDate]);
    
      return (
        <div className="p-4 bg-white rounded-lg shadow-md max-w-md mx-auto">
          <h2 className="text-xl font-semibold text-gray-800 text-center mb-4">
            Select a Date
          </h2>
          <Datepicker
            inline
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
          />
          {eventDetails ? (
            <div className="mt-4 p-3 bg-blue-100 border border-blue-400 rounded-md">
              <h3 className="font-bold text-blue-700">{eventDetails.title}</h3>
              <p className="text-blue-600">Date: {eventDetails.date}</p>
            </div>
          ) : (
            <p className="mt-4 text-gray-500 text-center">
              No events on this date.
            </p>
          )}
        </div>
      );

    }
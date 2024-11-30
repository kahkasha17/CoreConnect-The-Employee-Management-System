import { Datepicker, Card } from "flowbite-react";
import React, { useState } from "react";

export const TaskCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date()); // Date object

  return (
    <>
      <Card className="max-w-sm border-l-8 border-l-teal-700 h-full ">
        <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
          View Your Schedule
        </h5>{" "}
        <Datepicker value={selectedDate} onChange={setSelectedDate} /><br/> <br/>
      </Card>
    </>
  );
};

export default TaskCalendar;

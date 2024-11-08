import { Datepicker, Card } from "flowbite-react";
import React, { useState } from "react";

export const TaskCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date()); // Date object

  return (
    <>
     <Card className="flex flex-col justify-items-start h-full">
  <Datepicker  value={selectedDate} onChange={setSelectedDate} />
</Card>

    </>
  );
};

export default TaskCalendar;

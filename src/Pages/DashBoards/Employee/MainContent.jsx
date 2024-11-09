import React from "react";
import { UserdataCard } from "../../../Components/UserdataCard";
import { Datepicker } from "flowbite-react";
import Footers from "../../../Components/Footers";
import TaskCalendar from '../../../Components/TaskCalendar'
import Tasklist from "../../../Components/Tasklist";
import UpcomingEvent from "../../../Components/UpcomingEvent";
import RequestList from "../../../Components/RequestList";

export const MainContent = () => {
  return (
    <div className="h-screen ">
      <div className="container mx-auto">
        {/* First Row: Three Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
          {/* First Column (takes half the width on medium+ screens) */}
          <div className="col-span-1 md:col-span-2">
            <UserdataCard />
          </div>

          {/* Second Column (takes one-quarter width) */}
          <div className="col-span-1 rounded-md">
            <TaskCalendar/>
          </div>

          {/* Third Column (takes one-quarter width) */}
          <div className="col-span-1  rounded-md">
           <UpcomingEvent/>
          </div>
        </div>

        {/* Second Row: Two Columns, Adjusted Width */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2 mt-6 mb-6 ">
          {/* First Column (takes 3/4 of width on medium+) */}
          <div className="col-span-3 rounded-md">
            <Tasklist/>
          </div>

          {/* Second Column (takes 1/4 of width on medium+) */}
          <div className="col-span-1 rounded-md">
            <RequestList/>
          </div>
        </div>
      </div>
      <Footers/>
    </div>
  );
};

import React from "react";
import { UserdataCard } from "../../../Components/UserdataCard";
import TaskCalendar from "../../../Components/TaskCalendar";
import UpcomingEvent from "../../../Components/UpcomingEvent";
import RequestList from "../../../Components/RequestList";
import Tasklist from "../../../Components/Tasklist";

export const MainContent = () => {
  return (
    <div >
      <div className="container mx-auto px-4">
        {/* First Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* First Column (50% width on medium+ screens) */}
          <div className="col-span-1 md:col-span-2">
            <UserdataCard />
          </div>

          {/* Second and Third Columns (25% width each on medium+ screens) */}
          <div className="col-span-1">
            <TaskCalendar />
          </div>
          <div className="col-span-1">
            <UpcomingEvent />
          </div>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-10">
          {/* First Column (75% width on medium+ screens) */}
          <div className="col-span-1 md:col-span-3">
            <Tasklist />
          </div>

          {/* Second Column (25% width on medium+ screens with 2 rows inside) */}
          <div className="col-span-1 grid grid-rows-2 max-h-screen">
            <div className="rounded-md mb-2">
              <RequestList />
            </div>
            <div className="rounded-md mb-2">
             <RequestList/>

            </div>
            <div className="rounded-md mb-4">
             <RequestList/>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;

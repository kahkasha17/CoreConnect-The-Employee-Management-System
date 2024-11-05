import React from "react";
import { UserdataCard } from "../../../Components/UserdataCard";
import { Datepicker } from "flowbite-react";
import Footers from "../../../Components/Footers";

export const MainContent = () => {
  return (
    <div className="h-screen overflow-y-auto p-4 bg-gray-50">
      <div className="container mx-auto">
        {/* First Row: Three Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* First Column (takes 6/12 on small devices, 3/6 on medium devices) */}
          <div className="col-span-1 md:col-span-2">
            <UserdataCard />
          </div>

          {/* Second Column */}
          <div className="col-span-1">
            <Datepicker inline />
          </div>

          {/* Third Column */}
          <div className="col-span-1 bg-red-500 p-4 rounded-md">
            <h2 className="text-white">Column 3</h2>
          </div>
        </div>

        {/* Second Row: Two equally sized columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          {/* First Column */}
          <div className="col-span-1">
            <UserdataCard />
          </div>
          {/* Second Column */}
          <div className="col-span-1">
            <Datepicker inline />
          </div>
        </div>
      </div>
      <Footers/>
    </div>
  );
};

"use client";
import { Card } from "flowbite-react";
import Buttons from "../Components/Buttons"

import React from "react";

const UpcomingEvent = () => {
  return (
    <>
      <Card className="max-w-sm border-l-8 border-cyan-500 ... h-full">
        <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
          Upcoming Events
        </h5>
        <div className="flex items-baseline text-gray-900 dark:text-white">
          <span className="text-5xl font-extrabold tracking-tight">49</span>
          <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">
            Pending Events
          </span>
        </div>
     
        <Buttons name="See List"/>
      </Card>
    </>
  );
};

export default UpcomingEvent;

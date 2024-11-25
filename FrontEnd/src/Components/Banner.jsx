"use client";

import { Card, Tooltip } from "flowbite-react";
import Button from "./Buttons";

import React from "react";

const Banner = () => {
  return (
    <div className="flex items-center">
      <Card href="#" className="max-w-md ">
        <h5 className="text-3xl font-bold tracking-tight text-center text-gray-900 dark:text-white">
          Welcome to CoreConnect
        </h5>
        {/* <p className="text-justify">Core Connect is a powerful Employee Management System designed to simplify team management. Access employee data, track attendance, and manage roles—all in one place, making everyday operations smoother and more efficient.</p> */}
        <div className="flex justify-between p-4">
  <div className="flex-grow pr-2">
    <Tooltip content="Get Started" trigger="hover">
      <Button name="Get Started" className="w-full" />
    </Tooltip>
  </div>
  <div className="flex-grow pl-2">
    <Tooltip content="Know More" trigger="hover">
      <Button name="Know More" className="w-full" />
    </Tooltip>
  </div>
</div>

      </Card>
    </div>
  );
};

export default Banner;

"use client";

import {Card, Tooltip } from "flowbite-react";
import Button from "../../Components/Buttons";

import React from "react";

const Banner = () => {
  return (
    <div className="flex items-center">
      <Card href="#" className="max-w-lg ">
        <h5 className="text-3xl font-bold tracking-tight text-center text-gray-900 dark:text-white">
          Welcome to CoreConnect
        </h5>
        <p className="text-justify">Core Connect is a powerful Employee Management System designed to simplify team management. Access employee data, track attendance, and manage roles—all in one place, making everyday operations smoother and more efficient.</p>
        <div className="flex gap-2">
          <Tooltip content="Get Started" trigger="hover" className="text-center flex items-center">
            <Button name="Get Started" />
          </Tooltip>
          {/* <Tooltip content="Get Started"  trigger="hover">
            <Button name="Get Started"/>
          </Tooltip> */}
        </div>
      </Card>
    </div>
  );
};

export default Banner;

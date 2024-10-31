"use client";

import { Button, Card, Tooltip } from "flowbite-react";
import React from "react";

const Banner = () => {
  return (
    <div className="flex items-center">
      <Card href="#" className="max-w-sm ">
        <h5 className="text-2xl font-bold tracking-tight text-center text-gray-900 dark:text-white">
          Welcome to CoreConnect
        </h5>
        <p className="text-justify">Core Connect is a powerful Employee Management System designed to simplify team management. Access employee data, track attendance, and manage roles—all in one place, making everyday operations smoother and more efficient.</p>
        {/* <div className="flex gap-2">
          <Tooltip content="Tooltip content" trigger="hover">
            <Button gradientMonochrome="cyan">Tooltip hover</Button>
          </Tooltip>
          <Tooltip content="Tooltip content" trigger="click">
            <Button gradientMonochrome="cyan">Tooltip click</Button>
          </Tooltip>
        </div> */}
      </Card>
    </div>
  );
};

export default Banner;

import { Card } from 'flowbite-react';
import React from 'react'
import Buttons from './Buttons';

const RequestList = () => {
    return (
      <>
      <Card className="max-w-sm border-l-8 border-l-teal-700 ... ">
        <h5 className=" text-xl font-medium text-gray-500 dark:text-gray-400">
          Your Login Details
        </h5>
        <div className="flex items-baseline text-gray-900 dark:text-white">
          <span className="text-5xl font-extrabold tracking-tight">12</span>
          <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">
            Times Late Login
          </span>
        </div>
     
        <Buttons name="See Details"/>
      </Card>
     
    </>
      );
}

export default RequestList
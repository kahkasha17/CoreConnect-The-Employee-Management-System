"use client";

import React from 'react'
import { Alert } from "flowbite-react";


export const Help = () => {
  return (
    <div className='min-h-screen'><Alert color="teal" className='font-bold' rounded>
     For any issues or concerns, kindly reach out to us via email at <span className='font-extrabold text-red-600'>codewithkahkasha1517@gmail.com</span> or contact the IT Manager within your department for further assistance.
  </Alert></div>
  )
}

export default Help;
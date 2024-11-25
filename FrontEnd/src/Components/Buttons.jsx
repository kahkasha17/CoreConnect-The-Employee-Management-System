"use client";

import { Button} from "flowbite-react";
import React from "react";

const Buttons = (props) => {
  return (
    
      <Button gradientMonochrome="cyan" type={props.type} >{props.name}</Button>
    
  );
};

export default Buttons;
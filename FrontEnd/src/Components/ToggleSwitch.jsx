import React, { useState } from "react";
import Switch from "react-switch";


const ToggleSwitch = () => {
    const [checked, setChecked] = useState(false);

    const handleChange = (checked) => {
      setChecked(checked);
    };
  
    return (
    
        <Switch
          onChange={handleChange}
          checked={checked}
          onColor="#1ab1ed"
          offColor="#ed1a2f"
          width={100}         
          height={38}         
          uncheckedIcon={
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
                fontSize: 11,     // Slightly larger font
                color: "white",
                fontWeight:"bolder",
                paddingRight: 2,
              }}
            >
              Pending
            </div>
          }
          checkedIcon={
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
                fontSize: 11,     // Slightly larger font
                color: "white",
                fontWeight:"bolder",
                paddingLeft:4,
                paddingRight: 2,
              }}
            >
              Completed
            </div>
          }
        />
    );
  };

export default ToggleSwitch
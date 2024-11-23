import { HR } from "flowbite-react";
import React from "react";

export const HorizontalLine = () => {
  return (
    <>
    <section className="py-5 ">
      <h1 className="text-center font-semibold text-3xl ">Latest Updates</h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            flex: "0 50 25%",
            height: "3px",
            backgroundColor: "#e5e7eb",
            marginRight: "8px",
          }}
        ></div>
        <span style={{ color: "black", fontWeight: "bold", padding: "0 8px" }}>
          &#9829;
        </span>
        <div
          style={{
            flex: "0 50 25%",
            height: "3px",
            backgroundColor: "#e5e7eb",
            marginLeft: "8px",
          }}
        ></div>
      </div>
      </section>
    </>
  );
};

import React from "react";
import './EventFab.css'
const EventFAB = () => {
  function ani(e) {
    //   e.currentTarget.classList.toggle("fab-button-active");
    console.log(e);
    document
      .getElementsByClassName("fab-button")[0]
      .classList.toggle("fab-button-active");
    document
      .getElementsByClassName("fab-item1")[0]
      .classList.toggle("fab-item1-active");
    document
      .getElementsByClassName("fab-item2")[0]
      .classList.toggle("fab-item2-active");
    document
      .getElementsByClassName("fab-item3")[0]
      .classList.toggle("fab-item3-active");
    document
      .getElementsByClassName("fab-circular-ring-off")[0]
      .classList.toggle("fab-circular-ring");
  }
  return (
    <>
      <div
        style={{
          position: "fixed",
          width: "100%",
          aliginItems: "center",
          bottom: "4%",
          marginBottom: "40px",
          height: "10%",
        }}
      >
        <div
          className="fab-button"
          onClick={(e) => {
            ani(e);
            console.log("clicked");
          }}
        ></div>
        <div
          className="fab-item1"
          onClick={(e) => {
            console.log("clicked1");
          }}
        ></div>
        <div
          className="fab-item2"
          onClick={(e) => {
            ani(e);
            console.log("clicked2");
          }}
        ></div>
        <div
          className="fab-item3"
          onClick={(e) => {
            console.log("clicked3");
          }}
        ></div>
        <div className="fab-circular-ring-off"></div>
      </div>
    </>
  );
};

export default EventFAB;

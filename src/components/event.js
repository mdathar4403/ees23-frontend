
import "./style.css";
import React, { useState } from "react";
import EventCard from "./EventCard";

function Event() {
  const toggle = () => {
    const card = document.getElementById('card');
    card.style.display = 'block';
  }
  const [content, setContent] = useState(0);

  return (

    <div className="events">
      <table className="table">
        <thead>
          <th>EVENTS</th>
        </thead>
        <tbody>
          <div className="table-body">
            <a href="#" onClick={ () => {
              setContent(0);
              console.log("hi");
              
            }}>UDYAM</a>
            <a href="#" onClick={ () => {
              setContent(1);
              console.log("h");
              
            }} id="event-dark">
              UDGAM
            </a>
            <a href="#" onClick={ () => {
              setContent(2);
              
            }} id="event-dark2">
              MASHAL
            </a>
          </div>
        </tbody>
      </table>
      {/* <div>events</div>
        <div>
          <div></div>
        </div> */}
      <EventCard data={content} />
    </div>
  );
}
export default Event;

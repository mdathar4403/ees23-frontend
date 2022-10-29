import "./style.css";
import React from "react";
function Event() {
  return (
    <div className="events">
      <table className="table">
        <thead>
          <th>EVENTS</th>
        </thead>
        <tbody>
          <div className="table-body">
            <a href="#">UDYAM</a>
            <a href="#" id="event-dark">
              UDGAM
            </a>
            <a href="#" id="event-dark2">
              MASHAL
            </a>
          </div>
        </tbody>
      </table>
      {/* <div>events</div>
        <div>
          <div></div>
        </div> */}
    </div>
  );
}
export default Event;

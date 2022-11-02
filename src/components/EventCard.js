import React from 'react'
import './EventCard.css';
const EventCard = () => {
  return (
    <div>
      <div className="event-detais-card">
        <div className="event-logo-container">
          <img src="./logo192.png" alt="" />
        </div>
        <h1>UDYAM</h1>
        <div className="event-content">
          <p>
            Nullcon presents Resume & Career Clinic, a virtual edition of career
            guidance series to connect individuals with security experts and
            leaders for providing counseling in resume building, providing
            interview tips, and general career advice in specific areas of the
            InfoSec industry. Our community reviewers, who have a humungous
            amount of combined experience in the security industry, of being
            interviewers and vetting candidates are all set to put their
            experiences to work in the Resume & Career Clinic by providing
            individuals one-on-one feedback and guidance over a virtual session.
          </p>
        </div>
      </div>
    </div>
  );
}

export default EventCard
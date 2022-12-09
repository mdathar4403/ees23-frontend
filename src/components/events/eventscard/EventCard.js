import React from "react";
import "./EventCard.css";

const paragraph = [
  "Udyam is the Annual Technological Festival of the department of Electronics Engineering, IIT (BHU) Varanasi. It brings a broad spectrum of events spanning Data Science, Machine Learning, Digital and Analog Electronics and others to boost the participant's skill sets. Since 2010, Udyam has provided a platform to develop and showcase the technical skills of Indian technocrats. And we are pleased to announce that the grand event is again returning this spring as UDYAM'23!",
  "Udgam is the Annual Cultural Festival of the department of Electronics Engineering, IIT (BHU) Varanasi. It brings you multifarious events that kindle your creative side and awaken your artistic self. EES introduced Udgam at the start of 2022 to provide a platform for participants to showcase their talents in non-technical fields like fine arts, dance, music, photography, and literature. Udgam is back again, bigger and brighter, and awaiting to witness the vigour its participants would bring to the stage. Get ready to manifest your artistry and let your creative self sparkle!",
  "Mashal is the sports festival of the department of Electronics Engineering, IIT (BHU) Varanasi.It offers a venue for all significant competitions and sports to foster good sportsmanship among the students.Even though it started last year, the event covers numerous sports, including Marathon, Chess, Valorant, Table Tennis, Basketball, Tennis, Football, Cricket, Badminton, Kabaddi, Athletics, and Tug of War. Mashal unleashes the competitive spirit of the nation's brightest minds and offers a perfect arena for sports enthusiasts to face off against one another. As said by Serena Williams, let's overpower, overtake and overcome!",
];
const handleUrls = [
  {
    ig: "https://www.instagram.com/udyam_iit_bhu/",
    fb: "https://www.facebook.com/udyamfest/",
    linkedIn: "https://www.linkedin.com/company/udyam/",
  },
  {
    ig: "https://www.instagram.com/udyam_iit_bhu/",
    fb: "https://www.facebook.com/ees.fiesta",
    linkedIn: "https://www.linkedin.com/company/ees-iit-bhu/",
  },
  {
    ig: "https://www.instagram.com/mashal_ees/",
    fb: "https://www.facebook.com/ees.fiesta",
    linkedIn: "https://www.linkedin.com/company/ees-iit-bhu/",
  },
];



const heading = ["UDYAM", "UDGAM", "MASHAL"];
const imageUrl = [
  "./assets/udyamlogo.png",
  "./assets/udgamlogo.png",
  "./assets/mashallogo.png",
];

const EventCard = (props) => {
  const { onClickOutside } = props;
  const index  = props.data>=0 ? props.data : 0;
  const off = () => {
    props.close();
  };
  console.log("Props = ",index);
  console.log(onClickOutside);

  return (
    <div>
      <div className="event-detais-card">
        <div className="event-logo-container">
          <h1 className="heading">{heading[props.data]}</h1>
          <a href="#" className="close" onClick={off}></a>
        </div>

        <div className="card-items">
          <div className="event-logo">
            <img src={imageUrl[props.data]} alt="" />
          </div>
          <div className="event-content-container">
            <div
              className="event-content"
              style={{ width: "100%", top: "10%" }}
            >
              <p className="para"> {paragraph[props.data]}</p>
            </div>
          </div>
        </div>

        <div className="contact-handles">
          <a
            href={handleUrls[index].linkedIn}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"
              height={"40px"}
            />
          </a>
          <a
            href={handleUrls[index].ig}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white"
              height={"40px"}
            />
          </a>
          <a
            href={handleUrls[index].fb}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://img.shields.io/badge/Facebook-1DA1F2?style=for-the-badge&logo=facebook&logoColor=white"
              height={"40px"}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default EventCard;

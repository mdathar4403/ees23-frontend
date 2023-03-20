/* eslint-disable prettier/prettier */
import SponsorCard from './sponsorCard';
import './sponsors.css';

const sponsorData = [
  // {
  //   title: 'CISCO',
  //   description: 'Take your client onboard seamlessly by our amazing tool of digital onboard process.',
  //   image: require('./images/cisco.svg'),
  //   link: 'https://www.cisco.com/'
  // },
  // {
  //   title: 'NVIDIA',
  //   description: 'Take your client onboard seamlessly by our amazing tool of digital onboard process.',
  //   image: require('./images/nvidia.svg'),
  //   link: 'https://www.nvidia.com/en-in/'
  // },
  {
    title: 'DEVFOLIO',
    description: 'Title Sponsor for Devbits.',
    image: require('./images/devfolio.svg'),
    link: 'https://devfolio.co'
  },
  {
    title: 'CODECHEF',
    description: 'Platform Sponsor for the competitive programming contest of Devbits.',
    image: require('./images/codechef.svg'),
    link: 'https://www.codechef.com/'
  }
  // {
  //   title: '',
  //   description: 'Co-Title Sponsor for Devbits.',
  //   image: require('./images/zeeve_whit.webp'),
  //   link: 'https://www.silverpush.co/'
  // },
  // {
  //   title: 'SILENCE LABS.',
  //   description: 'Take your client onboard seamlessly by our amazing tool of digital onboard process.',
  //   image: require('./images/silentlab.svg'),
  //   link: 'https://silencelaboratories.com/'
  // },
  // {
  //   title: 'MENTOR',
  //   description: 'Take your client onboard seamlessly by our amazing tool of digital onboard process.',
  //   image: require('./images/mentor.svg'),
  //   link: 'https://eda.sw.siemens.com/en-US/'
  // },
  // {
  //   title: 'INTEC INFONET',
  //   description: 'Take your client onboard seamlessly by our amazing tool of digital onboard process.',
  //   image: require('./images/intec.svg'),
  //   link: 'https://intecinfonet.com/'
  // }
];

function Sponsors() {
  return (
    <>
      <div id="sponsors" className="sponsors-main">
        <div className="sponsor-heading">SPONSORS</div>
        <ul className="sponsors-list">
          {sponsorData.map((key) => {
            return (
              <li key={key}>
                <SponsorCard title={key.title} description={key.description} image={key.image} link={key.link} />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Sponsors;

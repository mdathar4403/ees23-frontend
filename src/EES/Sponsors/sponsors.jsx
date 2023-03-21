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
    image: require('./images/Devfolio.png'),
    link: 'https://devfolio.co'
  },
  {
    title: 'CODECHEF',
    description: 'Platform Sponsor for the competitive programming contest of Devbits.',
    image: require('./images/Codechef.jpg'),
    link: 'https://www.codechef.com/'
  },
  {
    title: 'ZEEVE',
    description: 'Co-Title Sponsor for Devbits.',
    image: require('./images/Zeeve.webp'),
    link: 'https://www.zeeve.io/'
  },
  {
    title: 'FILECOIN',
    description: 'Co-Title Sponsor for Devbits.',
    image: require('./images/Filecoin.png'),
    link: 'https://filecoin.io/'
  },
  {
    title: 'POLYGON',
    description: 'Co-Title Sponsor for Devbits.',
    image: require('./images/Polygon.png'),
    link: 'https://polygon.technology/'
  },
  {
    title: 'SOLANA',
    description: 'Co-Title Sponsor for Devbits.',
    image: require('./images/Solana.png'),
    link: 'https://solana.com/'
  },
  {
    title: 'REPLIT',
    description: 'Co-Title Sponsor for Devbits.',
    image: require('./images/Replit.png'),
    link: 'https://replit.com/'
  }
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

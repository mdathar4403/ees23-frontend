
import './App.css';
import "./fonts/Fontspring-DEMO-viata-extrabold.otf";
import Event from './components/event';
import Title from './components/title';
import {useState} from 'react';

function App() {
  const [index,setIndex]=useState([]);
  return (
    <div className="App">
      <Title />
      <div className="landing-page-images">
        <img src="/assets/1.png" alt=""/>
      </div>
      <div className="characters-image">
        <img src="/assets/Characters3.png" alt="" />
      </div>
      {/* <ComingSoonComp /> */}
      <div className="event-list-main">
        <Event />
      </div>
     

      {/* <EventFAB /> */}
    </div>
  );
}

export default App;

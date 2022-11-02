
import './App.css';
import Scroll from './components/scroll';
import "./fonts/Fontspring-DEMO-viata-extrabold.otf";
import ComingSoonComp from './components/coming_soon';
import Event from './components/event';
import Title from './components/title';
import EventFAB from './components/EventFAB';
import EventCard from './components/EventCard';


function App() {
  return (
    <div className="App">
      <Title />
      <div className="landing-page-images">
        <img src="/assets/1.png" alt=""/>
      </div>
      <div className="characters-image">
        <img src="/assets/Characters3.png" alt="" />
      </div>
      <ComingSoonComp />
      <div className="event-list-main">
        <Event />
      </div>
      <EventCard/>

      <EventFAB />
    </div>
  );
}

export default App;

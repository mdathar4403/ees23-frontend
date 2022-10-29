
import './App.css';
import Scroll from './components/scroll';
import "./fonts/Fontspring-DEMO-viata-extrabold.otf";
import ComingSoonComp from './components/coming_soon';
import Event from './components/event';
import Title from './components/title';


function App() {
  return (
    <div className="App">
      <Title />
      <div className="landing-page-images">
        <img src="/assets/1.png" alt="" />
      </div>
      <div className="characters-image">
        <img src="/assets/Characters3.png" alt="" />
      </div>
      <ComingSoonComp />
      <Event/>
    </div>
  );
}

export default App;

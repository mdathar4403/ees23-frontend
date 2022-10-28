
import './App.css';

import "./fonts/Fontspring-DEMO-viata-extrabold.otf";
import ComingSoonComp from './components/coming_soon';




function App() {
  return (
    <div className="App">
      <div className="landing-page-images">
        <img src="/assets/1.png" alt="" />
      </div>
      <div className="characters-image">
        <img src="/assets/Characters.png" alt="" />
      </div>
      <div className="title"></div>
      <ComingSoonComp />
      <div className="image"></div>
      <div className="events"></div>
    </div>
  );
}

export default App;

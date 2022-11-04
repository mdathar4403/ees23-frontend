
import './App.css';
import "./fonts/Fontspring-DEMO-viata-extrabold.otf";
import Event from './components/event';
import Title from './components/title';
import Form from './components/register/form';
import {useState, useEffect} from 'react';
import Home from './components/Home';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { gapi } from 'gapi-script';

const clientId = process.env.GOOGLE_CLIENT_ID

function App() {
  const [index,setIndex]=useState([]);

  useEffect(()=>{
    function start() {
        gapi.auth2.init({
            clientId: clientId,
            scope: ""
        })
    }

    gapi.load('client:auth2', start);
})

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/register" element={<Form/>} />
        </Routes>
      </Router>    

      {/* <EventFAB /> */}
    </div>
  );
}

export default App;

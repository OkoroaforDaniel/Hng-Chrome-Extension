import React, {useState} from 'react';
import './App.css';
import PopUp from './Components/PopUp/PopUp';
import Landing from './Components/Landing/Landing';
import Recording from './Components/Recording/Recording';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div className="App">
    <PopUp />
    {/* <Recording /> */}

    </div>
  );
}

export default App;

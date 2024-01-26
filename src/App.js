import './App.css';
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import Routing from './Components/Routing';


function App() {
  return (
      <div>
        <Router>
          <Routing />
        </Router>
      </div>
  );
}

export default App;

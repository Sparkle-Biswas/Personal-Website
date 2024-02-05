import React from 'react'
import {
    Routes,
    Route,
    useLocation,
} from "react-router-dom";
import About from '../Pages/About';
import Home from '../Pages/Home';
import { AnimatePresence } from 'framer-motion';


function Routing() {
  const location = useLocation();
  return (
    <div className='App'>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
        </Routes>
      </AnimatePresence>
    </div>
  )
}

export default Routing

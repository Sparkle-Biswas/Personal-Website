import React from 'react'
import {
    Routes,
    Route,
    useLocation,
} from "react-router-dom";
import About from '../Pages/About';
import Home from '../Pages/Home';
import Projects from '../Pages/Projects';
import { AnimatePresence } from 'framer-motion';


function Routing() {
  const location = useLocation();
  return (
    <div>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
        </Routes>
      </AnimatePresence>
    </div>
  )
}

export default Routing

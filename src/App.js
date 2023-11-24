// Routes

// Import libraries
import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

//import page components
import ScreenSize from './ScreenSize';
import AboutM from './Mobile/AboutM';
import Location from './General/Location';
import MenuM from './Mobile/MenuM';

// component - the router
function App() {
  
  // routes
  return (
        <Routes>
          <Route path="/" element={<ScreenSize />} />
          <Route path="/about" element={<AboutM />} />
          <Route path="/location" element={<Location />} />
          <Route path="/" element={<MenuM />} />
        </Routes>
  );
}

//export component into index.js
export default App;
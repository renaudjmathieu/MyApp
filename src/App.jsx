import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./component/Home/Home"
import Projects from "./component/Projects/Projects"

const App = () => {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Router>
  );
}

export default App;
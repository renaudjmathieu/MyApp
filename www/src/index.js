import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Home,
} from "./pages";
import Hello from './pages/hello.js'; //stupid webpack bug in GitHub actions (Oryx) so I have to import this way.
import {
  NavBar,
  Footer,
} from "./components";

import ThemeContextWrapper from './theme/ThemeWrapper';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeContextWrapper>
    <React.StrictMode>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hello" element={<Hello />} />
        </Routes>
        <Footer />
      </Router>
    </React.StrictMode>
  </ThemeContextWrapper>
);
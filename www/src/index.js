import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Home,
} from "./pages";
import {
  NavBar,
  Footer,
} from "./components";
import Bob from './pages/bob.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <NavBar />
    <Bob />
    <Routes>
      <Route path="/" element={<Home />} />
      
    </Routes>
    <Footer />
  </Router>
  </React.StrictMode>
);
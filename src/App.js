import React from 'react';
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Error from './pages/Error'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import Auth from './components/Auth';
import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom';

export default function App() {
  let activeClassName = "nav-active";
  return (
    <BrowserRouter>
      <nav>
        <NavLink to="" className={({ isActive }) => isActive && activeClassName}>Home</NavLink>
        <NavLink to="about" className={({ isActive }) => isActive && activeClassName}>About</NavLink>
        <NavLink to="contact" className={({ isActive }) => isActive && activeClassName}>Contact</NavLink>
        <NavLink to="dashboard">Dashboard</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="dashboard" element={<Dashboard />}>
          <Route path="settings" element={<p>This is the nested Settings route</p>} />
        </Route>
        <Route exact path="**" element={<Error />} />
        <Route path="profile">
          <Route path=":userId" element={<Profile />} />
        </Route>
      </Routes>
      <footer>
        <Auth />
      </footer>
    </BrowserRouter>
  );
}
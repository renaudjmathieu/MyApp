import React from 'react';
import { useLocation } from 'react-router-dom'

import Header from '../components/Header';
import Footer from '../components/Footer';

function Home(){
  let location = useLocation();
  return (
    <div className="App">
    <Header />
    <Footer />
    { location.state }
    </div>
      
  )
}

export default Home;






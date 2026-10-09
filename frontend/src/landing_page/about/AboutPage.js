import React from 'react';
import Navbar from '../../Navbar';
import Footer from '../../Footer';
import OpenAccount from '../../OpenAccount';
import Hero from './Hero';
import Team from './Team';
function AboutPage() {
    return ( 
        <>
          <Hero/>
          <OpenAccount/>
          <Team/>
        </>
     );
}

export default AboutPage;
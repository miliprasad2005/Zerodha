import React from 'react'
import Brokerage from './Brokerage';
import Navbar from '../../Navbar';
import Footer from '../../Footer';
import OpenAccount from '../../OpenAccount';
import Hero  from './Hero';
function PricingPage() {
    return ( 
        <>
         <Hero/>
         <Brokerage/>
         <OpenAccount/>
        </>
     );
}

export default PricingPage;
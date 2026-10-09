import React from 'react';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Hero  from './Hero';
import Universe from './Universe';
function ProductPage() {
    return ( 
        <>
          <Hero/>
          <LeftSection productName="Kite" 
          productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." imageURL="media/images/kite.png" 
          tryDemo="" 
          learnMore="" 
          googlePlay="" 
          appStore=""/>
          <RightSection productName="Console" 
          productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
           imageURL="media/images/console.png" 
          learnMore="" />
          <LeftSection productName="Coin" 
          productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
           imageURL="media/images/coin.png" 
          tryDemo="" 
          learnMore="" 
          googlePlay="" 
          appStore=""/>
          <RightSection productName="Kite Connect API" 
          productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
           imageURL="media/images/kiteconnect.png" 
          learnMore="" />
          <LeftSection productName="Varsity mobile" 
          productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
           imageURL="media/images/varsity.png" 
          tryDemo="" 
          learnMore="" 
          googlePlay="" 
          appStore=""/>
          <p className='text-center'>Want to know more about our technology stack? Check out the Zerodha.tech blog.</p>
          <Universe/>
        </>
     );
}

export default ProductPage;
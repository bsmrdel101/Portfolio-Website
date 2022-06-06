import React, { useEffect } from 'react';
import lottie from 'lottie-web';

import Header from '../Header/Header';
import './HomePage.css';

function HomePage() {
  useEffect (() => {
    lottie.loadAnimation({
      container: document.getElementById('rocket-anim'), // the dom element that will contain the animation
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'https://assets3.lottiefiles.com/packages/lf20_l3qxn9jy.json' // the path to the animation json
    });
  }, []);

  return (
    <div className="container">
      <section className='animation-screen'>
        <div id='rocket-anim'></div>
      </section>
      <section className='page'>
        <Header />
        <center>
          <img className='profile-pic' src='profile_pic.jpeg' />
        </center>
      </section>
    </div>
  );
}

export default HomePage;
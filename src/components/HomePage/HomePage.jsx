import React, { useEffect } from 'react';
import lottie from 'lottie-web';

import Header from '../Header/Header';
import './HomePage.css';

function HomePage() {
  useEffect (() => {
    // Setup animation
    lottie.loadAnimation({
      container: document.getElementById('rocket-anim'), // the dom element that will contain the animation
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'https://assets3.lottiefiles.com/packages/lf20_l3qxn9jy.json' // the path to the animation json
    });
    // Delete animation
    setTimeout(() => {
      document.getElementById('rocket-anim').remove()
    }, 1300);
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
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </center>
      </section>
    </div>
  );
}

export default HomePage;
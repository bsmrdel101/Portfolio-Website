import React, { useEffect } from 'react';
import lottie from 'lottie-web';

// MUI
import Grid from '@mui/material/Grid';

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
      {/* Screen transition */}
      <section className='animation-screen'>
        <div id='rocket-anim'></div>
      </section>
      {/* Main content */}
      <section className='page'>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Header />
            <center>
              <img className='profile-pic' src='profile_pic.jpeg' />
            </center>
          </Grid>
          <Grid item sm={12} lg={6}>
            <div className='about-container'>
              <h1>About Me</h1>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora dolorem eligendi impedit modi possimus ad beatae ab necessitatibus hic. Repellat repudiandae, vitae eaque at pariatur facilis ea dolorem quo? Aliquid cumque, quia quibusdam accusantium facilis sit iure numquam vero nemo fugiat beatae cum nisi molestiae minus enim similique? Ad, beatae at? Excepturi, reiciendis natus?</p>
            </div> 
          </Grid>
        </Grid>
      </section>
    </div>
  );
}

export default HomePage;
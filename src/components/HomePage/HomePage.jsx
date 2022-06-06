import React, { useEffect } from 'react';
import lottie from 'lottie-web';

// MUI
import Grid from '@mui/material/Grid';

import Header from '../Header/Header';
import './HomePage.css';

function HomePage() {
  let pageActive = false;

  useEffect (() => {
    window.scrollTo(0,0); // Scroll to top
    // Setup animation
    lottie.loadAnimation({
      container: document.getElementById('rocket-anim'), // the dom element that will contain the animation
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'https://assets3.lottiefiles.com/packages/lf20_l3qxn9jy.json' // the path to the animation json
    });
    // Delete the animation after a delay
    setTimeout(() => {
      document.getElementById('rocket-anim').remove()
      pageActive = true;
    }, 1300);

    // Checks if animated content is in frame or not
    window.addEventListener("scroll", reveal);
  }, []);

  const reveal = () => {
    if (pageActive) {
      let reveals = document.querySelectorAll(".reveal");

      for (let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = reveals[i].getBoundingClientRect().top;
        let elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        }
      }
    }
  }

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
            <div className='small-container reveal'>
              <h1>About Me</h1>
              <p>I've had a passion for software development and coding since high school. I'm always eager to continue learning and improving my skills, inside and outside the industry. I'm easily fascinated by any tech related subject.</p>
            </div> 
          </Grid>
          <Grid item xs={12}></Grid>
          <Grid item xs={6}></Grid>
          <Grid item sm={12} lg={6}>
            <div className='small-container reveal'>
              <h1>Education</h1>
              <h5>Prime Digital Academy | Sep 2021 to Feb 2022</h5>
              <p>Prime is an immersive learning program for full stack web development, that teaches students about the different technologies, languages, and industry practices used in full stack development.</p>
            </div> 
          </Grid>
          <Grid item xs={6}></Grid>
          <Grid item xs={12}></Grid>
          <Grid item sm={12} lg={6}>
            <div className='small-container reveal'>
              <h1>About Me</h1>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora dolorem eligendi impedit modi possimus ad beatae ab necessitatibus hic. Repellat repudiandae, vitae eaque at pariatur facilis ea dolorem quo? Aliquid cumque, quia quibusdam accusantium facilis sit iure numquam vero nemo fugiat beatae cum nisi molestiae minus enim similique? Ad, beatae at? Excepturi, reiciendis natus?</p>
            </div> 
          </Grid>
          <Grid item xs={12}></Grid>
          <Grid item xs={12}>
            <center>
              <button className='see-my-work'>See my work!</button>
            </center>
          </Grid>
        </Grid>
      </section>
    </div>
  );
}

export default HomePage;
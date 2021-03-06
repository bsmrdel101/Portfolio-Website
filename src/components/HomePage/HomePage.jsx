import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import lottie from 'lottie-web';

// MUI
import Grid from '@mui/material/Grid';

import Header from '../Header/Header';
import './HomePage.css';

function HomePage() {
  const history = useHistory();

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
              <h1>Skills</h1>
              <div className='skills-list-container'>
                <ul>
                  <li>Javascript</li>
                  <li>React</li>
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>HTML / CSS</li>
                  <li>PostgreSQL</li>
                </ul>
                <ul>
                  <li>C#</li>
                  <li>.NET Core</li>
                  <li>Bootstrap</li>
                  <li>jQuery</li>
                  <li>Git / Github</li>
                  <li>Unity</li>
                </ul>
                <ul>
                  <li>Jest</li>
                  <li>Redux / Sagas</li>
                  <li>Socket.io</li>
                  <li>Material UI</li>
                  <li>RestAPI</li>
                </ul>
              </div>
            </div> 
          </Grid>
          <Grid item xs={6}></Grid>
          <Grid item xs={12}></Grid>
          <Grid item sm={12} lg={6}>
            <div className='small-container reveal'>
              <h1>Education</h1>
              <h5>Prime Digital Academy | Sep 2021 to Feb 2022</h5>
              <p>Prime is an immersive learning program for full stack web development, that teaches students about the different technologies, languages, and industry practices used in full stack development.</p>
            </div> 
          </Grid>
          <Grid item xs={12}></Grid>
          <Grid item xs={12}>
            <center>
              <button id='see-my-work' onClick={() => history.push("/portfolio")}>See my work!</button>
            </center>
          </Grid>
        </Grid>
      </section>
    </div>
  );
}

export default HomePage;
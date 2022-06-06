import React, { useEffect } from 'react';
import lottie from 'lottie-web';

// MUI
import Grid from '@mui/material/Grid';

import './PortfolioPage.css';

function PortfolioPage() {
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
    // window.addEventListener("scroll", reveal);
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
            
          </Grid>
        </Grid>
      </section>
    </div>
  );
}

export default PortfolioPage;
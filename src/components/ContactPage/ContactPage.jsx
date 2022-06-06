import React, { useEffect } from 'react';
import lottie from 'lottie-web';

import './ContactPage.css';

function ContactPage() {
    let pageActive = false;

    useEffect (() => {
      window.scrollTo(0,0); // Scroll to top
      // Setup animation
      lottie.loadAnimation({
        container: document.getElementById('rocket-anim'), // the dom element that will contain the animation
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'https://assets6.lottiefiles.com/packages/lf20_lstnp9p3.json' // the path to the animation json
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
        <div className='container'>
            {/* Screen transition */}
            <section className='animation-screen'>
                <div id='rocket-anim'></div>
            </section>
            {/* Main content */}
            <section className='page'>
                <center>
                    <div className='contact-container'>
                        {/* Contact info */}
                        <h2>Contact Me</h2>
                        <p className='contact-item'>Email: smrdelb@gmail.com</p>
                        <p className='contact-item'>Phone: (651)-272-6713</p>
                        <p className='contact-item'>Location: Lino Lakes, MN</p>

                        {/* Icon links */}
                        <h2 className='line-gap'>Take a look!</h2>
                        <div className='contact-links-container'>
                            <img className='contact-icon' 
                                src='linkedin_logo.png'
                                onClick={() => window.open("https://www.linkedin.com/in/bennett-smrdel-634893212/")} 
                            />
                            <img className='contact-icon' 
                                src='github_logo.png'
                                onClick={() => window.open("https://github.com/bsmrdel101")} 
                            />
                            <img className='contact-icon' 
                                src='itch.io_logo.png'
                                onClick={() => window.open("https://firecharger101.itch.io/")} 
                            />
                        </div>
                    </div>
                </center>
            </section>
        </div>
    );
}

export default ContactPage;
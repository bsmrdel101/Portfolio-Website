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
        window.addEventListener("scroll", reveal);
        reveal();
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
                    {/* Web Applications */}
                    <Grid item xs={12}>
                        <h1 className='portfolio-subtitle'>Web Applications</h1>
                    </Grid>
                    <Grid item sm={12} lg={10}>
                        <div className='small-container'>
                            <h2 className='card-name'>Chore Slayer</h2>
                            <div className='card-content'>
                                <p className='card-description'>Chore Slayer is a task management app, with an AI driven card game built on top of it. The app helps incentivise you to complete your tasks, by rewarding you with “coins” for every 3 tasks completed. You can spend these coins in the store to buy cards, and manage your deck which will be used in the game.  On the game view, you play against an AI in a turn based strategy game(Similar to Hearthstone or Magic the Gathering). The AI gets harder over time as you add new cards to your deck, because it will also add more powerful cards to its deck. There’s also a statistics page to help track your stats from the games you play, and a help page that goes over how to use the app.</p>
                                <img className='card-img' src='https://github.com/bsmrdel101/Chore-Slayer/raw/master/public/pic_2.png' />
                            </div>
                            <div className='app-link-container'>
                                <p className='app-link' onClick={() => window.open("https://github.com/bsmrdel101/Chore-Slayer")}>
                                    Github Repository
                                </p>
                                <p className='app-link' onClick={() => window.open("https://chore-slayer.herokuapp.com/#/home")}>
                                    Deployed App
                                </p>
                            </div>
                        </div> 
                    </Grid>
                    <Grid item xs={12}></Grid>
                    <Grid item xs={2}></Grid>
                    <Grid item sm={12} lg={10}>
                        <div className='small-container reveal'>
                            <h2 className='card-name'>Internship on Demand</h2>
                            <div className='card-content'>
                                <p className='card-description'>IOD (Internship on Demand) is an app that grants students an easier and more simplified experience with applying for internships. Students enrolled at the courses at IOD will be able to register on this app, create a profile, and search for an internship to apply for. They will also be able to showcase their work on their own portfolio page.</p>
                                <img className='card-img' src='https://github.com/bsmrdel101/IOD-1/raw/master/public/iodGif.gif' />
                            </div>
                            <div className='app-link-container'>
                                <p className='app-link' onClick={() => window.open("https://github.com/bsmrdel101/IOD-1")}>
                                    Github Repository
                                </p>
                                <p className='app-link' onClick={() => window.open("https://internship-on-demand-dev.herokuapp.com/#/user")}>
                                    Deployed App
                                </p>
                            </div>
                        </div> 
                    </Grid>
                    <Grid item xs={4}></Grid>
                    <Grid item xs={12}></Grid>
                    <Grid item sm={12} lg={10}>
                        <div className='small-container reveal'>
                            <h2 className='card-name'>SH Compliance and Consulting</h2>
                            <div className='card-content'>
                                <p className='card-description'>This consulting company commissioned me to build them a website to show off their business to clients. It displays their services, contact, about sections, and a form to schedule a consultation.</p>
                                <img className='card-img' src='https://github.com/bsmrdel101/sh-service-consulting/blob/master/public/service_consulting_pic_1.png?raw=true' />
                            </div>
                            <div className='app-link-container'>
                                <p className='app-link' onClick={() => window.open("https://github.com/bsmrdel101/sh-service-consulting")}>
                                    Github Repository
                                </p>
                                <p className='app-link' onClick={() => window.open("http://sh-compliance-and-consulting.com/")}>
                                    Deployed Website
                                </p>
                            </div>
                        </div> 
                    </Grid>
                    <Grid item xs={12}></Grid>

                    {/* Game Development */}
                    <Grid item xs={12}>
                        <h1 className='portfolio-subtitle'>Game Development</h1>
                    </Grid>
                    <Grid item sm={12} lg={8}>
                        <div className='small-container reveal'>
                            <strong><h2 className='card-name'>Time Swap</h2></strong>
                        </div> 
                    </Grid>
                    <Grid item xs={12}></Grid>
                    <Grid item xs={4}></Grid>
                    <Grid item sm={12} lg={8}>
                        <div className='small-container reveal'>
                            <strong><h2 className='card-name'>Polarity Doors</h2></strong>
                        </div> 
                    </Grid>
                    <Grid item xs={4}></Grid>
                    <Grid item xs={12}></Grid>
                    <Grid item sm={12} lg={8}>
                        <div className='small-container reveal last-container'>
                            <strong><h2 className='card-name'>Watch Your Step</h2></strong>
                        </div> 
                    </Grid>
                </Grid>
            </section>
        </div>
    );
}

export default PortfolioPage;
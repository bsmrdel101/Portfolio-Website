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
                        <center><h1 className='portfolio-subtitle'>Web Applications & Websites</h1></center>
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
                                <br />
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
                                <br />
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
                                <br />
                                <p className='app-link' onClick={() => window.open("http://sh-compliance-and-consulting.com/")}>
                                    Deployed Website
                                </p>
                            </div>
                        </div> 
                    </Grid>
                    <Grid item xs={12}></Grid>

                    {/* Game Development */}
                    <span className='line-gap' />
                    <Grid item xs={12}>
                        <center><h1 className='portfolio-subtitle'>Game Development</h1></center>
                    </Grid>
                    <Grid item xs={2}></Grid>
                    <Grid item sm={12} lg={10}>
                        <div className='small-container reveal'>
                            <h2 className='card-name'>Time Swap</h2>
                            <div className='card-content'>
                                <p className='card-description'>Time Swap is a 2D platformer that has the player complete 3 levels, by swapping dimensions. You only have 5 seconds to spend in either dimension before it collapses, and you die.</p>
                                <img className='card-img' src='https://img.itch.zone/aW1hZ2UvMTU0MDI4Ni84OTg1MTc1LnBuZw==/original/Jhswrz.png' />
                            </div>
                            <div className='app-link-container'>
                                <p className='app-link' onClick={() => window.open("https://firecharger101.itch.io/time-swap")}>
                                    Itch.io Page
                                </p>
                            </div>
                        </div> 
                    </Grid>
                    <Grid item xs={12}></Grid>
                    <Grid item sm={12} lg={10}>
                        <div className='small-container reveal'>
                            <h2 className='card-name'>Polarity Doors</h2>
                            <div className='card-content'>
                                <p className='card-description'>2D platformer where you have to find both polarities of a magnet, and put them in their respective holders. Doing so opens the door to the next level. Apologies for weird physics/velocity issues, and game difficulty.</p>
                                <img className='card-img' src='https://img.itch.zone/aW1nLzg4MTYxMTAucG5n/original/YNrezP.png' />
                            </div>
                            <div className='app-link-container'>
                                <p className='app-link' onClick={() => window.open("https://firecharger101.itch.io/polarity-doors")}>
                                    Itch.io Page
                                </p>
                            </div>
                        </div> 
                    </Grid>
                    <Grid item xs={12}></Grid>
                    <Grid item xs={2}></Grid>
                    <Grid item sm={12} lg={10}>
                        <div className='small-container reveal last-container'>
                            <h2 className='card-name'>Watch Your Step</h2>
                            <div className='card-content'>
                                <p className='card-description'>Move left and right to dodge the incoming basic unity assets. At the same time try to click the green buttons that appear on the right side of the screen. Try and see how far you can make it!</p>
                                <img className='card-img' src='https://img.itch.zone/aW1nLzkwMzg2OTIucG5n/347x500/OiXmRm.png' />
                            </div>
                            <div className='app-link-container'>
                                <p className='app-link' onClick={() => window.open("https://firecharger101.itch.io/watch-your-step")}>
                                    Itch.io Page
                                </p>
                            </div>
                        </div> 
                    </Grid>
                </Grid>
            </section>
        </div>
    );
}

export default PortfolioPage;
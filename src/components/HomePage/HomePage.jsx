import React from 'react';

import Header from '../Header/Header';
import './HomePage.css';

function HomePage() {
  return (
    <div className="container">
      <Header />
        <center>
          <img className='profile-pic' src='profile_pic.jpeg' />
        </center>
    </div>
  );
}

export default HomePage;
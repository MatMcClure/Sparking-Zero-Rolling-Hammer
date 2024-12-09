import React from 'react';
import '../style.css';
import superCounterVid from '../videos/supercounttutVid.mp4';
import superCounterOne from '../images/initial-counter.png';
import superCounterTwo from '../images/supercounterhit.png';
import superCounterThree from '../images/SCcontroller.png';

function SuperCounters() {
  return (
    <main className="super-counters-page">
      <video
        width="600"
        controls
        style={{
          objectFit: 'cover',
          objectPosition: 'center',
          width: '80%',  // Adjust width as needed
          marginTop: '-100px',
          border: 'solid',
          borderRadius: '2%'
        }}
      >
        <source src={ superCounterVid } type="video/mp4" className="superCounterVid" />
        Your browser does not support the video tag.
      </video>
      <div className="grid-container">
        <img src={superCounterOne} alt="SuperCounterOne" className="superCounterOne" />
        <img src={superCounterThree} alt="SuperCounterThree" className="superCounterThree" />
        <img src={superCounterTwo} alt="SuperCounterTwo" className="superCounterTwo" />
      </div>
    </main>
  );
}

export default SuperCounters;

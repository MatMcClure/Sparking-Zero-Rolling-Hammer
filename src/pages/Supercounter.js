import React from 'react';
import '../style.css';
import superCounterVid from '../videos/supercounttutVid.mp4';

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
          marginTop: '-100px'
        }}
      >
        <source src={superCounterVid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </main>
  );
}

export default SuperCounters;

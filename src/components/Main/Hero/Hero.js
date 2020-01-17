import React from 'react';
import { ReactComponent as Heart } from './heart.svg';
import './Hero.scss';

const Hero = () => {
  return (
    <div className="hero">
      <div>
        <h1>
          I <Heart className="hero__icon" /> Color
        </h1>
        <p>
          Color really isn't that difficult to get right, if you know where to
          start.
        </p>
        <p>Learn by doing and you'll be a master in no time.</p>
        <button>Over to you</button>
      </div>
    </div>
  );
};

export default Hero;

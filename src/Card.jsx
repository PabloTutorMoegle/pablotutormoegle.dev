//this code generates a card with the image and the title of the card that are given as parameters

import React from 'react';
import './Card.css';

export function Card ({ title, image }) {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h2>{title}</h2>
    </div>
  );
}

//this code generates a box with the tittle and the content that are given as parameters

import React from 'react';
import './Box.css';

export function Box ({ title, image }) {
    return (
        <div className="box">
            <h2>{title}</h2>
            <img src={image} alt={title} />
        </div>
    );
}
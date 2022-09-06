import React from 'react';
import Food from '../../images/home2.png';
import Book from '../../images/Book-Inicio2.png';
import './slider.css';
const slidesInfo = [
    {
        src: Food,
        alt: 'Project 1',
        desc: 'Food App',
    },
    {
        src: Book,
        alt: 'Project 2',
        desc: 'BookItech',
    },
];

const slides = slidesInfo.map((slide) => (
    <div className="slide-container">
        <img src={slide.src} alt={slide.alt} />
        <div className="slide-desc">
            <span>{slide.desc}</span>
        </div>
    </div>
));

export default slides;

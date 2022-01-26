import React from 'react';

function Arrows({prevSlide, nextSlide}) {
    return (
        <div className="arrows">
            <span className="prev-slide" onClick={prevSlide}>&#10094;</span>
            <span className="next-slide" onClick={nextSlide}>&#10095;</span>
        </div>
    );
}

export default Arrows;
import React from 'react';

function SliderContent({activeIndex, imageSlider}) {
    return (
        <section>
            {imageSlider.map((slide, index) => (
                <div key={index}
                     className={index === activeIndex? "slides active-slide" : "inactive-slide"}
                >
                    <img className="slide-image"
                         src={slide.urls}
                         alt={slide.title}
                    />
                    <h2 className="slide-title">
                        {slide.title}
                    </h2>
                </div>
            ))}
        </section>
    );
}

export default SliderContent;
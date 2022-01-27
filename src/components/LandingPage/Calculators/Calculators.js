import React from 'react';
import './calculators.scss'

const Calculators = () => {
    return (
        <section className="calculators"
                 id="calculatorsID"
        >
            <h3 className="calculators__title">
                Skorzystaj za darmo z kalkulatorów
            </h3>
            <ul className="calculators__list">
                <li>BMI</li>
                <li>BMR</li>
                <li>WHR</li>
            </ul>
        </section>
    );
};

export default Calculators;
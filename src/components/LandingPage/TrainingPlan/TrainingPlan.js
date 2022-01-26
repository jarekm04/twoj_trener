import React from 'react';
import "./trainingPlan.scss";

const TrainingPlan = () => {
    return (
        <section className="trainingPlan container"
                 id="trainingPlanID"
        >
            <div className="trainingPlan-Box">
                <h3 className="plan__headline">PROSTY PLAN</h3>
                <p className="plan__text">Jesteś na początku swojej drogi i jeszcze nie bardzo orientujesz się jak
                    powinieneś ćwiczyć? Spokojnie, nasza aplikacja Ci pomoże.</p>
                <h3 className="plan__headline">SOLIDNE PODSTAWY</h3>
                <p className="plan__text">Nasza baza ćwiczeń jest zbudowana z wyselekcjonowanych ćwiczeń, które opierają
                    się na ćwiczeniach wielostawowych. Dają one najszybsze i najefektywniejsze rezultaty. </p>
            </div>
        </section>
    );
};

export default TrainingPlan;
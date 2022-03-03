import React from 'react';
import contactVideo from '../../../assets/contact_video.mp4';

const Contact = () => {
    return (
        <section className="contact"
                 id="contactID"
        >
            <h2 className="upText">
                Stała <span>opieka</span> trenera!
            </h2>
            <div className="verticalLine" />
            <h2 className="downText">
                <span>Pisz</span> kiedy <span>potrzebujesz</span> pomocy!
            </h2>
            <video className="videoTag" autoPlay loop muted>
                <source src={contactVideo} type='video/mp4'/>
            </video>
        </section>
    );
};

export default Contact;
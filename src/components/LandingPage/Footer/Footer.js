import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faDumbbell } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <footer className="footer container">
            <p className="footer__copy">&#169; 2021 JM</p>
            <div className="footer__icons">
                <a href="https://www.facebook.com" target="_blank">
                    <FontAwesomeIcon icon={faFacebookSquare} />
                </a>
                <a href="https://www.instagram.com" target="_blank">
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="https://www.gmail.com" target="_blank">
                    <FontAwesomeIcon icon={faEnvelope} />
                </a>
            </div>
            <a
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
                target="_blank"
                className="footer__logo"
            >
                TWÓJ<span>TRENER</span><FontAwesomeIcon icon={faDumbbell}/>.PL
            </a>
        </footer>
    );
};

export default Footer;
import React from 'react';
import {Link} from 'react-scroll';

const Menu = () => {
    return (
        <nav className="header__menu">
            <ul className="menu">
                <li>
                    <Link
                        to="trainingPlanID"
                        className="menu__item"
                        smooth={true}
                        duration={500}
                        offset={-80}
                    >
                        PLAN TRENINGOWY
                    </Link>
                </li>
                <li>
                    <Link
                        to="contactID"
                        className="menu__item"
                        smooth={true}
                        duration={500}
                        offset={-80}
                    >
                        WIADOMOŚCI
                    </Link>
                </li>
                <li>
                    <Link
                        to="notesID"
                        className="menu__item"
                        smooth={true}
                        uration={500}
                        offset={-80}
                    >
                        TWOJE NOTATKI
                    </Link>
                </li>
                <li>
                    <Link
                        to="calculatorsID"
                        className="menu__item"
                        smooth={true}
                        duration={500}
                        offset={-80}
                    >
                        KALKULATORY
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Menu;
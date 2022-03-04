import React from 'react';
import {Link} from 'react-scroll';
import useWindowDimensions from "../../Hooks/UseWindowDimensions";

const Menu = ({showSidebar, setShowSidebar}) => {
    const { width } = useWindowDimensions();

    return (
        <nav className={!showSidebar ? "header__menu" : "header__menu active"}>
            <ul className="menu">
                <li>
                    <Link
                        to="trainingPlanID"
                        className="menu__item"
                        smooth={true}
                        duration={500}
                        offset={width > 600 ? -80 : -65}
                        onClick={width < 1050 ? () => setShowSidebar(!showSidebar) : null}
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
                        offset={width > 600 ? -80 : -65}
                        onClick={width < 1050 ? () => setShowSidebar(!showSidebar) : null}
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
                        offset={width > 600 ? -80 : -65}
                        onClick={width < 1050 ? () => setShowSidebar(!showSidebar) : null}
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
                        offset={width > 600 ? -80 : -65}
                        onClick={width < 1050 ? () => setShowSidebar(!showSidebar) : null}
                    >
                        KALKULATORY
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Menu;
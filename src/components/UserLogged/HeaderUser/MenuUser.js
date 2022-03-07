import React from 'react';
import {Link} from "react-router-dom";
import useWindowDimensions from "../../Hooks/UseWindowDimensions";

const MenuUser = ({showSidebar, setShowSidebar}) => {
    const { width } = useWindowDimensions();

    return (
        <nav className={!showSidebar ? "header__menu" : "header__menu active"}>
            <ul className="menu">
                <li>
                    <Link
                        to="/homepage"
                        className="menu__item"
                        onClick={width < 1120 ? () => setShowSidebar(!showSidebar) : null}
                    >
                        START
                    </Link>
                </li>
                <li>
                    <Link
                        to="/plan"
                        className="menu__item"
                        onClick={width < 1120 ? () => setShowSidebar(!showSidebar) : null}
                    >
                        PLAN{width > 1120 ? <br/> : null} TRENINGOWY
                    </Link>
                </li>
                <li>
                    <Link
                        to="/contact"
                        className="menu__item"
                        onClick={width < 1120 ? () => setShowSidebar(!showSidebar) : null}
                    >
                        WIADOMOŚCI
                    </Link>
                </li>
                <li>
                    <Link
                        to="/notes"
                        className="menu__item"
                        onClick={width < 1120 ? () => setShowSidebar(!showSidebar) : null}
                    >
                        TWOJE NOTATKI
                    </Link>
                </li>
                <li>
                    <Link
                        to="/calculators"
                        className="menu__item"
                        onClick={width < 1120 ? () => setShowSidebar(!showSidebar) : null}
                    >
                        KALKULATORY
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default MenuUser;
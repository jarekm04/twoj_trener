import React from 'react';
import {Link} from "react-router-dom";

const MenuUser = () => {
    return (
        <nav className="header__menu">
            <ul className="menu">
                <li>
                    <Link to="/plan" className="menu__item">PLAN TRENINGOWY</Link>
                </li>
                <li>
                    <Link to="/contact" className="menu__item">WIADOMOŚCI</Link>
                </li>
                <li>
                    <Link to="/notes" className="menu__item">TWOJE NOTATKI</Link>
                </li>
                <li>
                    <Link to="/calculators" className="menu__item">KALKULATORY</Link>
                </li>
            </ul>
        </nav>
    );
};

export default MenuUser;
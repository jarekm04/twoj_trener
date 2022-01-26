import React, {useState} from 'react';
import "./header.scss";
import {Link} from 'react-scroll';
import {animateScroll as scroll} from 'react-scroll';
import Menu from "./Menu";
import Modal from "./Modal/Modal";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDumbbell} from "@fortawesome/free-solid-svg-icons";


const Header = () => { //isLogged, setIsLogged
    const [modal, setModal] = useState(false);

    const toggleModal = () => setModal(!modal);

    return (
        <>
            <header className="header" id="headerID">
                <Link
                    to="headerID"
                    onClick={() => scroll.scrollToTop()}
                    className="header__logo"
                    smooth={true}
                    duration={500}
                >
                    TWÓJ<span>TRENER</span>
                    <FontAwesomeIcon icon={faDumbbell}/>.PL
                </Link>
                <Menu/>
                <button
                    className="header__btn"
                    onClick={toggleModal}
                >
                    Zaloguj się
                </button>
            </header>
            <Modal
                showModal={modal}
                closeModal={toggleModal}
                // setIsLogged={setIsLogged}
                // isLogged={isLogged}
            />
        </>
    );
};

export default Header;
import React, {useState} from 'react';
import {Link} from 'react-scroll';
import {animateScroll as scroll} from 'react-scroll';
import Menu from "./Menu";
import Modal from "./Modal/Modal";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDumbbell} from "@fortawesome/free-solid-svg-icons";
import {GiHamburgerMenu} from "react-icons/gi";
import {AiOutlineCloseCircle} from "react-icons/ai";


const Header = ({showSidebar, setShowSidebar}) => {
    const [modal, setModal] = useState(false);

    const toggleModal = () => setModal(!modal);

    return (
        <>
            <header className="header desktop" id="headerID">
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
            <header className="header mobile" id="headerID">
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
                {!showSidebar ? <GiHamburgerMenu className="navIcon" onClick={() => setShowSidebar(!showSidebar)}/>
                    : <AiOutlineCloseCircle className="navIcon" onClick={() => setShowSidebar(!showSidebar)}/>
                }
                <button
                    className="header__btn"
                    onClick={toggleModal}
                >
                    Zaloguj się
                </button>
                <Menu showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
            </header>
            <Modal
                showModal={modal}
                closeModal={toggleModal}
            />
        </>
    );
};

export default Header;
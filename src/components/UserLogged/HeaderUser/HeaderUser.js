import React from 'react';
import {Link} from "react-router-dom";
import {signOut} from "firebase/auth";
import {auth} from "../../../firebase";
import {useNavigate} from "react-router-dom";
import MenuUser from "./MenuUser";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDumbbell} from "@fortawesome/free-solid-svg-icons";
import {GiHamburgerMenu} from "react-icons/gi";
import {AiOutlineCloseCircle} from "react-icons/ai";

const HeaderUser = ({showSidebar, setShowSidebar, setIsUserLogged}) => {
    const navigate = useNavigate();

    const handleSignOut = () => {
        signOut(auth).then(() => {
            setIsUserLogged(false);
            navigate("/");
        }).catch(err => {
            alert(err.message);
        });
        alert("Wylogowałeś się!");
    };

    return (
        <>
            <header className="headerUser desktop">
                <Link
                    to="/homepage"
                    className="header__logo"
                >
                    TWÓJ<span>TRENER</span>
                    <FontAwesomeIcon icon={faDumbbell}/>.PL
                </Link>
                <MenuUser/>
                <h2 className="header__user">
                    {localStorage.getItem('userName')}
                </h2>
                <button className="header__btn" onClick={handleSignOut}>
                    Wyloguj się
                </button>
            </header>
            <header className="headerUser mobile">
                <Link
                    to="/homepage"
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
                <h2 className="header__user">
                    {localStorage.getItem('userName')}
                </h2>
                <button className="header__btn" onClick={handleSignOut}>
                    Wyloguj się
                </button>
                <MenuUser
                    showSidebar={showSidebar}
                    setShowSidebar={setShowSidebar}
                />
            </header>
        </>
    );
};

export default HeaderUser;
import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import {signOut} from "firebase/auth";
import {auth} from "../../../firebase";
import {useNavigate} from "react-router-dom";
import MenuUser from "./MenuUser";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDumbbell} from "@fortawesome/free-solid-svg-icons";
import {GiHamburgerMenu} from "react-icons/gi";
import {AiOutlineCloseCircle} from "react-icons/ai";

const HeaderUser = ({showSidebar, setShowSidebar}) => {
    const navigate = useNavigate();

    useEffect(() => { //opcja, żeby niezalogowany użytkownik nie mógł się dostać do zalogowanych komponentów
        auth.onAuthStateChanged((user) => {
            if (!user) {
                navigate("/");
            }
        });
    }, []);

    const handleSignOut = () => {
        signOut(auth).then(() => {
            navigate("/")
        }).catch(err => {
            alert(err.message);
        });
        alert("Wylogowałeś się!");
    };

    return (
        <>
            <header className="header desktop">
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
            <header className="header mobile">
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
                <MenuUser showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
            </header>
        </>
    );
};

export default HeaderUser;
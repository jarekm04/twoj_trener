import React, {useEffect, useState} from 'react';
import "./headerUser.scss";
import MenuUser from "./MenuUser";
import {Link} from "react-router-dom";
import {signOut} from "firebase/auth";
import {auth} from "../../../firebase";
import {useNavigate} from "react-router-dom";

const HeaderUser = () => {
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
            <header className="header" id="headerID">
                <Link to="/homepage" className="header__logo" >TWÓJ<span>TRENER</span><i className="fas fa-dumbbell"></i>.PL</Link>
                <MenuUser/>
                <h2 className="header__user">{localStorage.getItem('userName')}</h2>
                <button className="header__btn" onClick={handleSignOut}>Wyloguj się</button>
            </header>
        </>
    );
};

export default HeaderUser;
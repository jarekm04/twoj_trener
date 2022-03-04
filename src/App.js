import React, {useEffect, useState} from 'react';
import "./styles/base.scss";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import WelcomePage from "./components/LandingPage/WelcomePage";
import HomePage from "./components/UserLogged/HomePage";
import TrainingPlanUser from "./components/UserLogged/TrainingPlanUser";
import ContactUser from "./components/UserLogged/ContactUser";
import NotesUser from "./components/UserLogged/NotesUser";
import CalculatorsUser from "./components/UserLogged/CalculatorsUser";
import HeaderUser from "./components/UserLogged/HeaderUser";
import Header from "./components/LandingPage/Header";
import {auth} from "./firebase";


function App() {
    const [showSidebar, setShowSidebar] = useState(false);
    const [isUserLogged, setIsUserLogged] = useState(false);


    return (
        <>
            <Router>
                { isUserLogged ? <HeaderUser showSidebar={showSidebar} setShowSidebar={setShowSidebar}/> : <Header showSidebar={showSidebar} setShowSidebar={setShowSidebar}/> }
                <Routes>
                    <Route path="/" element={<WelcomePage />} />
                    <Route path="/homepage" element={<HomePage />} />
                    <Route path="/plan" element={<TrainingPlanUser />} />
                    <Route path="/contact" element={<ContactUser />} />
                    <Route path="/notes" element={<NotesUser />} />
                    <Route path="/calculators" element={<CalculatorsUser />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;

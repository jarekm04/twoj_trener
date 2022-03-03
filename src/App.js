import React from 'react';
import "./styles/base.scss";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import WelcomePage from "./components/LandingPage/WelcomePage";
import HomePage from "./components/UserLogged/HomePage";
import TrainingPlanUser from "./components/UserLogged/TrainingPlanUser";
import ContactUser from "./components/UserLogged/ContactUser";
import NotesUser from "./components/UserLogged/NotesUser";
import CalculatorsUser from "./components/UserLogged/CalculatorsUser";


function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<WelcomePage />} />
                    <Route path="/homepage" element={<HomePage />} />
                    <Route path="/plan" element={<TrainingPlanUser/>} />
                    <Route path="/contact" element={<ContactUser/>} />
                    <Route path="/notes" element={<NotesUser/>} />
                    <Route path="/calculators" element={<CalculatorsUser/>} />
                </Routes>
            </Router>
        </>
    );
}

export default App;

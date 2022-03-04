import React, { useEffect } from 'react';
import {auth} from "../../firebase";
import {useNavigate} from "react-router-dom";
import Header from "./Header";
import Slider from "./Slider";
import TrainingPlan from "./TrainingPlan";
import Contact from "./Contact";
import Notes from "./Notes";
import Calculators from "./Calculators";
import Footer from "./Footer";

const WelcomePage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                navigate("/homepage");
            }
        });
    }, []);

    return (
        <>
            <Header />
            <Slider/>
            <TrainingPlan/>
            <Contact/>
            <Notes/>
            <Calculators/>
            <Footer/>
        </>
    );
};

export default WelcomePage;
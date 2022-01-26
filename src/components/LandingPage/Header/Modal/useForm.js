import React, {useEffect, useState} from 'react';

// import {useNavigate} from "react-router-dom";
import {signInWithEmailAndPassword, createUserWithEmailAndPassword} from "firebase/auth";
import {auth} from "../../../../firebase";

const UseForm = (validateInfo, submitForm) => {


    // const [errors, setErrors] = useState({});
    // const navigate = useNavigate();


    // const handleRegister = () => {
    //     createUserWithEmailAndPassword(auth, values.registerEmail, values.registerPassword)
    //         .then(() => {
    //         navigate("/homepage");
    //     })
    //         .catch((err) => alert(err.message));
    // };

    // const handleLoginSubmit = (e) => {
    //     e.preventDefault();
    //     handleSignIn();
    //     setErrors(validateInfo(values));
    //     setIsSubmitting(true);
    // };

    // const handleRegisterSubmit = (e) => {
    //     e.preventDefault();
    //     setErrors(validateInfo(values));
    //     localStorage.setItem('userName', values.registerName);
    //     setIsSubmitting(true);
    // };

    // useEffect(() => {
    //     if(Object.keys(errors).length === 0 && isSubmitting) {
    //         submitForm();
    //     }
    // }, [errors]);



    // return {errors};
};

export default UseForm;
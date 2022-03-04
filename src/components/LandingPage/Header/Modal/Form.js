import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {auth} from "../../../../firebase";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimesCircle} from "@fortawesome/free-solid-svg-icons";

const Form = ({closeModal}) => {
    const navigate = useNavigate();
    const [isRegistering, setIsRegistering] = useState(false);

    const [values, setValues] = useState({
        userEmail: '',
        userPassword: '',
        registerName: '',
        registerEmail: '',
        registerPassword: ''
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    const handleSignIn = () => {
        signInWithEmailAndPassword(auth, values.userEmail, values.userPassword)
            .then(() => {
                navigate('/homepage')
            }).catch((err) =>
            alert(err.message));
    };

    const handleRegister = () => {
        if (!values.registerName) return alert("Proszę wpisać imię");
        localStorage.setItem('userName', values.registerName);
        createUserWithEmailAndPassword(auth, values.registerEmail, values.registerPassword)
            .then(() => {
            navigate("/homepage");
        })
            .catch((err) => alert(err.message));
    };


    return (
        <>
            <div className="overlay-modal"
                 onClick={closeModal}
            />
            {isRegistering ? (
                <div className="registerForm" >
                    <div className="login">
                        <label htmlFor="userName">Imię</label>
                        <input
                            type="text"
                            placeholder="Wpisz Imię"
                            value={values.registerName}
                            onChange={(e) => setValues({...values, registerName: e.target.value})}
                        />
                    </div>
                    <div className="email">
                        <label htmlFor="userEmail">Email</label>
                        <input
                            type="email"
                            placeholder="Wpisz swój email"
                            value={values.registerEmail}
                            onChange={(e) => setValues({...values, registerEmail: e.target.value})}
                        />
                    </div>
                    <div className="password">
                        <label htmlFor="userPassword">Hasło</label>
                        <input
                            type="password"
                            placeholder="Hasło min. 6 znaków"
                            value={values.registerPassword}
                            onChange={(e) => setValues({...values, registerPassword: e.target.value})}
                        />
                    </div>
                    <div className="logButtons">
                        <button className="loginBtn" onClick={handleRegister} >
                            Zarejestruj
                        </button>
                        <button className="registerBtn" onClick={() => setIsRegistering(false)}>
                            Powrót
                        </button>
                    </div>
                    <FontAwesomeIcon icon={faTimesCircle} onClick={closeModal}/>
                </div>
            ) : (
                <div className="loginForm">
                    <div className="email">
                        <label htmlFor="userEmail">Email</label>
                        <input
                            type="email"
                            placeholder="Email"
                            name="userEmail"
                            value={values.userEmail}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="password">
                        <label htmlFor="userPassword">Hasło</label>
                        <input
                            type="password"
                            placeholder="Hasło"
                            name="userPassword"
                            value={values.userPassword}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="logButtons">
                        <button className="loginBtn" onClick={handleSignIn}>
                            Zaloguj
                        </button>
                        <button className="registerBtn" onClick={() => setIsRegistering(true)}>
                            Zarejestruj się
                        </button>
                    </div>
                    <p className="registerText">Nie masz konta?<br/>Kliknij zarejestruj się!</p>
                    <FontAwesomeIcon icon={faTimesCircle} onClick={closeModal}/>
                </div>
            )}

        </>
    );
};

export default Form;
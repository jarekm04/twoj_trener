import React, {useEffect, useState} from 'react';
import {onValue, ref, set} from "firebase/database";
import {auth, db} from "../../../firebase";
import HeaderUser from "../HeaderUser";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPaperPlane, faUserNinja} from "@fortawesome/free-solid-svg-icons";
import {faUser} from "@fortawesome/free-regular-svg-icons";

const ContactUser = () => {
    const [msg, setMsg] = useState("");
    const [messages, setMessages] = useState([]);
    const [countID, setCountID] = useState(0);

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                onValue(ref(db, `/${auth.currentUser.uid}${1}`), (snapshot) => {
                    setMessages([]);
                    const data = snapshot.val();
                    if (data !== null) {
                        Object.values(data).map((msg) => {
                            setMessages((oldArray) => [...oldArray, msg]);
                        });
                    }
                });
            }
        });
    }, []);

    const addNewMessage = (newMsg) => {
        const newMessages = [newMsg, ...messages];
        setMessages(newMessages);
    };


    const handleChange = (e) => {
        setMsg(e.target.value);
    };

    const writeToDatabase = () => {
        set(ref(db, `/${auth.currentUser.uid}${1}/${countID}`), {
            msg: msg,
            countID: countID
        });
        setCountID(countID + 1);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!msg) return alert("Wpisz wiadomość");

        addNewMessage({
            id: Math.floor(Math.random() * 10000),
        });
        writeToDatabase();
        setMsg('');
    };

    return (
        <section className="contactUser container">
            <div className="messages-box">
                <ul className="messages">
                    <li className="trainer__message">
                        <FontAwesomeIcon className="userNinjaIcon" icon={faUserNinja}/>
                        Cześć {localStorage.getItem("userName")}! Miło mi Cię powitać na naszym portalu
                        TwójTrener.pl. Jakby co jestem do Twojej dyspozycji.
                    </li>
                    <li className="user__message">
                        Wiadomość użytkownika.
                        <FontAwesomeIcon className="userIcon" icon={faUser}/>
                    </li>
                    {
                        messages.map((message, index) => (
                                <li
                                    key={index}
                                    className="user__message"
                                >
                                    {message.msg}
                                    <FontAwesomeIcon className="userIcon" icon={faUser}/>
                                </li>
                            )
                        )
                    }
                </ul>
                <form className="newMessage" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Dodaj wiadomość..."
                        value={msg}
                        name="text"
                        onChange={handleChange}
                    />
                    <FontAwesomeIcon className="sendPlane" icon={faPaperPlane} onClick={handleSubmit}/>
                </form>
            </div>
        </section>
    );
};

export default ContactUser;
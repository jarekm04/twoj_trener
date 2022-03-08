import React, {useEffect, useState} from 'react';
import {auth, db} from "../../../firebase";
import {set, ref, onValue, remove, update} from "firebase/database";
import {useNavigate} from "react-router-dom";
import {AiFillEdit, AiFillDelete} from "react-icons/ai";

const NotesUser = () => {
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);
    const [isEdit, setIsEdit] = useState(false);
    const [tempUidd, setTempUidd] = useState("");
    const [countID, setCountID] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                // read todolist from firebase
                onValue(ref(db, `/${auth.currentUser.uid}`), (snapshot) => {
                    setTodos([]);
                    const data = snapshot.val();
                    if (data !== null) {
                        setCountID((Object.values(data).length));
                        Object.values(data).map((todo) => {
                            setTodos((oldArray) => [...oldArray, todo]);
                        });
                    }
                });
            }
            if (!user) {
                navigate("/");
            }
        });
    }, []);


    const writeToDatabase = () => {
        if (!todo) return alert("Musisz wpisać notatkę");
        set(ref(db, `/${auth.currentUser.uid}/${countID}`), {
            todo: todo,
            countID: countID
        });
        setCountID(countID + 1);
        setTodo("");
    };

    const handleUpdate = (todo) => {
        setIsEdit(true);
        setTodo(todo.todo);
        setTempUidd(todo.countID);
    };

    const handleEditConfirm = () => {
        update(ref(db, `/${auth.currentUser.uid}/${tempUidd}`), {
            todo: todo,
            tempUidd: tempUidd
        });
        setTodo("");
        setIsEdit(false);
    };

    const handleDelete = (countID) => {
        remove(ref(db, `/${auth.currentUser.uid}/${countID}`));
    }

    return (
        <section className="notesUser container">
            <h1 className="notesUser__title">
                Nie chcesz czegoś zapomnieć? Chcesz notować swój progres? Zwyczajnie potrzebujesz listy do
                zapisywania
                swoich celów? Zrób to poniżej!
            </h1>
            <input
                type="text"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                placeholder="Dodaj notatkę..."
            />
            {isEdit ? (
                <div>
                    <button className="btn" onClick={handleEditConfirm}>Potwierdź</button>
                </div>
            ) : (
                <div>
                    <button className="btn" onClick={writeToDatabase}>Dodaj</button>
                </div>
            )}
            {todos
                .map((todo, index) => (
                    <div className="task" key={index}>
                        <div className="icons">
                            <AiFillEdit onClick={() => handleUpdate(todo)}/>
                            <AiFillDelete onClick={() => handleDelete(todo.countID)}/>
                        </div>
                        <p>{todo.todo}</p>
                    </div>
                ))
                .reverse()
            }
        </section>
    );
};

export default NotesUser;
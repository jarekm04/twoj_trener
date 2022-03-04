import React, {useState} from 'react';
import Form from "./Form";

function Modal({showModal, closeModal, setIsUserLogged}) {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const submitForm = () => {
        setIsSubmitted(true);
    }

    return (
        <>
            {showModal ? (
                <>
                    {!isSubmitted ? (
                        <Form submitForm={submitForm} closeModal={closeModal} setIsUserLogged={setIsUserLogged}/>
                    ) : null
                    }
                </>
            ) : null
            }
        </>
    );
}

export default Modal;
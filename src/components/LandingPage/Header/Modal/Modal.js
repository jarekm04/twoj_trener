import React, {useState} from 'react';
import './modal.scss';
import Form from "./Form";

function Modal({showModal, closeModal}) {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const submitForm = () => {
        setIsSubmitted(true);
    }

    return (
        <>
            {showModal ? (
                <>
                    {!isSubmitted ? (
                        <Form submitForm={submitForm} closeModal={closeModal}/>
                    ) : null
                    }
                </>
            ) : null
            }
        </>
    );
}

export default Modal;
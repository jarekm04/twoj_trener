import React from 'react';
import "./notes.scss";
import { Parallax } from 'react-parallax';
import notesBg from '../../../assets/notesBg.jpg';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";

const Notes = () => {
    return (
        <section className="notes" id="notesID">
            <Parallax bgImage={notesBg} strength={500} >
                <div className="notes-box">
                    <ul className="list">
                        <li className="list__item">
                            <FontAwesomeIcon icon={faArrowRight} />
                            Sporządzaj swoje notatki
                        </li>
                        <li className="list__item">
                            <FontAwesomeIcon icon={faArrowRight} />
                            Prowadź dziennik treningowy
                        </li>
                        <li className="list__item">
                            <FontAwesomeIcon icon={faArrowRight} />
                            Ustanawiaj nowe cele
                        </li>
                        <li className="list__item">
                            <FontAwesomeIcon icon={faArrowRight} />
                            Sprawdzaj postępy
                        </li>
                    </ul>
                </div>
            </Parallax>
        </section>
    );
};

export default Notes;


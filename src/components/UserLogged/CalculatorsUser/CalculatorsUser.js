import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {auth} from "../../../firebase";

const CalculatorsUser = () => {
    const [bmiResult, setBmiResult] = useState("");
    const [bmrResult, setBmrResult] = useState("");
    const navigate = useNavigate();

    const [values, setValues] = useState({
        bmiWeight: '',
        bmiGrowth: '',
        bmrWeight: '',
        bmrGrowth: '',
        bmrAge: '',
        bmrGender: ''
    });

    const getBmi = () => {
        if (!values.bmiWeight) return alert("BMI KALKULATOR: Proszę wpisać wagę");
        if (!values.bmiGrowth) return alert("BMI KALKULATOR: Proszę wpisać wzrost");
        const growthInMeters = values.bmiGrowth * 0.01;
        const growthSquare = growthInMeters * growthInMeters;
        setBmiResult((values.bmiWeight / growthSquare).toFixed(1));
        values.bmiWeight = "";
        values.bmiGrowth = "";
    }

    const getBmr = () => {
        if (!values.bmrGender) return alert("BMR KALKULATOR: Proszę wybrać płeć");
        if (!values.bmrWeight) return alert("BMR KALKULATOR: Proszę wpisać wagę");
        if (!values.bmrGrowth) return alert("BMR KALKULATOR: Proszę wpisać wzrost");
        if (!values.bmrAge) return alert("BMR KALKULATOR: Proszę wpisać wiek");

        const manResult = Math.round((9.99 * values.bmrWeight) + (6.25 * values.bmrGrowth) - (4.92 * values.bmrAge) + 5);
        const womanResult = Math.round((9.99 * values.bmrWeight) + (6.25 * values.bmrGrowth) - (4.92 * values.bmrAge) - 161);
        values.bmrGender === "male" ? setBmrResult(manResult) : setBmrResult(womanResult);

        values.bmrWeight = "";
        values.bmrGrowth = "";
        values.bmrAge = "";

        return bmrResult;
    }

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (!user) {
                navigate("/");
            }
        });
    }, []);

    return (
        <div className="calculatorsUser container">
            <article className="calculator">
                <h2 className="calculator__title">Kalkulator BMI</h2>
                <div className="inputs">
                    <div className="weight-box">
                        <label htmlFor="weight">
                            Waga [kg]
                        </label>
                        <input
                            type="number"
                            id="weight"
                            onChange={(e) => setValues({...values, bmiWeight: e.target.value})}
                            value={values.bmiWeight}
                        />
                    </div>
                    <div className="height-box">
                        <label htmlFor="growth">
                            Wzrost [cm]
                        </label>
                        <input
                            type="number"
                            id="growth"
                            onChange={(e) => setValues({...values, bmiGrowth: e.target.value})}
                            value={values.bmiGrowth}
                        />
                    </div>
                </div>
                <button className="calculator__btn" onClick={getBmi}>Oblicz</button>
                {bmiResult ? <h3 className="result">Twój wynik BMI wynosi: {bmiResult}</h3> : null}
                <p className="calculator__text">
                    Wg PoTreningu.pl BMI jest wskaźnikiem odnoszącym się do relacji pomiędzy masą ciała a wzrostem
                    (body mass index). Pozwala m.in. na wyłonienie ze społeczeństwa jednostek o wyższym ryzyku
                    występowania nadwagi i otyłości, a co za tym idzie wyższym ryzyku zachorowania na choroby
                    cywilizacyjne, takie jak cukrzyca typu 2, miażdżyca, czy nadciśnienie. Nie zawsze jednak wyniki
                    wyliczeń BMI są adekwatne do sytuacji rzeczywistej i czasami mogą dawać nieco mylne pole do
                    wnioskowania. Utrudnione może być jego wykorzystanie m.in. w przypadku dzieci i młodzieży, a
                    także sportowców (głównie uprawiających dyscypliny siłowe).
                </p>
                <ul className="bmiList">
                    <li className={bmiResult > 0 && bmiResult < 16 ? "active" : ""}>
                        do 16: wygłodzenie
                    </li>
                    <li className={bmiResult >= 16 && bmiResult < 16.9 ? "active" : ""}>
                        od 16 do 17: wychudzenie
                    </li>
                    <li className={bmiResult >= 17 && bmiResult < 18.4 ? "active" : ""}>
                        od 17 do 18.5: niedowaga
                    </li>
                    <li className={bmiResult >= 18.5 && bmiResult < 24.9 ? "active" : ""}>
                        od 18.5 do 25: wartość prawidłowa
                    </li>
                    <li className={bmiResult >= 25 && bmiResult < 29.9 ? "active" : ""}>
                        od 25 do 30: nadwaga
                    </li>
                    <li className={bmiResult >= 30 && bmiResult < 34.9 ? "active" : ""}>
                        od 30 do 35: I stopień otyłości
                    </li>
                    <li className={bmiResult >= 35 && bmiResult < 39.9 ? "active" : ""}>
                        od 35 do 40: II stopień otyłości
                    </li>
                    <li className={bmiResult > 40 ? "active" : ""}>
                        powyżej 40: III stopień otyłości
                    </li>
                </ul>
                <hr/>
            </article>
            <article className="calculator">
                <h2 className="calculator__title">Kalkulator BMR</h2>
                <div className="sexChoose">
                    <div className="man-box">
                        <label htmlFor="man">
                            Mężczyzna
                        </label>
                        <input
                            type="radio" name="sex" id="man"
                            onChange={(e) => setValues({...values, bmrGender: "male"})}
                            value={values.bmrGender}
                        />
                    </div>
                    <div className="woman-box">
                        <label htmlFor="woman">
                            Kobieta
                        </label>
                        <input
                            type="radio" name="sex" id="woman"
                            onChange={(e) => setValues({...values, bmrGender: "female"})}
                            value={values.bmrGender}
                        />
                    </div>
                </div>
                <div className="inputs">
                    <div className="weight-box">
                        <label htmlFor="weight2">
                            Waga [kg]
                        </label>
                        <input type="number" id="weight2"
                               onChange={(e) => setValues({...values, bmrWeight: e.target.value})}
                               value={values.bmrWeight}
                        />
                    </div>
                    <div className="height-box">
                        <label htmlFor="growth2">
                            Wzrost [cm]
                        </label>
                        <input type="number" id="growth2"
                               onChange={(e) => setValues({...values, bmrGrowth: e.target.value})}
                               value={values.bmrGrowth}
                        />
                    </div>
                    <div className="age-box">
                        <label htmlFor="age">
                            Wiek
                        </label>
                        <input
                            type="number" id="age"
                            onChange={(e) => setValues({...values, bmrAge: e.target.value})}
                            value={values.bmrAge}
                        />
                    </div>
                </div>
                <button className="calculator__btn" onClick={getBmr}>Oblicz</button>
                {bmrResult ?
                    <h3 className="result">Twoja podstawowa przemiana materii wynosi: {bmrResult}kcal</h3> : null}
                <p className="calculator__text">
                    Wg fabrykasily.pl kalkulator BMR To kalkulator zapotrzebowania
                    kalorycznego człowieka, które jest potrzebne aby utrzymywać podstawowe funkcje organizmu
                    zachodzące w układzie nerwowym, wątrobie, nerkach, sercu i pozostałych narządach Twojego
                    ciała.
                </p>
            </article>
        </div>
    );
};

export default CalculatorsUser;
import React, {useEffect, useState} from 'react';
import {useForm} from "react-hook-form";
import {animateScroll as scroll} from 'react-scroll';
import {Link} from "react-scroll";
import {useNavigate} from "react-router-dom";
import {auth} from "../../../firebase";
import {pics} from './pictures';

const TrainingPlanUser = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const [isSubmitted, setIsSubmitted] = useState(false);
    const navigate = useNavigate();

    const handleResetPlan = () => {
        localStorage.removeItem("chestExercise");
        localStorage.removeItem("backExercise");
        localStorage.removeItem("legsExercise");
        setIsSubmitted(false);
    }

    const onSubmit = data => {
        console.log(data);

        localStorage.setItem("chestExercise", data.chest);
        localStorage.setItem("backExercise", data.back);
        localStorage.setItem("legsExercise", data.legs);

        setIsSubmitted(true);
    };

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (!user) {
                navigate("/");
            }
        });
    }, []);

    return (
        <>
            {isSubmitted || localStorage.hasOwnProperty("chestExercise") ? (
                <>
                    <section className="planReady" id="topScroll">
                        <article className="trainingDay">
                            <h2 className="trainingDay__title">Poniedziałek</h2>
                            <Link
                                to="chestScroll"
                                className="exerciseName"
                                smooth={true}
                                duration={500}
                                offset={-80}
                            >
                                Klatka piers. 3 serie - 15 powtórzeń
                            </Link>
                            <Link
                                to="backScroll"
                                className="exerciseName"
                                smooth={true}
                                duration={500}
                                offset={-80}
                            >
                                Plecy 4 serie - 12 powtórzeń
                            </Link>
                            <Link
                                to="legsScroll"
                                className="exerciseName"
                                smooth={true}
                                duration={500}
                                offset={-80}
                            >
                                Nogi 5 serii - 10 powtórzeń
                            </Link>
                        </article>
                        <article className="trainingDay">
                            <h2 className="trainingDay__title">Środa</h2>
                            <Link
                                to="chestScroll"
                                className="exerciseName"
                                smooth={true}
                                duration={500}
                                offset={-80}
                            >
                                Klatka piers. 5 serii - 10 powtórzeń
                            </Link>
                            <Link
                                to="backScroll"
                                className="exerciseName"
                                smooth={true}
                                duration={500}
                                offset={-80}
                            >
                                Plecy 3 serie - 15 powtórzeń
                            </Link>
                            <Link
                                to="legsScroll"
                                className="exerciseName"
                                smooth={true}
                                duration={500}
                                offset={-80}
                            >
                                Nogi 4 serie - 12 powtórzeń
                            </Link>
                        </article>
                        <article className="trainingDay">
                            <h2 className="trainingDay__title">Piątek</h2>
                            <Link
                                to="chestScroll"
                                className="exerciseName"
                                smooth={true}
                                duration={500}
                                offset={-80}
                            >
                                Klatka piers. 4 serie - 12 powtórzeń
                            </Link>
                            <Link
                                to="backScroll"
                                className="exerciseName"
                                smooth={true}
                                duration={500}
                                offset={-80}
                            >
                                Plecy 5 serii - 10 powtórzeń
                            </Link>
                            <Link
                                to="legsScroll"
                                className="exerciseName"
                                smooth={true}
                                duration={500}
                                offset={-80}
                            >
                                Nogi 3 serie - 15 powtórzeń
                            </Link>
                        </article>
                    </section>
                    <button className="resetBtn" onClick={handleResetPlan}>Resetuj plan</button>
                    <section className="trainingPlanUser">
                        <section className="first-exercise" id="chestScroll">
                            {localStorage.getItem("chestExercise") === "chest1" ? (<article className="exercise">
                                <div className="exercise__images">
                                    <img src={pics.chest1} alt="chest"/>
                                    <img src={pics.chest2} alt="chest"/>
                                </div>
                                <div className="exercise__text">
                                    <h2 className="exercise__title">
                                        Wyciskanie sztangi na ławce poziomej leżąc
                                    </h2>
                                    <p className="exercise__desc">
                                        Wykonanie: Połóż się na ławce poziomej (płaskiej),
                                        stopy
                                        postaw
                                        stabilnie na podłożu i ugnij nogi w kolanach tak, aby utworzył się kąt prosty.
                                        Złap
                                        sztangę
                                        nachwytem w równych odstępach od jej środka, następnie zdejmij ją z uchwytów i
                                        opuść
                                        równym
                                        tempem do klatki piersiowej biorąc jednocześnie głęboki wdech (faza negatywna).
                                        Po
                                        lekkim
                                        dotknięciu klatki wykonaj ruch powrotny wyciskając sztangę do prostych rąk,
                                        robiąc w tym
                                        czasie wydech (faza pozytywna). Łokcie w trakcie całego ćwiczenia powinny być
                                        oddalone
                                        od
                                        ciała.
                                    </p>
                                </div>
                            </article>) : null}
                            {localStorage.getItem("chestExercise") === "chest2" ? (<article className="exercise">
                                <div className="exercise__images">
                                    <img src={pics.chest3} alt="chest"/>
                                    <img src={pics.chest4} alt="chest"/>
                                </div>
                                <div className="exercise__text">
                                    <h2 className="exercise__title">
                                        Wyciskanie sztangielek, skos górny
                                    </h2>
                                    <p className="exercise__desc">
                                        Wykonanie: Ustaw ławkę pod kątem 20-45 stopni. Połóż
                                        się na
                                        niej
                                        tak, aby pośladki i grzbiet przylegał bezpośrednio, stopy zaś wesprzyj stabilnie
                                        na
                                        podłożu.
                                        Złap sztangielki nachwytem i oprzyj się wygodnie całym ciężarem o ławkę. Kiedy
                                        pośladki
                                        i
                                        plecy będą przylegać do ławki weź głęboki wdech i wykonaj ruch podobny do
                                        wyciskania
                                        sztangi
                                        wypychając sztangielki ku górze i jednocześnie robiąc wydech. Następnie opuść
                                        równym
                                        tempem
                                        ciężar w taki sposób, aby łokcie znalazły się nieco poniżej poziomu, na którym
                                        ułożony
                                        jest
                                        tułów. W fazie tej pamiętaj o kolejnym wdechu. Łokcie w trakcie całego ćwiczenia
                                        powinny
                                        być
                                        skierowane na zewnątrz, a nie do środka.
                                    </p>
                                </div>
                            </article>) : null}
                            {localStorage.getItem("chestExercise") === "chest3" ? (<article className="exercise">
                                <div className="exercise__images">
                                    <img src={pics.chest5} alt="chest"/>
                                    <img src={pics.chest6} alt="chest"/>
                                </div>
                                <div className="exercise__text">
                                    <h2 className="exercise__title">
                                        Rozpiętki na maszynie, siedząc (butterfly)
                                    </h2>
                                    <p className="exercise__desc">
                                        Wykonanie: Bardzo ważne jest zajęcie odpowiedniej
                                        pozycji -
                                        powinieneś odpowiednio uregulować wysokość siedzenia i usadowić się tak, aby
                                        przedramię
                                        i
                                        łokcie przylegały bezpośrednio do poduszek (albo chwycić za drążki zastępujące
                                        poduszki).
                                        Stopy powinny być osadzone na podłożu, a grzbiet powinien przylegać do oparcia.
                                        Usiądź w
                                        poziomie (cała sylwetka ugięta w pasie ma tworzyć mniej więcej kąt prosty).
                                        Klatka
                                        powinna
                                        być wypięta nieco do przodu. Przyciągając poduszki zrób wydech, a przy powrocie
                                        do
                                        początkowego ułożenia weź wdech. W fazie szczytowej należy przytrzymać przez
                                        chwilę
                                        ciężar,
                                        natomiast ruch powrotny powinien odbywać się płynnie, bez jakiegokolwiek
                                        szarpania, tak
                                        aby
                                        mięśnie pracowały przez cały czas. Zadbaj też o pełne rozciągnięcie mięśni w
                                        fazie
                                        negatywnej. Łokcie w trakcie całego ćwiczenia powinny być oddalone od
                                        tułowia.
                                    </p>
                                </div>
                            </article>) : null}
                        </section>
                        <section className="second-exercise" id="backScroll">
                            {localStorage.getItem("backExercise") === "back1" ? (<article className="exercise">
                                <div className="exercise__images">
                                    <img src={pics.back1} alt="chest"/>
                                    <img src={pics.back2} alt="chest"/>
                                </div>
                                <div className="exercise__text">
                                    <h2 className="exercise__title">
                                        Wiosłowanie sztangą
                                    </h2>
                                    <p className="exercise__desc">
                                        Wykonanie: Podejdź do sztangi i rozstaw stopy na
                                        szerokość
                                        barków.
                                        Pochyl tułów zachowując naturalną krzywiznę kręgosłupa, a następnie złap gryf na
                                        szerokości
                                        barków (więcej w uwagach) nachwytem bądź podchwytem (więcej w uwagach). Weź
                                        wdech, patrz
                                        przed siebie i rozpocznij ruch wiosłowania. W momencie dotknięcia gryfem brzucha
                                        lub
                                        klatki
                                        (więcej w uwagach) zrób wydech i zacznij powoli opuszczać sztangę, aż do momentu
                                        pełnego
                                        rozciągnięcia mięśni.
                                    </p>
                                </div>
                            </article>) : null}
                            {localStorage.getItem("backExercise") === "back2" ? (<article className="exercise">
                                <div className="exercise__images">
                                    <img src={pics.back3} alt="chest"/>
                                    <img src={pics.back4} alt="chest"/>
                                </div>
                                <div className="exercise__text">
                                    <h2 className="exercise__title">
                                        Wiosłowanie końcem sztangi
                                    </h2>
                                    <p className="exercise__desc">
                                        Wykonanie: Stań w rozkroku nad sztangą, ugnij kolana i
                                        złap
                                        uchwyt
                                        sztangi zachowując naturalną krzywiznę kręgosłupa. Weź wdech i patrząc przed
                                        siebie
                                        zacznij
                                        ruch wiosłowania. W momencie dotknięcia sztangą brzucha ściągnij łopatki i zrób
                                        wydech.
                                        Powoli kontrolując ciężar zacznij opuszczać sztangę, aż do momentu maksymalnego
                                        rozciągnięcia mięśni. Podczas wykonywania ćwiczenia trzymaj plecy prosto i
                                        staraj się
                                        nie
                                        kołysać tułowiem.
                                    </p>
                                </div>
                            </article>) : null}
                            {localStorage.getItem("backExercise") === "back3" ? (<article className="exercise">
                                <div className="exercise__images">
                                    <img src={pics.back5} alt="chest"/>
                                    <img src={pics.back6} alt="chest"/>
                                </div>
                                <div className="exercise__text">
                                    <h2 className="exercise__title">
                                        Wiosłowanie na wyciągu dolnym
                                    </h2>
                                    <p className="exercise__desc">
                                        Wykonanie: Usiądź na siedzisku maszyny i zaprzyj nogi
                                        o punkt
                                        podparcia. Chwyć gryf, weź wdech i zacznij ruch wiosłowania. Plecy trzymaj cały
                                        czas
                                        prosto.
                                        W momencie dotknięcia gryfem brzucha wypnij klatkę do przodu i ściągnij łopatki,
                                        a
                                        następnie
                                        zrób wydech i wróć kontrolując ciężar do pozycji wyjściowej.
                                    </p>
                                </div>
                            </article>) : null}
                        </section>
                        <section className="third-exercise" id="legsScroll">
                            {localStorage.getItem("legsExercise") === "legs1" ? (<article className="exercise">
                                <div className="exercise__images">
                                    <img src={pics.legs1} alt="chest"/>
                                    <img src={pics.legs2} alt="chest"/>
                                </div>
                                <div className="exercise__text">
                                    <h2 className="exercise__title">
                                        Wykroki ze sztangielkami
                                    </h2>
                                    <p className="exercise__desc">
                                        Wykonanie: Podnieś sztangielki z podłoża. Pozycja
                                        startowa i
                                        wykonanie ćwiczenia podobnie jak podczas wykroków ze sztangą, czyli klatka
                                        wypięta, a
                                        łopatki ściągnięte. Podczas całego ćwiczenia zachowuj naturalną krzywiznę
                                        kręgosłupa.
                                        Weź
                                        wdech i jedną z nóg wykonaj krok do przodu. Następnie nogą wykroczną wykonaj
                                        przysiad w
                                        taki
                                        sposób, aby noga ugięła się pod kątem 90 stopni. Kolano nogi niećwiczonej
                                        powinno prawie
                                        dotykać podłoża, a jej stopa dotyka podłoża jedynie palcami. Stopa nogi
                                        wykrocznej
                                        całkowicie przylega do podłoża. Powróć do pozycji wyjściowej wypychając ciężar
                                        przez
                                        odepchnięcie od podłoża (głównie przez pięty) i robiąc jednocześnie wydech.
                                        Powtórz
                                        zaczynając tym razem od innej nogi.
                                    </p>
                                </div>
                            </article>) : null}
                            {localStorage.getItem("legsExercise") === "legs2" ? (<article className="exercise">
                                <div className="exercise__images">
                                    <img src={pics.legs3} alt="chest"/>
                                    <img src={pics.legs4} alt="chest"/>
                                </div>
                                <div className="exercise__text">
                                    <h2 className="exercise__title">
                                        Przysiad ze sztangą na barkach
                                    </h2>
                                    <p className="exercise__desc">
                                        Wykonanie: Podejdź do stojaków, połóż ręce na gryfie,
                                        a
                                        następnie
                                        podejdź po sztangę i ułóż gryf na barkach szerzej w uwagach). Wypnij klatkę do
                                        przodu,
                                        ściągnij łopatki i patrz przed siebie lub lekko w górę. Zdejmij sztangę ze
                                        stojaków i
                                        wykonaj dwa, trzy kroki w tył. Stopy rozstaw niewiele szerzej niż szerokość
                                        barków, a
                                        palce
                                        skieruj lekko na zewnątrz (stopy powinny cały czas przylegać do podłoża). Weź
                                        głęboki
                                        wdech
                                        i zacznij ruch w dół, zaczynając od przesunięcia bioder do tyłu (kolana nie
                                        powinny być
                                        wypychane do przodu, nie dalej niż końce palców stóp - szerzej o tym w uwagach).
                                        Wykonuj
                                        go
                                        aż do osiągnięcia kąta prostego (szerzej o głębokości przysiadu w uwagach). Ruch
                                        pozytywny
                                        zacznij od przesunięcia głowy do tyłu. Podnoś się do góry jednocześnie
                                        wypychając biodra
                                        do
                                        przodu i robiąc wydech, aż do pozycji wyjściowej. Podczas całego ćwiczenia
                                        zachowuj
                                        naturalną krzywiznę kręgosłupa (unikaj tzw. kociego grzbietu i okrągłych
                                        pleców).
                                    </p>
                                </div>
                            </article>) : null}
                            {localStorage.getItem("legsExercise") === "legs3" ? (<article className="exercise">
                                <div className="exercise__images">
                                    <img src={pics.legs5} alt="chest"/>
                                    <img src={pics.legs6} alt="chest"/>
                                </div>
                                <div className="exercise__text">
                                    <h2 className="exercise__title">
                                        Wypychanie nóg na suwnicy
                                    </h2>
                                    <p className="exercise__desc">
                                        Wykonanie: Usiądź w siedzisku maszyny. Połóż stopy na
                                        platformie
                                        (powinny w całości do niej przylegać) mniej więcej na szerokość barków (szerzej
                                        o tym w
                                        uwagach). Weź wdech, zwolnij blokadę ciężaru i rozpocznij wykonywanie ćwiczenia.
                                        W
                                        momencie,
                                        gdy nogi ugną się w kolanach pod kątem ok. 90 stopni zacznij wypychanie ciężaru,
                                        jednocześnie robiąc wydech.
                                    </p>
                                </div>
                            </article>) : null}
                        </section>
                    </section>
                </>
            ) : (
                <>
                    <section className="trainingPlanUser">
                        <h1 className="trainingPlanUser__title">
                            WYBIERZ <span>JEDNO</span> ĆWICZENIE NA <span>KAŻDĄ </span> PARTIĘ MIĘŚNIOWĄ
                        </h1>
                        <section className="first-exercise">
                            <article className="exercise">
                                <div className="exercise__images">
                                    <img src={pics.chest1} alt="chest"/>
                                    <img src={pics.chest2} alt="chest"/>
                                </div>
                                <div className="exercise__text">
                                    <h2 className="exercise__title">
                                        Wyciskanie sztangi na ławce poziomej leżąc
                                    </h2>
                                    <p className="exercise__desc">
                                        Wykonanie: Połóż się na ławce poziomej (płaskiej),
                                        stopy
                                        postaw
                                        stabilnie na podłożu i ugnij nogi w kolanach tak, aby utworzył się kąt
                                        prosty. Złap
                                        sztangę
                                        nachwytem w równych odstępach od jej środka, następnie zdejmij ją z uchwytów
                                        i opuść
                                        równym
                                        tempem do klatki piersiowej biorąc jednocześnie głęboki wdech (faza
                                        negatywna). Po
                                        lekkim
                                        dotknięciu klatki wykonaj ruch powrotny wyciskając sztangę do prostych rąk,
                                        robiąc w tym
                                        czasie wydech (faza pozytywna). Łokcie w trakcie całego ćwiczenia powinny
                                        być oddalone
                                        od
                                        ciała.
                                    </p>
                                </div>
                            </article>
                            <article className="exercise">
                                <div className="exercise__images">
                                    <img src={pics.chest3} alt="chest"/>
                                    <img src={pics.chest4} alt="chest"/>
                                </div>
                                <div className="exercise__text">
                                    <h2 className="exercise__title">
                                        Wyciskanie sztangielek, skos górny
                                    </h2>
                                    <p className="exercise__desc">
                                        Wykonanie: Ustaw ławkę pod kątem 20-45 stopni.
                                        Połóż się na
                                        niej
                                        tak, aby pośladki i grzbiet przylegał bezpośrednio, stopy zaś wesprzyj
                                        stabilnie na
                                        podłożu.
                                        Złap sztangielki nachwytem i oprzyj się wygodnie całym ciężarem o ławkę.
                                        Kiedy pośladki
                                        i
                                        plecy będą przylegać do ławki weź głęboki wdech i wykonaj ruch podobny do
                                        wyciskania
                                        sztangi
                                        wypychając sztangielki ku górze i jednocześnie robiąc wydech. Następnie
                                        opuść równym
                                        tempem
                                        ciężar w taki sposób, aby łokcie znalazły się nieco poniżej poziomu, na
                                        którym ułożony
                                        jest
                                        tułów. W fazie tej pamiętaj o kolejnym wdechu. Łokcie w trakcie całego
                                        ćwiczenia powinny
                                        być
                                        skierowane na zewnątrz, a nie do środka.
                                    </p>
                                </div>
                            </article>
                            <article className="exercise">
                                <div className="exercise__images">
                                    <img src={pics.chest5} alt="chest"/>
                                    <img src={pics.chest6} alt="chest"/>
                                </div>
                                <div className="exercise__text">
                                    <h2 className="exercise__title">
                                        Rozpiętki na maszynie, siedząc (butterfly)
                                    </h2>
                                    <p className="exercise__desc">
                                        Wykonanie: Bardzo ważne jest zajęcie odpowiedniej
                                        pozycji -
                                        powinieneś odpowiednio uregulować wysokość siedzenia i usadowić się tak, aby
                                        przedramię
                                        i
                                        łokcie przylegały bezpośrednio do poduszek (albo chwycić za drążki
                                        zastępujące
                                        poduszki).
                                        Stopy powinny być osadzone na podłożu, a grzbiet powinien przylegać do
                                        oparcia. Usiądź w
                                        poziomie (cała sylwetka ugięta w pasie ma tworzyć mniej więcej kąt prosty).
                                        Klatka
                                        powinna
                                        być wypięta nieco do przodu. Przyciągając poduszki zrób wydech, a przy
                                        powrocie do
                                        początkowego ułożenia weź wdech. W fazie szczytowej należy przytrzymać przez
                                        chwilę
                                        ciężar,
                                        natomiast ruch powrotny powinien odbywać się płynnie, bez jakiegokolwiek
                                        szarpania, tak
                                        aby
                                        mięśnie pracowały przez cały czas. Zadbaj też o pełne rozciągnięcie mięśni w
                                        fazie
                                        negatywnej. Łokcie w trakcie całego ćwiczenia powinny być oddalone od
                                        tułowia.
                                    </p>
                                </div>
                            </article>
                        </section>
                        <section className="second-exercise">
                            <article className="exercise">
                                <div className="exercise__images">
                                    <img src={pics.back1} alt="chest"/>
                                    <img src={pics.back2} alt="chest"/>
                                </div>
                                <div className="exercise__text">
                                    <h2 className="exercise__title">
                                        Wiosłowanie sztangą
                                    </h2>
                                    <p className="exercise__desc">
                                        Wykonanie: Podejdź do sztangi i rozstaw stopy na
                                        szerokość
                                        barków.
                                        Pochyl tułów zachowując naturalną krzywiznę kręgosłupa, a następnie złap
                                        gryf na
                                        szerokości
                                        barków (więcej w uwagach) nachwytem bądź podchwytem (więcej w uwagach). Weź
                                        wdech, patrz
                                        przed siebie i rozpocznij ruch wiosłowania. W momencie dotknięcia gryfem
                                        brzucha lub
                                        klatki
                                        (więcej w uwagach) zrób wydech i zacznij powoli opuszczać sztangę, aż do
                                        momentu pełnego
                                        rozciągnięcia mięśni.
                                    </p>
                                </div>
                            </article>
                            <article className="exercise">
                                <div className="exercise__images">
                                    <img src={pics.back3} alt="chest"/>
                                    <img src={pics.back4} alt="chest"/>
                                </div>
                                <div className="exercise__text">
                                    <h2 className="exercise__title">
                                        Wiosłowanie końcem sztangi
                                    </h2>
                                    <p className="exercise__desc">
                                        Wykonanie: Stań w rozkroku nad sztangą, ugnij
                                        kolana i złap
                                        uchwyt
                                        sztangi zachowując naturalną krzywiznę kręgosłupa. Weź wdech i patrząc przed
                                        siebie
                                        zacznij
                                        ruch wiosłowania. W momencie dotknięcia sztangą brzucha ściągnij łopatki i
                                        zrób wydech.
                                        Powoli kontrolując ciężar zacznij opuszczać sztangę, aż do momentu
                                        maksymalnego
                                        rozciągnięcia mięśni. Podczas wykonywania ćwiczenia trzymaj plecy prosto i
                                        staraj się
                                        nie
                                        kołysać tułowiem.
                                    </p>
                                </div>
                            </article>
                            <article className="exercise">
                                <div className="exercise__images">
                                    <img src={pics.back5} alt="chest"/>
                                    <img src={pics.back6} alt="chest"/>
                                </div>
                                <div className="exercise__text">
                                    <h2 className="exercise__title">
                                        Wiosłowanie na wyciągu dolnym
                                    </h2>
                                    <p className="exercise__desc">
                                        Wykonanie: Usiądź na siedzisku maszyny i zaprzyj
                                        nogi o punkt
                                        podparcia. Chwyć gryf, weź wdech i zacznij ruch wiosłowania. Plecy trzymaj
                                        cały czas
                                        prosto.
                                        W momencie dotknięcia gryfem brzucha wypnij klatkę do przodu i ściągnij
                                        łopatki, a
                                        następnie
                                        zrób wydech i wróć kontrolując ciężar do pozycji wyjściowej.
                                    </p>
                                </div>
                            </article>
                        </section>
                        <section className="third-exercise">
                            <article className="exercise">
                                <div className="exercise__images">
                                    <img src={pics.legs1} alt="chest"/>
                                    <img src={pics.legs2} alt="chest"/>
                                </div>
                                <div className="exercise__text">
                                    <h2 className="exercise__title">
                                        Wykroki ze sztangielkami
                                    </h2>
                                    <p className="exercise__desc">
                                        Wykonanie: Podnieś sztangielki z podłoża. Pozycja
                                        startowa i
                                        wykonanie ćwiczenia podobnie jak podczas wykroków ze sztangą, czyli klatka
                                        wypięta, a
                                        łopatki ściągnięte. Podczas całego ćwiczenia zachowuj naturalną krzywiznę
                                        kręgosłupa.
                                        Weź
                                        wdech i jedną z nóg wykonaj krok do przodu. Następnie nogą wykroczną wykonaj
                                        przysiad w
                                        taki
                                        sposób, aby noga ugięła się pod kątem 90 stopni. Kolano nogi niećwiczonej
                                        powinno prawie
                                        dotykać podłoża, a jej stopa dotyka podłoża jedynie palcami. Stopa nogi
                                        wykrocznej
                                        całkowicie przylega do podłoża. Powróć do pozycji wyjściowej wypychając
                                        ciężar przez
                                        odepchnięcie od podłoża (głównie przez pięty) i robiąc jednocześnie wydech.
                                        Powtórz
                                        zaczynając tym razem od innej nogi.
                                    </p>
                                </div>
                            </article>
                            <article className="exercise">
                                <div className="exercise__images">
                                    <img src={pics.legs3} alt="chest"/>
                                    <img src={pics.legs4} alt="chest"/>
                                </div>
                                <div className="exercise__text">
                                    <h2 className="exercise__title">
                                        Przysiad ze sztangą na barkach
                                    </h2>
                                    <p className="exercise__desc">
                                        Wykonanie: Podejdź do stojaków, połóż ręce na
                                        gryfie, a
                                        następnie
                                        podejdź po sztangę i ułóż gryf na barkach szerzej w uwagach). Wypnij klatkę
                                        do przodu,
                                        ściągnij łopatki i patrz przed siebie lub lekko w górę. Zdejmij sztangę ze
                                        stojaków i
                                        wykonaj dwa, trzy kroki w tył. Stopy rozstaw niewiele szerzej niż szerokość
                                        barków, a
                                        palce
                                        skieruj lekko na zewnątrz (stopy powinny cały czas przylegać do podłoża).
                                        Weź głęboki
                                        wdech
                                        i zacznij ruch w dół, zaczynając od przesunięcia bioder do tyłu (kolana nie
                                        powinny być
                                        wypychane do przodu, nie dalej niż końce palców stóp - szerzej o tym w
                                        uwagach). Wykonuj
                                        go
                                        aż do osiągnięcia kąta prostego (szerzej o głębokości przysiadu w uwagach).
                                        Ruch
                                        pozytywny
                                        zacznij od przesunięcia głowy do tyłu. Podnoś się do góry jednocześnie
                                        wypychając biodra
                                        do
                                        przodu i robiąc wydech, aż do pozycji wyjściowej. Podczas całego ćwiczenia
                                        zachowuj
                                        naturalną krzywiznę kręgosłupa (unikaj tzw. kociego grzbietu i okrągłych
                                        pleców).
                                    </p>
                                </div>
                            </article>
                            <article className="exercise">
                                <div className="exercise__images">
                                    <img src={pics.legs5} alt="chest"/>
                                    <img src={pics.legs6} alt="chest"/>
                                </div>
                                <div className="exercise__text">
                                    <h2 className="exercise__title">
                                        Wypychanie nóg na suwnicy
                                    </h2>
                                    <p className="exercise__desc">
                                        Wykonanie: Usiądź w siedzisku maszyny. Połóż stopy
                                        na
                                        platformie
                                        (powinny w całości do niej przylegać) mniej więcej na szerokość barków
                                        (szerzej o tym w
                                        uwagach). Weź wdech, zwolnij blokadę ciężaru i rozpocznij wykonywanie
                                        ćwiczenia. W
                                        momencie,
                                        gdy nogi ugną się w kolanach pod kątem ok. 90 stopni zacznij wypychanie
                                        ciężaru,
                                        jednocześnie robiąc wydech.
                                    </p>
                                </div>
                            </article>
                        </section>
                        <form className="plan-form container" onSubmit={handleSubmit(onSubmit)}>
                            <div className="select-box">
                                <label>Wybierz ćwiczenie na klatkę piersiową:</label>
                                <select {...register("chest", {required: true})}>
                                    <option value="chest1">
                                        Wyciskanie sztangi na ławce poziomej leżąc
                                    </option>
                                    <option value="chest2">
                                        Wyciskanie sztangielek, skos górny
                                    </option>
                                    <option value="chest3">
                                        Rozpiętki na maszynie, siedząc (butterfly)
                                    </option>
                                </select>
                            </div>
                            <div className="select-box">
                                <label>Wybierz ćwiczenie na plecy:</label>
                                <select {...register("back", {required: true})}>
                                    <option value="back1">
                                        Wiosłowanie sztangą
                                    </option>
                                    <option value="back2">
                                        Wiosłowanie końcem sztangi
                                    </option>
                                    <option value="back3">
                                        Wiosłowanie na wyciągu dolnym
                                    </option>
                                </select>
                            </div>
                            <div className="select-box">
                                <label>Wybierz ćwiczenie na nogi:</label>
                                <select {...register("legs", {required: true})}>
                                    <option value="legs1">
                                        Wykroki ze sztangielkami
                                    </option>
                                    <option value="legs2">
                                        Przysiad ze sztangą na barkach
                                    </option>
                                    <option value="legs3">
                                        Wypychanie nóg na suwnicy
                                    </option>
                                </select>
                            </div>
                            <input type="submit" onClick={scroll.scrollToTop()}/>
                        </form>
                    </section>
                </>
            )}
        </>
    );
};

export default TrainingPlanUser;
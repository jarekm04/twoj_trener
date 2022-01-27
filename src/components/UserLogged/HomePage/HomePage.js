import React, {useEffect, useState} from 'react';
import './homePage.scss';
import HeaderUser from "../HeaderUser";


const HomePage = () => {
    const API_KEY = `8c4c6e6d4f60cd7b3219021003c5e0fe`;
    const [weatherData, setWeatherData] = useState([{}]);
    const [city, setCity] = useState("");

    const getWeather = (e) => {
        if (e.key === "Enter") {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=${API_KEY}`)
                .then(response => response.json())
                .then(data => {
                    setWeatherData(data);
                    setCity("");
                })
        }
    }

    return (
        <>
            <HeaderUser/>
            <section className="home-user container">
                <h1 className="h-u__title">
                    Witaj {localStorage.getItem('userName')}!
                </h1>
                <p className="h-u__textFirst">
                    Wg <i>runners-world.pl</i> optymalna temperatura do biegania to ok. 10 °C;
                    przy 21 °C warto
                    zwolnić zakładane tempo o parę procent; kiedy przekracza 26 °C – nawet o 12-15%, a gdy dochodzi do
                    30
                    °C, zwolnij o 20%. Jeśli przeszarżujesz z prędkością, druga połowa trasy może być piekłem.
                </p>
                <p className="h-u__textSecond">
                    Co powiesz, żeby dzisiaj trochę pobiegać? Może chociaż mały spacer?
                </p>
                <div className="h-u__question">
                    <input
                        className="weatherInput"
                        type="text"
                        onChange={e => setCity(e.target.value)}
                        value={city}
                        onKeyPress={getWeather}
                        required
                    />
                    <label>Wpisz swoje miasto</label>
                </div>
                {typeof weatherData.main === "undefined" ? (
                    <div className="h-u__checkWeather">
                        <p className="checkWeather__text">
                            Sprawdź temperaturę w swoim mieście!
                        </p>
                    </div>
                ) : (
                    <div className="h-u__weather">
                        <p className="weather__text">
                            {weatherData.name}
                        </p>
                        <p className="weather__text">
                            {Math.round((Math.round(weatherData.main.temp) - 32) * 5 / 9)}ºC
                        </p>
                        <p className="weather__text">
                            {weatherData.weather[0].main}
                        </p>
                    </div>
                )}

                {weatherData.cod === "404" ? (
                    <p className="h-u__weather">
                        Nie znaleziono takiego miasta. Spróbuj ponownie.
                    </p>
                ) : null
                }

            </section>
        </>

    );
};

export default HomePage;
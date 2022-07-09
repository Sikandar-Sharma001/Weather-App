//https://api.openweathermap.org/data/2.5/weather?q=kolkata&appid=d311ce029c290a8d7c9deda0878eec3a

import React, { useEffect, useState } from 'react';
import WeatherCard from './WeatherCard';
import './Temp.css';
const Temp = () => {
    const [searchValue, setSearchvalue] = useState("kolkata");
    const [tempInfo,setTempInfo]= useState({});

    const getWeatherInfo = async () => {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=d311ce029c290a8d7c9deda0878eec3a`

            const res = await fetch(url);
            const data = await res.json();

            const { temp, humidity, pressure } = data.main;
            const { main: weathermood } = data.weather[0];
            const { name } = data;
            const { speed } = data.wind;
            const { country, sunset } = data.sys;

            const newWeatherInfo={
                temp,
                humidity,
                pressure,
                weathermood,
                name,
                speed,
                country,
                sunset
            };

            setTempInfo(newWeatherInfo);

        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getWeatherInfo();
    }, []);

    return (
        <>
            <div className="wrap">
                <div className="search">
                    <input type="search.."
                        placeholder='search..'
                        autoFocus
                        id='search'
                        className='searchTerm'
                        value={searchValue}
                        onChange={(event) => setSearchvalue(event.target.value)}
                    />
                    <button className="searchButton" type='button' onClick={getWeatherInfo}>
                        Search
                    </button>
                </div>
            </div>
            <WeatherCard tempInfo={tempInfo} />
        </>

    );
}
export default Temp;
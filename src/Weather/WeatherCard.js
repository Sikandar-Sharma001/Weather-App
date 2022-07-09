import React, { useEffect, useState } from "react";
import './Temp.css';
const WeatherCard=({tempInfo})=>{
    const [weatherFig,setWeatherFig]=useState("");
    const {
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset
    }=tempInfo;
    let sec=sunset;
    let date=new Date(sec * 1000);
    let timeStr=`${date.getHours()} : ${date.getMinutes()}`;

    useEffect(()=>{
        if(weathermood){
            switch (weathermood) {
                case "Haze":
                    setWeatherFig('wi-day-haze');
                    break;
                case "Clouds":
                    setWeatherFig('wi-day-cloudy');
                    break;
                case "Rain":
                    setWeatherFig('wi-day-rain');
                    break;
                case "Sunny":
                    setWeatherFig('wi-day-sunny');
                    break;
                case "Mist":
                    setWeatherFig('wi-day-fog');
                    break;
                case "Clear":
                    setWeatherFig('wi-day-sunny-overcast');
                    break;
            
                default:
                    setWeatherFig('wi-day-sunny-overcast');
                    break;
            }
        }

    },[weathermood]);
    return(
        <>
        {/* temp card */}
        <article className="widget">
                <div className="weatherIcon">
                    <i className={`wi ${weatherFig}`}></i>
                </div>
                <div className="weatherInfo">
                    <div className="temperature">
                        <span>{temp}&deg;</span>
                    </div>
                    <div className="description">
                        <div className="weatherCondition">{weathermood}</div>
                        <div className="place">{name},{country}</div>
                    </div>
                </div>
                <div className="date">{new Date().toLocaleString()}</div>

                <div className="extra-temp">
                    <div className="temp-info-minmax">
                        <div className="two-sided-section">
                            <p>
                                <i className={"wi wi-sunset"}></i>
                            </p>
                            <p className='extra-info-leftside'>
                                {timeStr} PM <br />
                                Sunset
                            </p>
                        </div>
                        <div className="two-sided-section">
                            <p>
                                <i className={"wi wi-sunrise"}></i>
                            </p>
                            <p className='extra-info-leftside'>
                                {speed} <br />
                                Speed
                            </p>
                        </div>
                    </div>
                    <div className="weather-extra-info">
                        <div className="two-sided-section">
                            <p>
                                <i className={"wi wi-humidity"}></i>
                            </p>
                            <p className='extra-info-leftside'>
                                {humidity} <br />
                                Humidity
                            </p>
                        </div>
                        <div className="two-sided-section">
                            <p>
                                <i className={"wi wi-rain"}></i>
                            </p>
                            <p className='extra-info-leftside'>
                                {pressure} <br />
                                Pressure
                            </p>
                        </div>
                    </div>
                </div>
            </article>
        </>
    );
}
export default WeatherCard;
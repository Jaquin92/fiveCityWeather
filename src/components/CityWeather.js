import React, { Component } from 'react';
//importing axios for my get request
import axios from 'axios';
//will use this array of days to render the appropriate day of the week
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export default class CityWeather extends Component {
    constructor() {
        super()
        this.state = {
            forecast: null,
            city: null
        }
    }
    componentDidMount() {
        axios.get(`http://api.openweathermap.org/data/2.5/forecast?zip=${this.props.match.params.id}&units=imperial&appid=67489deefb53131dd440a9d98e4bd37c`).then(response => {
            this.setState({ forecast: response.data.list, city: response.data.city.name })
            console.log(this.state.city)
        });
    };
    fiveDayForecast() {
        let forecast = this.state.forecast;
        let fiveDay = [];

        if (forecast) {
            for (let i = 0; i < forecast.length; i += 8) {
                fiveDay.push(forecast[i])
            };
            console.log(fiveDay)

            return fiveDay.map((i, index) => {
                return <div className="city-card" key={index} >
                    <h1>{daysOfWeek[new Date(i.dt_txt).getDay()]}</h1>
                    <img src={`http://openweathermap.org/img/w/${i.weather[0].icon}.png`} alt="weather icon" />
                    <span id="temp" > <span>{` Min: ${Math.floor(i.main.temp_min)}°F `}</span> <span>{`Max:${Math.floor(i.main.temp_min)}°F`}</span> </span>
                </div>
            })
        }
    }



    render() {


        return <div className="City-weather" >
            {this.state.city ? <h1 id="City-name" >{this.state.city} Five Day Forecast </h1> : null}
            <div id="Weather-display" >
                {this.fiveDayForecast()}
            </div></div>
    }
}
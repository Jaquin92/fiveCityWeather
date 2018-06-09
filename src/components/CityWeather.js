import React, { Component } from 'react';
//importing axios for my get request
import axios from 'axios';
//will use this array of days to render the appropriate day of the week
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export default class CityWeather extends Component {
    constructor() {
        super()
        this.state = {
            forecast: null
        }
    }
    componentDidMount() {
        axios.get(`http://api.openweathermap.org/data/2.5/forecast?id=${this.props.match.params.id}&units=imperial&appid=67489deefb53131dd440a9d98e4bd37c`).then(response => {
            this.setState({ forecast: response.data.list })
            console.log(this.state.forecast)
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
                    <span>{` Min: ${Math.floor(i.main.temp_min)}°F Max:${Math.floor(i.main.temp_min)}°F`}</span>
                </div>
            })
        }
    }



    render() {


        return <div id="App-body" >
            {this.fiveDayForecast()}
        </div>
    }
}
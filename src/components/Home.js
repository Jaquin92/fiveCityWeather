import React, { Component } from 'react';
//import axios used to make requests to the api
import axios from 'axios';
//import Link from react-router-dom to link to next component
import { Link } from 'react-router-dom';

export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            newYork: null,
            dallas: null,
            la: null,
            boulder: null,
            seattle: null
        }

    }
    //componentDidMount will run whenever this component is rendered and will fetch my data from the api
    componentDidMount() {

        //calling for NYC weather
        axios.get("http://api.openweathermap.org/data/2.5/weather?zip=10022&units=imperial&appid=67489deefb53131dd440a9d98e4bd37c").then(response => {
            this.setState({ newYork: response.data })
        });
        //calling for Dallas weather
        axios.get("http://api.openweathermap.org/data/2.5/weather?zip=75201&units=imperial&appid=67489deefb53131dd440a9d98e4bd37c").then(response => {
            this.setState({ dallas: response.data })
        });

        //calling for LA weather
        axios.get("http://api.openweathermap.org/data/2.5/weather?zip=90018&units=imperial&appid=67489deefb53131dd440a9d98e4bd37c").then(response => {
            this.setState({ la: response.data })
        });

        //calling for Boulder weather
        axios.get("http://api.openweathermap.org/data/2.5/weather?zip=80301&units=imperial&appid=67489deefb53131dd440a9d98e4bd37c").then(response => {
            this.setState({ boulder: response.data })
        });
        //calling for Seatle weather
        axios.get("http://api.openweathermap.org/data/2.5/weather?zip=98101&units=imperial&appid=67489deefb53131dd440a9d98e4bd37c").then(response => {
            this.setState({ seattle: response.data })
        });
    }

    //Methods that render data for each city

    newYork() {
        if (this.state.newYork) {
            return <Link to={`/city/${this.state.newYork.id}`} ><div className="city-card" >
                <h1>{this.state.newYork.name}</h1>
                <img src={`http://openweathermap.org/img/w/${this.state.newYork.weather[0].icon}.png`} alt="New York weather icon" />
                <span>{this.state.newYork.weather[0].description.toUpperCase()}</span>
                <span>{`${Math.floor(this.state.newYork.main.temp)}°F`}</span>
            </div></Link>
        }
    };
    dallas() {
        if (this.state.dallas) {
            return <div className="city-card" >
                <h1>{this.state.dallas.name}</h1>
                <img src={`http://openweathermap.org/img/w/${this.state.dallas.weather[0].icon}.png`} alt="Dallas weather icon" />
                <span>{this.state.dallas.weather[0].description.toUpperCase()}</span>
                <span>{`${Math.floor(this.state.dallas.main.temp)}°F`}</span>
            </div>
        }
    };
    la() {
        if (this.state.la) {
            return <div className="city-card" >
                <h1>{this.state.la.name}</h1>
                <img src={`http://openweathermap.org/img/w/${this.state.la.weather[0].icon}.png`} alt="la weather icon" />
                <span>{this.state.la.weather[0].description.toUpperCase()}</span>
                <span>{`${Math.floor(this.state.la.main.temp)}°F`}</span>
            </div>
        }
    };
    boulder() {
        if (this.state.boulder) {
            return <div className="city-card" >
                <h1>{this.state.boulder.name}</h1>
                <img src={`http://openweathermap.org/img/w/${this.state.boulder.weather[0].icon}.png`} alt="boulder weather icon" />
                <span>{this.state.boulder.weather[0].description.toUpperCase()}</span>
                <span>{`${Math.floor(this.state.boulder.main.temp)}°F`}</span>
            </div>
        }
    };
    seattle() {
        if (this.state.seattle) {
            return <div className="city-card" >
                <h1>{this.state.seattle.name}</h1>
                <img src={`http://openweathermap.org/img/w/${this.state.seattle.weather[0].icon}.png`} alt="seattle weather icon" />
                <span>{this.state.seattle.weather[0].description.toUpperCase()}</span>
                <span>{`${Math.floor(this.state.seattle.main.temp)}°F`}</span>
            </div>
        }
    };
    render() {
        return <div id="App-body" >
            {this.newYork()}
            {this.dallas()}
            {this.la()}
            {this.boulder()}
            {this.seattle()}
        </div>
    }
}
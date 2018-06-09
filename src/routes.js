import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import CityWeather from './components/CityWeather';

export default (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/city/:id" component={CityWeather} />
    </Switch>
)
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './App.css';

//import my routes
import routes from './routes';


class App extends Component {
  constructor() {
    super()
    this.state = {
      zipcode: Number
    }
  };


  refresh() {
    this.setState({ zipcode: "" })
    window.location.reload()
  }





  render() {

    return (

      <div id="App-body" >
        <div>
          <Link to="/"> <h1>Five City Weather!</h1>  </Link>
          {this.state.zipcode.length === 5 ? <Link to={`/city/${this.state.zipcode}`} > <button onClick={() => this.refresh()}  >Search</button> </Link> : <button>Search</button>}

          <input value={this.state.zipcode} onChange={(e) => this.setState({ zipcode: e.target.value })} placeholder="Enter Zip Code" type="number" />
        </div>

        {routes}</div>



    );
  }
}

export default App;

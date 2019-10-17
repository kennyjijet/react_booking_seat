import React, { Component } from 'react';
import Booking from './Components/Booking';
import Passenger from './Components/Passenger';

import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";

class App extends Component {
  constructor(props){
    super();
    this.state  = {}
  }
  //<Booking seats={this.state.seats} reservations={this.state.Booking} />
  /*

  /*<Router>

          </Router>
          
          <div className="App">
            <Router>
              <Booking seats={this.state.seats} reservations={this.state.Booking} />
              <Route path="/passenger" component={Passenger} />
            </Router>
          </div>
          */
          /*
          <Router>
            
            <Route path="/about" component={About} />
            <Route path="/topics" component={Topics} />
            <Route path="/gatherInformation" component={gatherInformation} />
            <Route component={Notfound} />
        </Router>
        */

  render() {
    let seats = this.state.seats;
    let count = 0;
        return (
          <Router>
            <Route exact path="/" component={Booking} />
            <Route path="/passenger" component={Passenger} />
          </Router>
        );
    }
}
export default App;

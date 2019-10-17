import React, { Component } from 'react';
import '../App.css';
import '../Passenger.css'
import {
  BrowserRouter as Router,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";


class Passenger extends Component {
    constructor() {
    super();
    	
    }
    render() {
    	//alert()
        //alert(this.props.location.testValue)
        return (

        	<div className="container">
        		<div className="block">
        			<div className="profile">
        			</div>
        		</div>
        		<div className="block">
        		</div>
        		<div className="block">
        		</div>
        		<div className="block">
        		</div>
        		
        	</div>
        	)
    }
}


export default Passenger;



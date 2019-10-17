import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import '../App.css';
import axios from 'axios';

class Booking extends Component {
    constructor() {
    super();
      this.state = {
      seat: [

        'Front1','Front2','Front3',
        'Middle1','Middle2','Middle3',
        'Back1','Back2','Back3'
      
      ],

      seatAvailable: [
        'Front1','Front2','Front3',
        'Middle1','Middle2','Middle3',
        'Back1','Back2','Back3'
      ],
      attributes:{
        color:[
          "","green","",
          "red","red","green",
          "green","red","green"
        ],

        toggle:[
          false,false,false,
          false,false,false,
          false,false,false
        ],
        visibility:
        [
          "hidden","visible","hidden",
          "visible","visible","visible",
          "visible","visible","visible"
        ]
      },

      seatReserved: []
    }
  }
  
  onClickData(seat) {
    if(this.state.seatReserved.indexOf(seat) > -1 ) {
      this.setState({
        seatAvailable: this.state.seatAvailable.concat(seat),
        seatReserved: this.state.seatReserved.filter(res => res != seat)
      })
    } else {
      this.setState({
        seatReserved: this.state.seatReserved.concat(seat),
        seatAvailable: this.state.seatAvailable.filter(res => res != seat)
      })
    }
  }
  
  render() {
    return (
      <div>
        <DrawLOPA 
          seat = { this.state.seat }
          available = { this.state.seatAvailable }
          reserved = { this.state.seatReserved }
          attributes = {this.state.attributes} 
          onClickData = { this.onClickData.bind(this) }
          />
      </div>
    )
  }
}

class DrawLOPA extends React.Component {

  render() {
    /*var style = {
            width:150+"px"
        }
    */

    var styles = []
    var items = []
    /*
              this.props.seat.map( row =>
                  <td 
                    className={this.props.reserved.indexOf(row) > -1? 'reserved': 'available'}
                    style={style}
                    key={row} onClick = {e => this.onClickSeat(row)}>{row} </td>

                    )
                    */
    for (const [index, value] of this.props.seat.entries()) {
        //style.visibility = this.props.visibility[index]
        styles[index] = {
          width:150+"px",  
          visibility: this.props.attributes.visibility[index],
          backgroundColor: this.props.attributes.color[index]
        }
        
        items.push(
          <Link to={{ pathname: "/passenger", testValue: value}}>
            <td 
              className={this.props.reserved.indexOf(value) > -1? 'reserved': 'available'}
              style={styles[index]}
              //key={value} onClick = {() => this.onClickSeat(event, index, value)}>
              //key={value} onClick = {(event) => this.onClickSeat(event, index, value)}>
              key={value} onClick = {(event, index, value) => this.onClickSeat(event, index, value)}>
              <div>{value}</div> 
              <div>{this.props.attributes.toggle[index] ? 
                "Clicked"
              : 
                "NoClick"
              }</div> 
              </td>
            </Link>
          )
    }

    return (
       <div className="container">
        <h2></h2>
        <table className="grid">
          <tbody>
              <tr>
                { 
                  items
                }
              </tr>
          </tbody>
        </table>
        <AvailableList available = { this.props.available } />
        <BookedList reserved = { this.props.booked } />
       </div>

    )
  }
  
  onClickSeat(event, index, value) {
    //event.preventDefault();
    //alert(event)
    //this.props.onClickData(value);
    //this.props.attributes.toggle[index] ?  this.props.attributes.toggle[index] = false : this.props.attributes.toggle[index] = true
   }
}

class BookedList extends React.Component {
  render() {
    return(
      <div className="right">

      </div>
    )
  }
}

class AvailableList extends React.Component {
  render() {
    const seatCount = this.props.available.length;
    return(
      <div className="left">
        <h4>Available Seats: ({seatCount == 0? 'No seats available' : seatCount})</h4>
        <ul>
          {this.props.available.map( res => <li key={res} >{res}</li> )}
        </ul>
      </div>
    )
  }
}

export default Booking;















/*

class Tiles extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false,
            content : []
        };
    this.onClicked = this.onClicked.bind(this);

componentDidMount() {
    let url = '';
    let request = new Request(url, {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    });
    fetch(request)
    .then(response => response.json())
    .then(data => {
        this.setState({
            content : data
        })
    } );

}

onClicked() {
    this.setState({
        clicked: !this.state.clicked
        });
}

render() {
    let tileClass = 'tile-content';
    if (this.state.clicked) {
        tileClass = tileClass + ' active'
    }
    return (
    <div className = 'main-content'>
    {this.state.pages.map((item) => 
        <section key = {item.id} className = {tileClass} onClick = {this.onClicked}>
        <h4>{item.description}</h4>
        </section>)}
        <br />
    </div>
    )
 }

class App extends React.Component {
    render() {
       return (
        <div>
            <Tiles />
        </div>
       )
 }
}

ReactDOM.render(
     <App />,
    document.getElementById('content-app'))


*/

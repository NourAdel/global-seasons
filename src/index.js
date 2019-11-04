import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { lat: null };
    window.navigator.geolocation.getCurrentPosition(
        posision => {this.setState({lat: posision.coords.latitude});},
        err => console.log(err)
      );
  
  }
  render() {
 
    return <div> latitude: {this.state.lat}</div>;
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));

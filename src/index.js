import React, { Component } from "react";
import ReactDOM from "react-dom"; 
import SeasonDisplay from './SeasonDisplay'

class App extends React.Component {
  state = { lat: null, errorMessage: "" };

  // runs when the components first renders
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      posision => {
        this.setState({ lat: posision.coords.latitude });
      },
      err => {
        this.setState({ errorMessage: err.message });
      }
    );
  }
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (this.state.lat && !this.state.errorMessage) {
      return <SeasonDisplay lat={this.state.lat}/>;
    }

    return <div>loading</div>;
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));

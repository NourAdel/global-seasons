import React from "react";
import ReactDOM from "react-dom";

const App = () => {

 window.navigator.geolocation.getCurrentPosition(
     posision => console.log(posision),
     (err) => console.log(err)
 )
  return <div>hi!</div>;
};

ReactDOM.render(<App />, document.querySelector("#root"));

import React, {Component} from "react";
import ReactDOM from "react-dom";

class App extends React.Component{
    render(){
        window.navigator.geolocation.getCurrentPosition(
            posision => console.log(posision),
            (err) => console.log(err)
        ) 
           
        return <div> hiii</div>
   } 
}
ReactDOM.render(<App />, document.querySelector("#root"));

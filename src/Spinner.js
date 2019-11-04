import React from "react";

const Spinner = (props) => {
  return (
    <div class="ui active dimmer">
      <div class="ui text loader">{props.messege}</div>
    </div>
  );

};


Spinner.defaultProps = {
    messege: "loading..."
};
export default Spinner;

  import React, { Component } from "react";
  import "./Button.css"

  class Button extends Component {
      render(){
return(
    <div className="btn-container bg-primary">
        <button className="mybtn">Import </button>
        <button className="btn btn-outline-danger">New</button>
        
    </div>
)
      }
  }
  export default Button;
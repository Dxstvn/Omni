import React from "react";
import './InfoIcon-component.css'

function InfoIcon(props) {
    const { vector, vector2, vector3 } = props;
  
    return (
      <div className="home">
        <div className="i-phone-x--rk-default"></div>
        <div className="auto-flex">
          <img className="vector" src={vector} />
          <div className="overlap-group">
            <img className="vector-1" src={vector2} />
            <img className="vector-2" src={vector3} />
          </div>
        </div>
      </div>
    );
  }
function Info() {
  return (
    <InfoIcon
      vector="https://anima-uploads.s3.amazonaws.com/projects/6003bda18e67c2318c5e088e/releases/6003bedd1a17443328fd7f8e/img/vector-9@2x.svg"
      vector2="https://anima-uploads.s3.amazonaws.com/projects/6003bda18e67c2318c5e088e/releases/6003bedd1a17443328fd7f8e/img/vector-7@2x.svg"
      vector3="https://anima-uploads.s3.amazonaws.com/projects/6003bda18e67c2318c5e088e/releases/6003bedd1a17443328fd7f8e/img/vector-8@2x.svg"
    />
  );
}




export default Info;

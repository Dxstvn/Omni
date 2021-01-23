import React from "react";
import './InfoIcon-component.css'
import image from '../assets/info_icon.png';

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
    <img className="icon" src={image}/>
  );
}




export default Info;

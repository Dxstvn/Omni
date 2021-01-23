import React from "react";
import './NotificationBar.css';
import phoneBezel from '../assets/phone_bezel.png';
import phoneCamera from '../assets/phone_camera.png';

const iPhoneXorNewerData = {
  x941: "https://anima-uploads.s3.amazonaws.com/projects/6003bda18e67c2318c5e088e/releases/6003bedd1a17443328fd7f8e/img/9-41@2x.svg",
  notch: "https://anima-uploads.s3.amazonaws.com/projects/6003bda18e67c2318c5e088e/releases/6003bedd1a17443328fd7f8e/img/notch@2x.svg",
  mobileSignal: "https://anima-uploads.s3.amazonaws.com/projects/6003bda18e67c2318c5e088e/releases/6003bedd1a17443328fd7f8e/img/mobile-signal@2x.svg",
  wifi: "https://anima-uploads.s3.amazonaws.com/projects/6003bda18e67c2318c5e088e/releases/6003bedd1a17443328fd7f8e/img/wifi@2x.svg",
  overlapGroup1: "https://anima-uploads.s3.amazonaws.com/projects/6003bda18e67c2318c5e088e/releases/6003bedd1a17443328fd7f8e/img/rectangle@2x.svg",
  rectangle: "https://anima-uploads.s3.amazonaws.com/projects/6003bda18e67c2318c5e088e/releases/6003bedd1a17443328fd7f8e/img/rectangle-1@2x.svg",
  combinedShape: "https://anima-uploads.s3.amazonaws.com/projects/6003bda18e67c2318c5e088e/releases/6003bedd1a17443328fd7f8e/img/combined-shape@2x.svg",
};

function IPhoneXorNewer(props) {
  const { x941, notch, mobileSignal, wifi, overlapGroup1, rectangle, combinedShape } = props;

  return (
    <div className="i-phone-x-or-newer">
      <img className="x941" src={x941} alt=""/>
      <div className="overlap-group">
        <img className="notch" src={notch} alt=""/>
      </div>
      <div className="bar-icons row">
          <img className="signal-bars" src={mobileSignal} alt=""/>
          <img className="wifi" src={wifi} alt=""/>
          <div className="battery row">
              <div className="battery-box" style={{ backgroundImage: `url(${overlapGroup1})` }}>
                <img className="battery-fill" src={rectangle} alt=""/>
              </div>
              <img className="battery-stub" src={combinedShape} alt=""/>
          </div>
      </div>
    </div>
  );
}

export default function NotificationBar() {
  return (
      <div className='phone'>
          <div className='dark-screen'></div>
          <img className='phone-bezel' src={phoneBezel} />
          <img className='phone-camera' src={phoneCamera} />
          <div className="NotificationBar">
              <IPhoneXorNewer
                  x941={iPhoneXorNewerData.x941}
                  notch={iPhoneXorNewerData.notch}
                  mobileSignal={iPhoneXorNewerData.mobileSignal}
                  wifi={iPhoneXorNewerData.wifi}
                  overlapGroup1={iPhoneXorNewerData.overlapGroup1}
                  rectangle={iPhoneXorNewerData.rectangle}
                  combinedShape={iPhoneXorNewerData.combinedShape}
              />
          </div>
      </div>
  );
}
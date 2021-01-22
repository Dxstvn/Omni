import React from "react";
import './OtherPage.css';

function func() {
  return (
    <IPhoneXorNewer
      x941="https://anima-uploads.s3.amazonaws.com/projects/6003bda18e67c2318c5e088e/releases/6003bedd1a17443328fd7f8e/img/9-41@2x.svg"
      notch="https://anima-uploads.s3.amazonaws.com/projects/6003bda18e67c2318c5e088e/releases/6003bedd1a17443328fd7f8e/img/notch@2x.svg"
      mobileSignal="https://anima-uploads.s3.amazonaws.com/projects/6003bda18e67c2318c5e088e/releases/6003bedd1a17443328fd7f8e/img/mobile-signal@2x.svg"
      wifi="https://anima-uploads.s3.amazonaws.com/projects/6003bda18e67c2318c5e088e/releases/6003bedd1a17443328fd7f8e/img/wifi@2x.svg"
      overlapGroup1="https://anima-uploads.s3.amazonaws.com/projects/6003bda18e67c2318c5e088e/releases/6003bedd1a17443328fd7f8e/img/rectangle@2x.svg"
      rectangle="https://anima-uploads.s3.amazonaws.com/projects/6003bda18e67c2318c5e088e/releases/6003bedd1a17443328fd7f8e/img/rectangle-1@2x.svg"
      combinedShape="https://anima-uploads.s3.amazonaws.com/projects/6003bda18e67c2318c5e088e/releases/6003bedd1a17443328fd7f8e/img/combined-shape@2x.svg"
    />
  );
}




function IPhoneXorNewer(props) {
  const { x941, notch, mobileSignal, wifi, overlapGroup1, rectangle, combinedShape } = props;

  return (
    <div className="background">
    <div className="i-phone-x-or-newer">
      <img className="x941" src={x941} alt=""/>
      <div className="overlap-group">
        <img className="notch" src={notch} alt=""/>
        <img className="mobile-signal" src={mobileSignal} alt=""/>
      </div>
      <img className="wifi" src={wifi} alt=""/>
      <div className="overlap-group1" style={{ backgroundImage: `url(${overlapGroup1})` }}>
        <img className="rectangle" src={rectangle} alt=""/>
      </div>
      <img className="combined-shape" src={combinedShape} alt=""/>
    </div>
    </div>
  );
}
export default func;
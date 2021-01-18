import React from "react";
import './header-component.css';

const iPhoneXorNewerData = {
  x941: "https://anima-uploads.s3.amazonaws.com/projects/6003bda18e67c2318c5e088e/releases/6003bedd1a17443328fd7f8e/img/9-41@2x.svg",
  notch: "https://anima-uploads.s3.amazonaws.com/projects/6003bda18e67c2318c5e088e/releases/6003bedd1a17443328fd7f8e/img/notch@2x.svg",
  mobileSignal: "https://anima-uploads.s3.amazonaws.com/projects/6003bda18e67c2318c5e088e/releases/6003bedd1a17443328fd7f8e/img/mobile-signal@2x.svg",
  wifi: "https://anima-uploads.s3.amazonaws.com/projects/6003bda18e67c2318c5e088e/releases/6003bedd1a17443328fd7f8e/img/wifi@2x.svg",
  overlapGroup1: "https://anima-uploads.s3.amazonaws.com/projects/6003bda18e67c2318c5e088e/releases/6003bedd1a17443328fd7f8e/img/rectangle@2x.svg",
  rectangle: "https://anima-uploads.s3.amazonaws.com/projects/6003bda18e67c2318c5e088e/releases/6003bedd1a17443328fd7f8e/img/rectangle-1@2x.svg",
  combinedShape: "https://anima-uploads.s3.amazonaws.com/projects/6003bda18e67c2318c5e088e/releases/6003bedd1a17443328fd7f8e/img/combined-shape@2x.svg",
};

function LightBackground(props) {
  const { vector } = props;
  
  return <img className="light-background-vector" src={vector} alt="" />;
}
const LightBackgroundData = {
    vector: "https://anima-uploads.s3.amazonaws.com/projects/6003bda18e67c2318c5e088e/releases/6003bedd1a17443328fd7f8e/img/vector-69@2x.svg",
};

function IPhoneXorNewer(props) {
  const { x941, notch, mobileSignal, wifi, overlapGroup1, rectangle, combinedShape } = props;

  return (
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
  );
}


function SearchVector(props) {
  const { vector } = props;
  return <img className="search-vector" src={vector} alt=""/>;
}

const SearchVectorData = {
    vector: "https://anima-uploads.s3.amazonaws.com/projects/6003bda18e67c2318c5e088e/releases/6003bedd1a17443328fd7f8e/img/vector-72@2x.svg",
};


  
function Header() {
  return (<>
  <IPhoneXorNewer
    x941={iPhoneXorNewerData.x941}
    notch={iPhoneXorNewerData.notch}
    mobileSignal={iPhoneXorNewerData.mobileSignal}
    wifi={iPhoneXorNewerData.wifi}
    overlapGroup1={iPhoneXorNewerData.overlapGroup1}
    rectangle={iPhoneXorNewerData.rectangle}
    combinedShape={iPhoneXorNewerData.combinedShape}
  />
  <SearchVector vector={SearchVectorData.vector} />
  {/* Omni Title */}
  <svg className="omni-group" width="56" height="17" viewBox="0 0 56 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.0598 0H16.9698L19.1098 6.74L19.8498 9.3H19.9498L20.6698 6.74L22.8198 0H25.7398V16.5H23.4298V9.11C23.4298 7.44 23.6998 4.31 23.8198 2.81H23.7398L22.7398 6.34L20.6398 12.11H19.0598L16.9998 6.27L15.9998 2.74H15.9198C16.0798 4.24 16.3098 7.37 16.3098 9.04V16.48H14.0498L14.0598 0Z" fill="white"/>
    <path d="M29.4199 0H32.1299L36.9199 9.81L38.4599 13.28H38.5199C38.4199 11.62 38.1799 9.64 38.1799 7.85V0H40.5899V16.5H37.9199L33.1099 6.69L31.5699 3.22H31.4999C31.5999 4.94 31.8399 6.82 31.8399 8.59V16.5H29.4199V0Z" fill="white"/>
    <path d="M44.8398 14.37H48.8398V2.11H44.8398V0H55.4398V2.11H51.4398V14.37H55.4398V16.5H44.8398V14.37Z" fill="white"/>
    <path d="M10.19 0H0V16.5H10.19V0Z" fill="white"/>
  </svg>
  {/* Person Button */}
  <svg className="person-vector" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.5203 15.8201L15.0303 16.2201C14.8636 16.3534 14.6936 16.4734 14.5203 16.5801C13.8832 16.9875 13.1889 17.2976 12.4603 17.5001C12.0248 17.6208 11.5799 17.7045 11.1303 17.7501C10.9003 17.7501 10.6503 17.7501 10.4203 17.7501C10.1903 17.7501 9.92028 17.7501 9.69028 17.7501C9.46028 17.7501 9.21027 17.6901 8.96027 17.6401C7.58931 17.3782 6.31647 16.7452 5.28027 15.8101C5.35954 14.8517 5.6971 13.9327 6.25705 13.1509C6.817 12.3691 7.57841 11.7536 8.46027 11.3701C8.82474 11.2143 9.20799 11.1068 9.60028 11.0501C8.93728 10.8563 8.3664 10.43 7.9924 9.84928C7.6184 9.26857 7.46635 8.57245 7.56421 7.88869C7.66207 7.20493 8.00325 6.5794 8.52512 6.1269C9.04699 5.6744 9.71455 5.42529 10.4053 5.42529C11.096 5.42529 11.7636 5.6744 12.2854 6.1269C12.8073 6.5794 13.1485 7.20493 13.2463 7.88869C13.3442 8.57245 13.1922 9.26857 12.8182 9.84928C12.4442 10.43 11.8733 10.8563 11.2103 11.0501C11.6052 11.1094 11.9914 11.2169 12.3603 11.3701C13.2318 11.741 13.9831 12.3469 14.5303 13.1201C15.1085 13.9086 15.4517 14.8447 15.5203 15.8201Z" fill="white"/>
    <path d="M10.4202 0.50001C8.50827 0.486141 6.63529 1.04055 5.03895 2.09288C3.44262 3.14521 2.19489 4.64804 1.45405 6.41066C0.713212 8.17329 0.512663 10.1163 0.877879 11.993C1.24309 13.8698 2.1576 15.5958 3.50535 16.952C4.8531 18.3082 6.57336 19.2335 8.44782 19.6104C10.3223 19.9873 12.2665 19.7989 14.0337 19.0691C15.8009 18.3393 17.3115 17.1009 18.3738 15.5112C19.436 13.9215 20.0021 12.052 20.0002 10.14C19.995 7.59528 18.9859 5.15539 17.1921 3.35038C15.3984 1.54538 12.9648 0.521079 10.4202 0.50001ZM15.5202 15.83L15.0302 16.22C14.8635 16.3533 14.6935 16.4733 14.5202 16.58C13.8831 16.9875 13.1888 17.2975 12.4602 17.5C12.0265 17.6284 11.5809 17.7122 11.1302 17.75C10.8938 17.7649 10.6566 17.7649 10.4202 17.75C10.1771 17.7655 9.93328 17.7655 9.6902 17.75C9.44415 17.7344 9.19989 17.6976 8.96018 17.64C7.53662 17.3668 6.22018 16.6942 5.16453 15.7009C4.10888 14.7075 3.35759 13.4343 2.99842 12.03C2.63926 10.6256 2.68701 9.14809 3.13612 7.76987C3.58522 6.39166 4.41717 5.16964 5.53477 4.24652C6.65236 3.3234 8.0095 2.73726 9.44773 2.55655C10.886 2.37584 12.3459 2.60801 13.6572 3.22596C14.9684 3.8439 16.0768 4.82212 16.8529 6.0464C17.629 7.27067 18.0408 8.69046 18.0402 10.14C18.038 11.2114 17.8128 12.2706 17.3789 13.2502C16.9451 14.2298 16.3121 15.1084 15.5202 15.83Z" fill="white"/>
  </svg>

  <LightBackground vector={LightBackgroundData.vector} />
  </>);
}

export default Header;

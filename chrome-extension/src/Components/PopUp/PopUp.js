import React from "react";
import "./Styles/PopUp.css";
import closeCircle from "./Images/close-circle.png";
import copy from "./Images/copy.png";
import icon1 from "./Images/iCON 7 1 (2).png";
import monitor from "./Images/monitor.png";
import setting from "./Images/setting-2.png";
import Toggle from "./Images/_Toggle base.png";
import RecordingButtons from "../Recording/Recording";
// import Recording from '../Recording/Recording';

const PopUp = () => {

  return (
    <div className="PopUp">
      <div className="RecordDiv">
        <div className="icon1P">
          <img className="icon1" src={icon1} alt="icon1" />
          <p>HelpMeOut</p>
        </div>
        <div>
          <img className="setting" src={setting} alt="setting" />
          <img className="closeCircle" src={closeCircle} alt="closeCircle" />
        </div>
      </div>
      <p className="RecordeText">
        This extension helps you record and share help videos with ease.
      </p>
      <div className="monCopy">
        <div className="monitorDiv">
          <img className="monitor" src={monitor} alt="monitor" />
          <p>Full screen</p>
        </div>
        <div className="CopyDiv">
          <img className="copy" src={copy} alt="copy" />
          <p>Current Tab</p>
        </div>
      </div>
      <div className="CameraDiv">
        <p>Camera</p>
        <img className="Toggle" src={Toggle} alt="Toggle" />
      </div>
      <div className="AudioDiv">
        <p>Audio</p>
        <img className="Toggle" src={Toggle} alt="Toggle" />
      </div>
      <RecordingButtons />
    </div>
  );
};

export default PopUp;

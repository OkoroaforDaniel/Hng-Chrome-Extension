import React, { useEffect } from "react";
import "./styles/Recording.css";
import { ReactMediaRecorder } from "react-media-recorder";
import axios from "axios";

export const uploadVideo = async (url) => {
  try {
    const response = await fetch(url);
    const blob = await response.blob();

    let data = new FormData();
    data.append("file", blob, "file.mp4");

    const { data: res } = await axios({
      headers: {
        "Content-Type": "multipart/form-data",
      },
      method: "post",
      url: "https://hng-be-t5.onrender.com/upload",
      data,
    });
    console.log(res.hostFileUrl);
  } catch (error) {
    console.log("couldn't upload file");
    console.log(error);
  }
};

const RecordingButtons = () => {
  return (
    <ReactMediaRecorder
      screen
      blobPropertyBag={{ type: "video/mp4" }}
      render={({ status, startRecording, stopRecording, mediaBlobUrl }) => {
        return (
          <div>
            <button className="StartButton" onClick={startRecording}>
              Start Recording
            </button>

            <button
              className="StartButton"
              onClick={async () => {
                stopRecording();
              }}
            >
              Stop Recording
            </button>

            {mediaBlobUrl !== undefined && (
              <video
                width={200}
                height={200}
                src={mediaBlobUrl}
                controls={true}
                autoPlay={false}
                loop={false}
                onLoad={uploadVideo(mediaBlobUrl)}
              >
                <source src={mediaBlobUrl} type="video/mp4" />
              </video>
            )}
          </div>
        );
      }}
    />
  );
};

export default RecordingButtons;

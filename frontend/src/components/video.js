import React, { forwardRef, useRef, useImperativeHandle } from "react";
import VideoTikTok from "./videos/video-1.mp4";

function Video(props, ref) {
  const videoRef = useRef();
  useImperativeHandle(ref, () => ({
    play() {
      videoRef.current.play();
    },
    pause() {
      videoRef.current.pause();
    },
  }));
  return (
    <div>
      <video width={300} src={VideoTikTok} ref={videoRef} />
    </div>
  );
}
export default forwardRef(Video);

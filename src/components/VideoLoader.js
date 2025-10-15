import React, { useEffect, useRef } from "react";
import video_03 from '../videos/video_03.mp4';  // ✅ Imported video

export default function VideoLoader({ onFinish }) {
  const videoRef = useRef(null); // ✅ Should be null initially

  useEffect(() => {
    const video = videoRef.current;

    const handleEnd = () => {
      onFinish(); // Trigger parent callback
    };

    // ✅ When video ends
    video.addEventListener("ended", handleEnd);

    // ✅ Fallback in case video fails to play
    const fallback = setTimeout(handleEnd, 7000);

    return () => {
      video.removeEventListener("ended", handleEnd);
      clearTimeout(fallback);
    };
  }, [onFinish]);

  return (
    <div style={styles.container}>
      <video
        ref={videoRef}
        src={video_03}          // ✅ Playing the imported video
        autoPlay
        muted
        playsInline
        style={styles.video}
      />
    </div>
  );
}

const styles = {
  container: {
    position: "fixed",
    inset: 0,
    background: "black",
    zIndex: 9999,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  video: {
    width: "100%",
    height: "100%",
    objectFit: "cover"
  }
};

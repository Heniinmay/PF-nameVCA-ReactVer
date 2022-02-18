import React, { useRef, useState } from "react";

const Clips = () => {
  const videoRef = useRef(null);
  const [isPlay, setIsPlay] = useState(false);

  const playBtn = () => {
    //1. 비디오 플레이
    videoRef.current.play();
    //2. display none
    setIsPlay(true);
};

const playStop = () =>{
    videoRef.current.pause();
    setIsPlay(false);
  }
  return (
      <section className="new_clips container">
        <h2 className="hidden">season video</h2>
        <div className="stillvideo">
          <video
            id="vid"
            className="vca-video-player"
            playsinline
            muted
            ref={videoRef}
            onClick={isPlay ? playStop : playBtn}
          >
              <source src="https://www.vancleefarpels.com/content/dam/vancleefarpels/La-Maison/videos/the-frivole-collection-a-bouquet-of-light/van-cleef-arpels-frivole-collection.mp4" 
              />
          </video>
          <div
            className="hover_link"
            style={{ display: isPlay ? "none" : "block" }}
          >
            <div
              className="play_btn"
              style={{ display: isPlay ? "none" : "block" }}
              onClick={playBtn}
            ></div>
          </div>
        </div>
      </section>
  );
};

export default Clips;

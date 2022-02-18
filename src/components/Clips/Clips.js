import React from "react";

const Clips = () => {
  return (
    <div>
      <section className="new_clips container">
        <h2 className="hidden">season video</h2>
        <div className="stillvideo">
          <video
            id="vid"
            className="vca-video-player"
            src="https://www.vancleefarpels.com/content/dam/vancleefarpels/La-Maison/videos/the-frivole-collection-a-bouquet-of-light/van-cleef-arpels-frivole-collection.mp4"
            playsinline
            muted
          ></video>
          <div className="hover_link">
            <div className="play_btn"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Clips;

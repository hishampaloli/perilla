import React, { useRef, useState } from "react";
import { toast } from "react-hot-toast";
import Dicd from "../components/Dicd";
import Layout from "../components/layout/Layout";
import MainLayout from "../components/layout/MainLayout";

const validFileType = ["image/jpg", "image/jpeg", "image/png"];
const demo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioRef, setAudioRef] = useState<any>(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.pause();
    } else {
      audioRef.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSounf = () => {
    audioRef.pause();
    audioRef.currentTime = 0;
    audioRef.play();
  };

  return (
    <div>
      <audio
        ref={(ref) => {
          setAudioRef(ref);
        }}
      >
        <source
          src="http://commondatastorage.googleapis.com/codeskulptor-assets/week7-bounce.m4a"
          type="audio/mpeg"
        />
      </audio>
      <button onClick={handleSounf}>{isPlaying ? "Pause" : "Play"}</button>
    </div>
  );
};

export default demo;

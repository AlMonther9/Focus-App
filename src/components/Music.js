// src/components/Music.js
import React, { useState } from 'react';

const Music = () => {
  const [audio, setAudio] = useState(null);

  const handleMusicChange = (event) => {
    if (audio) {
      audio.pause();
    }
    const file = event.target.files[0];
    if (file) {
      const newAudio = new Audio(URL.createObjectURL(file));
      newAudio.play();
      setAudio(newAudio);
    }
  };

  return (
    <div>
      <label>
        Choose Music:
        <input type="file" accept="audio/*" onChange={handleMusicChange} />
      </label>
    </div>
  );
};

export default Music;

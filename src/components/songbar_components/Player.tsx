import React, { useRef, useEffect } from "react";

type PlayerProps = {
  activeSong: any;
  isPlaying: boolean;
  volume: number;
  onEnded: () => void;
};

const Player: React.FC<PlayerProps> = ({
  activeSong,
  isPlaying,
  volume,
  onEnded,
}) => {
  const ref = useRef<HTMLAudioElement | null>(null);

  if (ref.current && activeSong) {
    if (isPlaying) {
      const playPromise = ref.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // Playback started successfully
          })
          .catch((error) => {
            // Auto-play was prevented
            console.error("Autoplay prevented:", error);
          });
      }
    } else {
      ref.current.pause();
    }
  }

  useEffect(() => {
    if (ref.current) {
      ref.current.volume = volume;
    }
  }, [volume]);

  return (
    <audio src={activeSong.url} ref={ref} loop={false} onEnded={onEnded} />
  );
};

export default Player;

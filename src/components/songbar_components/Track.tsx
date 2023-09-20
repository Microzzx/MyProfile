import React from "react";

type TrackProps = {
  activeSong: any;
  isPlaying: boolean;
};

const Track: React.FC<TrackProps> = ({ activeSong, isPlaying }) => {
  return (
    <>
      <div
        className={`${
          isPlaying
            ? "animate-[spin_3s_linear_infinite] max-[900px]:hidden h-16 w-16"
            : ""
        } block max-[900px]:hidden h-16 w-16 mr-4`}
      >
        <img src={activeSong.images} alt="cover art" className="rounded-full" />
      </div>
      <div className="flex flex-col justify-center items-center mx-[3%]">
        <p className="songbar-text truncate text-white font-bold text-lg mb-2">
          {isPlaying ? "Now playing..." : "Paused"}
        </p>
        <p className="songbar-text truncate text-gray-300">
          {activeSong.title}
        </p>
      </div>
    </>
  );
};

export default Track;

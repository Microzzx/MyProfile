import React, { ChangeEvent } from "react";
import {
  BsFillVolumeUpFill,
  BsVolumeDownFill,
  BsFillVolumeMuteFill,
} from "react-icons/bs";

type VolumeProps = {
  volume: number;
  min: string;
  max: string;
  onChange: (event: ChangeEvent<HTMLElement>) => void;
  setVolume: (volume: number) => void;
};

const Volume: React.FC<VolumeProps> = ({
  volume,
  min,
  max,
  onChange,
  setVolume,
}) => {
  return (
    <div className="hidden lg:flex items-center justify-end">
      {volume <= 1 && volume > 0.5 && (
        <BsFillVolumeUpFill
          size={25}
          color="#FFF"
          onClick={() => setVolume(0)}
        />
      )}
      {volume <= 0.5 && volume > 0 && (
        <BsVolumeDownFill size={25} color="#FFF" onClick={() => setVolume(0)} />
      )}
      {volume === 0 && (
        <BsFillVolumeMuteFill
          size={25}
          color="#FFF"
          onClick={() => setVolume(0.5)}
        />
      )}
      <input
        type="range"
        step="any"
        value={volume}
        min={min}
        max={max}
        onChange={onChange}
        className="2xl:w-40 lg:w-32 md:w-32 h-1 ml-2"
      />
    </div>
  );
};

export default Volume;

import { useState, useEffect } from "react";
import Track from "./songbar_components/Track";
import Control from "./songbar_components/Control";
import Volume from "./songbar_components/Volume";
import Player from "./songbar_components/Player";
import data from "../assets/data/myChart.json";
import { useDispatch, useSelector } from "react-redux";
import {
  setActiveSong,
  playPause,
  playerSelector,
  nextSong,
  prevSong,
} from "../redux/slices/playerSlice";

const SongBar: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setActiveSong(data));
  }, []);

  const { activeSong, isPlaying, currentSongs, currentIndex } =
    useSelector(playerSelector);

  const [volume, setVolume] = useState(0.2);

  //auto play when song changed
  useEffect(() => {
    if (currentSongs.length) dispatch(playPause(true));
  }, [currentIndex]);

  const handlePlayPause = () => {
    if (isPlaying) {
      dispatch(playPause(false));
    } else {
      dispatch(playPause(true));
    }
  };

  const handleNextSong = () => {
    dispatch(playPause(false));
    const index: number = (currentIndex + 1) % currentSongs.length;
    dispatch(nextSong(index));
  };

  const handlePrevSong = () => {
    dispatch(playPause(false));
    let index: number;
    if (currentIndex === 0) {
      index = currentSongs.length - 1;
    } else {
      index = currentIndex - 1;
    }
    dispatch(nextSong(index));
  };

  return (
    <div className="flex  w-full h-[15vh] items-center bg-black/30 z-[1]">
      <div className="flex items-center justify-center max-[900px]:flex-col max-[900px]:gap-3 w-full ">
        <Track activeSong={activeSong} isPlaying={isPlaying} />
        <Control
          isPlaying={isPlaying}
          currentSongs={currentSongs}
          handlePlayPause={handlePlayPause}
          handleNextSong={handleNextSong}
          handlePrevSong={handlePrevSong}
        />
        <Player
          activeSong={activeSong}
          isPlaying={isPlaying}
          volume={volume}
          onEnded={handleNextSong}
        />
        <Volume
          volume={volume}
          min="0"
          max="1"
          onChange={(event: React.ChangeEvent<HTMLElement>) =>
            setVolume(event.target.value)
          }
          setVolume={setVolume}
        />
      </div>
    </div>
  );
};

export default SongBar;

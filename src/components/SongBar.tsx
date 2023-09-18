import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
import { BsFillPauseFill, BsFillPlayFill } from "react-icons/bs";

type Props = {};

const SongBar = ({}: Props) => {
  console.log(window.innerWidth);
  return (
    <div className="flex  w-full h-[15vh] items-center bg-black/30 z-[1]">
      <div className="flex items-center justify-center max-[900px]:flex-col max-[900px]:gap-3 w-full ">
        <div
          //   className={`${
          //     isPlaying && isActive ? "animate-[spin_3s_linear_infinite]" : ""
          //   } hidden sm:block h-16 w-16 mr-4`}
          className="animate-[spin_3s_linear_infinite] max-[900px]:hidden h-16 w-16"
        >
          <img
            src="https://is4-ssl.mzstatic.com/image/thumb/Music116/v4/72/65/33/726533bf-25f1-094e-d818-3c85167664a0/23UMGIM58540.rgb.jpg/400x400cc.jpg"
            alt="cover art"
            className="rounded-full"
          />
        </div>
        <div className="flex flex-col justify-center items-center mx-[3%]">
          <p className="songbar-text truncate text-white font-bold text-lg mb-2">
            Now is playing
          </p>
          <p className="songbar-text truncate text-gray-300">
            {"Active Song Test_Music.mp3"}
          </p>
        </div>
        <div className="flex items-center justify-start gap-5 ">
          {/* {currentSongs?.length && ( */}
          <MdSkipPrevious
            color="#FFF"
            className="cursor-pointer songbar-icon-1"
            // onClick={handlePrevSong}
          />
          {/* )} */}
          {/* {isPlaying ? ( */}
          <BsFillPauseFill
            color="#FFF"
            // onClick={handlePlayPause}
            className="cursor-pointer songbar-icon-2"
          />
          {/* ) : (
          <BsFillPlayFill
            size={45}
            color="#FFF"
            onClick={handlePlayPause}
            className="cursor-pointer"
          />
        )} */}
          {/* {currentSongs?.length && ( */}
          <MdSkipNext
            color="#FFF"
            className="cursor-pointer songbar-icon-1"
            // onClick={handleNextSong}
          />
          {/* )} */}
        </div>
      </div>
    </div>
  );
};

export default SongBar;

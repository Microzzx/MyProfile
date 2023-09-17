import Video_1 from "../assets/videos/Sequence.mp4";

type Props = {};

const ImageBox = (props: Props) => {
  return (
    <div className="flex absolute z-[-1] top-0 w-full max-[310px]:hidden">
      <video className="w-full" autoPlay loop muted>
        <source src={Video_1} type="video/mp4" />
      </video>
    </div>
  );
};

export default ImageBox;

import Image_1 from "../assets/images/bg.jpg";

type Props = {};

const ImageBox = (props: Props) => {
  return (
    <div className="flex relative h-[300px]  bg-black/5 bg-opacity-25 backdrop-blur-sm">
      <img src={Image_1} alt="cover image" className="object-cover" />
    </div>
  );
};

export default ImageBox;

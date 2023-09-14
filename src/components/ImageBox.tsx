import Image_1 from "../assets/images/bg.jpg";

type Props = {};

const ImageBox = (props: Props) => {
  return (
    <div className="flex h-[300px]">
      <img src={Image_1} alt="cover image" className="object-cover" />
    </div>
  );
};

export default ImageBox;

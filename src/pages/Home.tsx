import Img1 from "../assets/images/landscape2.gif";

const Home = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-[#f6c344] text-xl font-bold">Home</h1>
        <img src={Img1} alt="test_img" />
      </div>
    </div>
  );
};
export default Home;

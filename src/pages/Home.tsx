import Img1 from "../assets/images/landscape2.gif";
import { useSelector, useDispatch } from "react-redux";
import { counterSelector } from "../redux/slices/counterSlice";

const Home = () => {
  const num1 = useSelector(counterSelector);
  return (
    <div className="flex flex-col w-full mx-[5%]">
      <div className="flex flex-col justify-start">
        <section id="Profile">
          <div className="section-div">
            <div className="flex flex-col">
              <h1 className="text-[#f6c344] text-4xl font-bold mb-5">
                Welcome to My Profile :D
              </h1>
              <p className="">{num1.value}</p>
            </div>
          </div>
        </section>

        <section id="Aboutme">
          <div className="section-div">
            <h1 className="text-[#f6c344] text-4xl font-bold">
              My name is Janekit Prakittawornkul.
            </h1>
          </div>
        </section>

        <section id="Skills">
          <div className="section-div">
            <h1 className="text-[#f6c344] text-xl font-bold">Skills</h1>
            <img src={Img1} alt="test_img" />
          </div>
        </section>

        <section id="Project">
          <div className="section-div">
            <h1 className="text-[#f6c344] text-xl font-bold">Project</h1>
            <img src={Img1} alt="test_img" />
          </div>
        </section>

        <section id="Contact">
          <div className="section-div">
            <h1 className="text-[#f6c344] text-xl font-bold">Contact</h1>
            <img src={Img1} alt="test_img" />
          </div>
        </section>
      </div>
    </div>
  );
};
export default Home;

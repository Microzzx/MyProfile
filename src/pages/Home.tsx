import Img1 from "../assets/images/landscape2.gif";

const Home = () => {
  return (
    <div className="flex flex-col mx-[5%]">
      <div className="flex flex-col items-center justify-center">
        <section id="Profile">
          <div className="section-div flex ">
            <h1 className="text-[#f6c344] text-4xl font-bold">
              Welcome to My Profile :D
            </h1>
          </div>
        </section>

        <section id="Aboutme">
          <div className="section-div flex ">
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

import Image2 from "../assets/image 2.png";
import Image1 from "../assets/image 1.png";
import TextButton from "./TextButton";

const Features = () => {
  return (
    <div className="w-full bg-white px-4 py-6">
      <div className="mx-auto grid max-w-screen-xl md:grid-cols-2">
        <img className="mx-auto my-4 w-[414px]" src={Image2} alt="/" />
        <div className="flex flex-col sm:items-start justify-center items-center">
          <h1 className="mb-5 text-[27px] font-poppins font-semibold text-primary leading-[33px] sm:text-[20px] md:text-[25px]">
            Web & Mobile App Development
          </h1>
          <p className="mb-5 text-[16px] font-inter sm:text-start  text-center font-normal text-black leading-[19.36px]">
            Your web and mobile Apps are pieces of the puzzle to grow your
            business. We use frameworks which tailor content and engagement
            methods to respond to different intents shown by your potential
            customers who interact with your business online.
          </p>
          <div>
            <TextButton text="LEARN MORE" type="primary" />
          </div>
        </div>
      </div>
      <div className="mx-auto grid max-w-screen-xl md:grid-cols-2 md:mt-0 mt-[60px]">
        <div className="flex flex-col sm:items-start justify-center items-center">
          <h1 className="mb-5 text-[27px] font-poppins font-semibold text-primary leading-[33px] sm:text-[20px] md:text-[25px]">
            Digital Strategy Consulting
          </h1>
          <p className="mb-5 text-[16px] font-inter sm:text-start text-center font-normal text-black leading-[19.36px]">
            Your digital strategy should complement the overall marketing
            strategy of the company. In online marketing, each component will
            never work in isolation and every business needs a different mix. We
            provide a clear concept and strategic overview to find the most
            efficient model for your business.
          </p>
          <div>
            <TextButton text="LEARN MORE" type="primary" />
          </div>
        </div>
        <img className="mx-auto my-4 w-[414px]" src={Image1} alt="/" />
      </div>
    </div>
  );
};

export default Features;

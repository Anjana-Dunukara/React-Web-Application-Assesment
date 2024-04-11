import backDrop from "../assets/andy-kelly-0E_vhMVqL9g-unsplash 2.jpg";

const Hero = () => {
  return (
    <div className="relative bg-cover bg-center h-screen">
      <img
        src={backDrop}
        alt=""
        className="absolute inset-0 z-0 object-cover w-full h-full"
      />
      <div className="absolute pt-[24px] pr-[40px] pb-[32px] pl-[40px] bg-gradient-to-r from-dark2 to-analogous2 bottom-0 left-0 ml-80 mb-40 text-white z-10 w-[630px] gap-[20px]">
        <h1 className="font-bold mb-4 font-inter text-[48px] leading-[48px] tracking-tight">
          We Crush Your Competitors, Goals, and Sales Records - Without The B.S.
        </h1>
        <button className="px-6 py-3 bg-secondary font-bold font-inter text-[14px] leading-[14px] tracking-tight rounded-[4px]">
          Get free consultation
        </button>
      </div>
    </div>
  );
};

export default Hero;

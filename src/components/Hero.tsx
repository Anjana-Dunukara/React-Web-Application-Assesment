import backDrop from "../assets/andy-kelly-0E_vhMVqL9g-unsplash 2.jpg";

const Hero = () => {
  return (
    <section
      className="bg-cover bg-center h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${backDrop})` }}
    >
      <div className="container max-w-[1440px] mx-auto text-left h-[306px] mb-10">
        <div className="w-[630px] pt-[24px] pr-[40px] pb-[32px] pl-[40px] bg-gradient-to-r h-full from-dark2 m-20 to-analogous2 text-white z-10 gap-[20px]">
          <h1 className="font-bold mb-4 font-inter text-[48px] leading-[48px] tracking-tight">
            We Crush Your Competitors, Goals, and Sales Records - Without The
            B.S.
          </h1>
          <button className="px-6 py-3 bg-secondary font-bold font-inter text-[14px] leading-[14px] tracking-tight rounded-[4px]">
            Get free consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

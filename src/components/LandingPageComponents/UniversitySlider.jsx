import Slider from "react-infinite-logo-slider";

const UniversitySlider = () => {
  return (
    <Slider
      width="250px"
      duration={20}
      pauseOnHover={true}
      blurBorders={false}
      blurBoderColor={"#fff"}
    >
      <Slider.Slide>
        <div className=" flex flex-col items-center gap-2">
          <img src="/mandi.png" alt="IIT Mandi" className="w-36 h-36" />
          <h4 className=" text-black font-semibold font-poppins">IIT Mandi</h4>
        </div>
      </Slider.Slide>
      <Slider.Slide>
        <div className=" flex flex-col items-center gap-2">
          <img src="/una.jpg" alt="IIIT Una" className="w-36 h-36" />
          <h4 className=" text-black font-semibold font-poppins">IIIT Una</h4>
        </div>
      </Slider.Slide>
      <Slider.Slide>
        <div className=" flex flex-col items-center gap-2">
          <img src="/hamirpur.png" alt="NIT Hamripur" className="w-36 h-36" />
          <h4 className=" text-black font-semibold font-poppins">
            NIT Hamirpur
          </h4>
        </div>
      </Slider.Slide>
      <Slider.Slide>
        <div className=" flex flex-col items-center gap-2">
          <img src="/jalandhar.jpg" alt="NIT Jalandhar" className="w-36 h-36" />
          <h4 className=" text-black font-semibold font-poppins">
            NIT Jalandhar
          </h4>
        </div>
      </Slider.Slide>
      <Slider.Slide>
        <div className=" flex flex-col items-center gap-2">
          <img src="/ropar.png" alt="IIT Ropar" className="w-36 h-36" />
          <h4 className=" text-black font-semibold font-poppins">IIT Ropar</h4>
        </div>
      </Slider.Slide>
    </Slider>
  );
};

export default UniversitySlider;

import Slider from "react-infinite-logo-slider";

const UniversitySlider = () => {
  return (
    <Slider
      width="250px"
      duration={40}
      pauseOnHover={true}
      blurBorders={false}
      blurBoderColor={"#fff"}
    >
      <Slider.Slide>
        <img src="/mandi.png" alt="IIT Mandi" className="w-36" />
      </Slider.Slide>
      <Slider.Slide>
        <img src="/una.jpg" alt="IIIT Una" className="w-36" />
      </Slider.Slide>
      <Slider.Slide>
        <img src="/hamirpur.png" alt="NIT Hamripur" className="w-36" />
      </Slider.Slide>
      <Slider.Slide>
        <img src="/jalandhar.jpg" alt="NIT Jalandhar" className="w-36" />
      </Slider.Slide>
      <Slider.Slide>
        <img src="/ropar.png" alt="IIT Ropar" className="w-36" />
      </Slider.Slide>
    </Slider>
  );
};

export default UniversitySlider;

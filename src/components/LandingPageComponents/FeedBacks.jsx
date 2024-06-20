import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Card = ({ card, onHoverStart, onHoverEnd }) => {
  return (
    <div
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
      className=" relative h-[350px] sm:h-[300px] w-[80vw] sm:w-[24rem] md:w-[100%] bg-[#1e1c25] rounded-lg text-white flex flex-col gap-4 items-center justify-center"
    >
      <div className="absolute top-[-3rem] z-50">
        <img src="/man.png" alt="" className="h-24 w-24" />
      </div>
      <p className="w-full px-4 sm:px-8 text-center font-[200] text-xs lg:text-sm  text-white backdrop-blur-lg">
        <img
          src="double-quotes.png"
          alt=""
          className="h-8 w-8 bg-transparent"
        />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
        quibusdam pariatur laudantium cum, tenetur libero omnis et! Quidem neque
        esse veritatis eligendi velit libero dolor quibusdam hic, commodi
        obcaecati nihil reiciendis voluptatum itaque vel ut!
        <span className="flex justify-end bg-transparent">
          <img
            src="double-quotes.png"
            alt=""
            className="h-8 w-8 bg-transparent rotate-180"
          />
        </span>
      </p>
      <div className="flex flex-col gap-1 bg-transparent items-center">
        {/* <div className="flex gap-1 items-center bg-transparent">
          <img src="/star.png" alt="" className="h-5 w-5 bg-transparent" />
          <img src="/star.png" alt="" className="h-5 w-5 bg-transparent" />
          <img src="/star.png" alt="" className="h-5 w-5 bg-transparent" />
          <img src="/star.png" alt="" className="h-5 w-5 bg-transparent" />
          <img src="/star.png" alt="" className="h-5 w-5 bg-transparent" />
        </div> */}
        <div className="bg-transparent text-xs sm:text-sm text-white font-extralight">
          {card.title}
        </div>
        <div className=" text-gray-500 text-xs">{card.position}</div>
      </div>
    </div>
  );
};

const cards = [
  {
    url: "/bg.jpg",
    title: "Suraj Maheshwari",
    position: "Web Designer",
    id: 0,
  },
  {
    url: "/bg.jpg",
    title: "Elizabeth Taylor",
    position: "Product Manager",
    id: 1,
  },
  {
    url: "/bg.jpg",
    title: "Ashley Watson",
    position: "Product Designer",
    id: 2,
  },
  {
    url: "/bg.jpg",
    title: "Caleb Jones",
    position: "CEO",
    id: 3,
  },
  {
    url: "/bg.jpg",
    title: "Deepti Sharma",
    position: "CMO",
    id: 4,
  },
];

const FeedBacks = () => {
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);
  const [isAutoplay, setIsAutoplay] = useState(true);

  const [isMobile, setIsMobile] = useState(false);
  const [isSmall, setIsSmall] = useState(false);

  useEffect(() => {
    const mediaQuerySmall = window.matchMedia("(max-width: 640px)");
    const mediaQueryMedium = window.matchMedia("(max-width: 768px)");

    const handleResize = () => {
      if (mediaQuerySmall.matches) {
        setIsMobile(false);
        setIsSmall(mediaQuerySmall.matches);
      } else {
        setIsMobile(mediaQueryMedium.matches);
        setIsSmall(mediaQuerySmall.matches);
      }
    };

    handleResize();

    mediaQuerySmall.addEventListener("change", handleResize);
    mediaQueryMedium.addEventListener("change", handleResize);

    return () => {
      mediaQuerySmall.removeEventListener("change", handleResize);
      mediaQueryMedium.removeEventListener("change", handleResize);
    };
  }, [isMobile, window.matchMedia]);

  const handleNext = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 1) % 5
      );
      return updatedIndexes;
    });
  };

  const handleBack = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 4) % 5
      );

      return updatedIndexes;
    });
  };

  const positions = ["center", "left1", "left", "right", "right1"];

  const imageVariants = isMobile
    ? {
        center: { x: "0%", scale: 1, zIndex: 5 },
        left1: { x: "-60%", scale: 0.5, zIndex: 3 },
        left: { x: "-100%", scale: 0, zIndex: 0 },
        right: { x: "100%", scale: 0, zIndex: 0 },
        right1: { x: "60%", scale: 0.5, zIndex: 3 },
      }
    : isSmall
    ? {
        center: { x: "0%", scale: 1, zIndex: 5 },
        left1: { x: "-120%", scale: 0, zIndex: 0 },
        left: { x: "-150%", scale: 0, zIndex: 0 },
        right: { x: "150%", scale: 0, zIndex: 0 },
        right1: { x: "120%", scale: 0, zIndex: 0 },
      }
    : {
        center: { x: "0%", scale: 1, zIndex: 5 },
        left1: { x: "-50%", scale: 0.7, zIndex: 3 },
        left: { x: "-90%", scale: 0.5, zIndex: 2 },
        right: { x: "90%", scale: 0.5, zIndex: 1 },
        right1: { x: "50%", scale: 0.7, zIndex: 3 },
      };

  useEffect(() => {
    if (isAutoplay) {
      const intervalId = setInterval(() => {
        setPositionIndexes((prevIndexes) => {
          const updatedIndexes = prevIndexes.map(
            (prevIndex) => (prevIndex + 1) % 5
          );
          return updatedIndexes;
        });
      }, 5000); // Change every 4 seconds

      return () => clearInterval(intervalId);
    }
  }, [isAutoplay]);

  const handleHoverStart = () => {
    setIsAutoplay(false);
  };

  const handleHoverEnd = () => {
    setIsAutoplay(true);
  };

  return (
    <div className=" mt-[6rem] overflow-hidden">
      <div className="text-center text-3xl text-white md:text-5xl font-bold ">
        Customer Stories
      </div>

      <div className=" my-6 flex items-center gap-5 justify-end mr-4 md:mr-16">
        <AiOutlineLeft
          onClick={handleBack}
          className=" cursor-pointer hover:border-cyan-500 hover:text-cyan-500 transition-all duration-300 ease-in-out text-4xl sm:text-5xl border rounded-full p-1"
        />
        <AiOutlineRight
          onClick={handleNext}
          className=" cursor-pointer hover:border-cyan-500 hover:text-cyan-500 transition-all duration-300 ease-in-out text-4xl sm:text-5xl border rounded-full p-1"
        />
      </div>

      <div className="flex justify-between w-full mt-24">
        {cards.map((card) => (
          <motion.div
            key={card.id}
            className="rounded-[12px] "
            initial="center"
            animate={positions[positionIndexes[card.id]]}
            variants={imageVariants}
            transition={{ duration: 0.5 }}
            style={{
              width: "40%",
              position: "absolute",
              left: isMobile ? "25%" : isSmall ? "10%" : "30%",
            }}
          >
            <Card
              card={card}
              onHoverStart={handleHoverStart}
              onHoverEnd={handleHoverEnd}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FeedBacks;

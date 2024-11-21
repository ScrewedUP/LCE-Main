import { Button } from "../components/ui/button";
import "../styles/runningGlow.css";

const Hero = () => {
  return (
    <main className="flex flex-col h-[70vh] w-full justify-center ">
      <div className="flex flex-col justify-center items-center h-full w-full px-4">
        <div className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl text-center w-full md:w-2/3 font-sans font-bold drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]">
          Transforming{" "}
          <span className="text-blue drop-shadow-[0_0_6px_rgba(0,0,255,0.3)]">
            early-stage ideas
          </span>{" "}
          into{" "}
          <span className="text-orange-600 drop-shadow-[0_0_6px_rgba(255,165,0,0.3)]">
            success
          </span>{" "}
        </div>
        <div className="mt-4 text-center font-semibold w-full sm:w-3/4 md:w-2/4 text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground font-poppins">
          We provide comprehensive support to early-stage ideas, startups and
          entrepreneurs through our diverse and impactful ecosystem.
        </div>
        <div className="mt-4 text-center">
          <Button
            variant="secondary"
            className="font-poppins font-semibold animated-border text-white text-sm sm:text-base md:text-lg px-4 py-2 md:px-6 md:py-3"
          >
            Apply Now
          </Button>
        </div>
      </div>
      {/* <div className="absolute semi-circle-bg h-[70vh] w-[70vh] left--1/2 -translate-x-1/2 "></div> */}
    </main>
  );
};

export default Hero;

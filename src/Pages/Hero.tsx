import { Button } from "../components/ui/button";
import "../styles/runningGlow.css";
const Hero = () => {
  return (
    <main className="flex flex-col h-[70vh] w-full justify-center items-start">
      <div className="flex flex-col justify-center items-center h-full w-full">
        <div className="text-7xl w-2/4 font-sans font-bold drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]">
          Transforming{" "}
          <span className="text-blue drop-shadow-[0_0_6px_rgba(0,0,255,0.3)]">
            early-stage ideas
          </span>{" "}
          into{" "}
          <span className="text-orange-600 drop-shadow-[0_0_6px_rgba(255,165,0,0.3)]">
            success
          </span>{" "}
        </div>
        <div className="mt-4 font-semibold w-2/4 text-muted-foreground font-poppins">
          We provide comprehensive support to early-stage ideas, startups and
          entrepreneurs through our diverse and impactful ecosystem.{" "}
        </div>
        <div className=" mt-4 w-2/4 ">
          <Button
            variant="secondary"
            className="font-poppins animated-border text-white"
          >
            Apply Now
          </Button>
        </div>
      </div>
    </main>
  );
};

export default Hero;

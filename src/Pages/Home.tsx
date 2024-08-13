import Navbar from "../components/Navbar/Navbar";
import { Button } from "../components/ui/button";

function Home() {
  return (
    <main className="flex flex-col h-screen w-full justify-start font-sans">
      <Navbar />
      <div className="flex flex-col justify-center h-full">
        <div className="text-7xl w-[50vw] pl-40 font-bold">
          Transforming <span className="text-blue">early-stage ideas</span> into{" "}
          <span className="text-orange-600">success</span>{" "}
        </div>
        <div className="w-[50vw] pl-40 mt-8 font-semibold">
          We provide comprehensive support to early-stage ideas, startups and
          entrepreneurs through our diverse and impactful ecosystem.{" "}
        </div>
        <div className="pl-40 mt-8">
          <Button
            variant="outline"
            className="border-orange-500 border-2 text-outlinedButtoncolor w-[8vw]"
          >
            Apply Now
          </Button>
        </div>
      </div>
    </main>
  );
}

export default Home;

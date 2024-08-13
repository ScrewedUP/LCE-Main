import { Button } from "../components/ui/button";

function Home() {
  return (
    <main className="flex flex-col h-screen w-full justify-start font-sans">
      <div className="flex flex-col justify-center h-full flex-left ml-40 w-[40%]">
        <div className="text-7xl font-bold">
          Transforming <span className="text-blue">early-stage ideas</span> into{" "}
          <span className="text-orange-600">success</span>{" "}
        </div>
        <div className="mt-8 font-semibold">
          We provide comprehensive support to early-stage ideas, startups and
          entrepreneurs through our diverse and impactful ecosystem.{" "}
        </div>
        <div className="mt-8">
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

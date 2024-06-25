import React from "react";
import Navbar from "../components/Navbar/Navbar";

function Home() {
  return (
    <main className="flex flex-col min-h-screen w-full justify-start">
      <Navbar />
      <div className="flex">Home Page</div>
    </main>
  );
}

export default Home;

import type { NextPage } from "next";
import Features from "../components/sections/Features";
import Hero from "../components/sections/Hero";

const Home: NextPage = () => {
  return (
    <main>
      <Hero />
      <Features />
    </main>
  );
};

export default Home;

import type { NextPage } from "next";
import Features from "../components/sections/Features";
import Hero from "../components/sections/Hero";
import SecondFeatures from "../components/sections/SecondFeatures";

const Home: NextPage = () => {
  return (
    <main>
      <Hero />
      <Features />
      <SecondFeatures />
    </main>
  );
};

export default Home;

import type { NextPage } from "next";
import Features from "../components/sections/Features";
import Hero from "../components/sections/Hero";
import Information from "../components/sections/Information";
import SecondFeatures from "../components/sections/SecondFeatures";

const Home: NextPage = () => {
  return (
    <main>
      <Hero />
      <Features />
      <SecondFeatures />
      <Information />
    </main>
  );
};

export default Home;

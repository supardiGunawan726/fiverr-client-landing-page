import { FC } from "react";
import Button from "../Button";
import FeaturesCard from "../FeaturesCard";
import LaunchIcon from "../icons/LaunchIcon";

const Features: FC = () => {
  return (
    <section className="p-4 max-w-screen-2xl mx-auto md:px-6 lg:py-12 lg:grid lg:grid-cols-12 lg:gap-12 lg:items-center">
      <div className="lg:order-2 relative z-10 lg:col-span-6">
        <div className="text-4xl font-semibold md:text-5xl lg:text-6xl lg:leading-tight">
          <span className="text-gradient-pink">Lighting fast AMM Dex.</span>
          <h2 className="text-gradient-orange text-[40px] md:text-[50px] lg:text-[63px]">
            Say hello to cheaper, greener and faster transaction
          </h2>
          <p></p>
        </div>
        <p className="text-[#313190] mt-4 lg:text-xl xl:text-2xl 2xl:text-[28px]">
          PulseChain Swap enables efficient trading by pooling liquidity from
          different traders and using its smart contract router to find the best
          available price. Exchange any combination of PLS-20 tokens
          permissionlessly with no restriction.
        </p>
        <div className="w-max mt-6">
          <Button href="/" withIcon={<LaunchIcon />}>
            Start trading
          </Button>
        </div>
      </div>
      <div className="mt-8 relative py-8 z-0 lg:col-span-6">
        <div className="absolute left-0 right-0 top-0 bottom-0 flex h-full items-center justify-center space-x-4">
          <div className="w-[150px] h-[150px] bg-accent blur-[80px]" />
          <div className="flex flex-col space-y-32">
            <div className="w-[150px] h-[150px] bg-secondary blur-[80px] " />
            <div className="w-[150px] h-[150px] bg-[#FF9983] blur-[80px]" />
          </div>
        </div>
        <div className="flex flex-col space-y-4 md:flex-row md:justify-center md:items-center md:space-y-0 md:space-x-6">
          <div className="">
            <FeaturesCard
              img="/atm-card.png"
              title="Optimized Order Book Pricing"
            />
          </div>
          <div className="flex flex-col space-y-4 md:space-y-8">
            <div className="lg:self-start">
              <FeaturesCard img="/fast.png" title="Light Speed Transaction" />
            </div>
            <div className="md:transform md:translate-x-8">
              <FeaturesCard
                img="/price-label.png"
                title="Cheap and Effecient"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

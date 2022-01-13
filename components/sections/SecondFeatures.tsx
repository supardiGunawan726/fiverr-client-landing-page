import { FC } from "react";
import Image from "next/image";

const features = [
  {
    title: "Swap Token.",
    description:
      "Easily exchange any PLS-20 token for another instantly PulseChain swap uses an automated market maker mechanism. Swaps will occur through the protocol smart contract. Platform will support lighting speed swap.",
    image: "/trade.jpg",
  },
  {
    title: "Add Liquidity.",
    description:
      "Trading on PulseChain Swap is actually underpinned by a liquidity pool. Liquidity pools is basically a smart contracts which is depolyed on PulseChain blockchain that hold balances of two unique PLS-20 tokens while enforces...",
    image: "/liquidity.jpg",
  },
  {
    title: "Governance Protocol.",
    description:
      "PulseChain Swap protocol is governed and upgraded by PCS token holders. This will allow the community to propose, vote, and implement changes to the PulseChain Swap protocol.",
    image: "/governance.jpg",
  },
];

const SecondFeatures: FC = () => {
  return (
    <section className="bg-dark-art relative overflow-hidden">
      <span className="w-1/4 right-0 block absolute top-[10%] md:top-[5%]">
        <Image
          className="opacity-50"
          src={"/1104.png"}
          width={568}
          height={352}
          alt=""
          objectFit="cover"
          objectPosition="center"
        />
      </span>
      <div className="max-w-screen-2xl mx-auto p-4 md:px-6">
        <h2 className="text-white text-[40px] md:text-[50px] lg:text-[63px] text-4xl font-semibold md:text-5xl lg:text-6xl lg:leading-tight max-w-[529px]">
          <span className="text-accent">Swap</span>,{" "}
          <span className="text-secondary-accent">Trade</span>,{" "}
          <span className="text-secondary">Earn</span> on crypto assets
        </h2>
        <div className="mt-4 py-4 space-y-8 md:space-y-12 md:mt-8 md:py-16">
          {features.map((feature, index) => (
            <figure
              className="rounded-[28px] overflow-hidden group md:rounded-none md:grid md:grid-cols-12 md:grid-rows-1 md:items-end md:overflow-visible"
              key={index}
            >
              <span className="text-[0px] block group-odd:md:col-start-8 group-odd:md:col-span-5 group-even:md:col-span-5">
                <Image
                  className="md:rounded-[28px]"
                  src={feature.image}
                  width={720}
                  height={540}
                  objectFit="cover"
                  objectPosition="center"
                  alt={feature.title}
                />
              </span>
              <figcaption className="bg-gradient-white p-4 text-white shadow-[7px_12px_12px_rgba(0,_0,_0,_0.04)] backdrop-blur-sm md:relative group-odd:md:col-start-1 group-odd:md:col-span-7 group-even:md:col-start-6 group-even:md:col-span-8 md:row-start-1 md:rounded-[38px] group-odd:md:rounded-r-none group-even:md:rounded-l-none md:px-8 md:mb-[28px] lg:mb-16 xl:mb-24">
                <h4 className="text-3xl md:text-4xl lg:text-5xl xl:text-[55px] group-first:text-accent group-last:text-secondary group-even:text-secondary-accent font-semibold md:absolute md:bottom-full md:transform md:translate-y-1/2 group-even:md:right-[28px]">
                  {feature.title}
                </h4>
                <p className="mt-2 group-even:md:text-right lg:text-xl lg:mt-4 xl:mt-6 xl:text-2xl 2xl:text-[28px]">
                  {feature.description}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
      <span className="hidden md:block absolute bottom-[30%] w-[20%] -left-6">
        <Image
          src={"/1105.png"}
          width={426}
          height={383}
          alt=""
          objectFit="cover"
          objectPosition="center"
        />
      </span>
      <span className="hidden md:block absolute bottom-[4%] left-[40%] w-[10%]">
        <Image
          src={"/011.png"}
          width={162}
          height={162}
          alt=""
          objectFit="cover"
          objectPosition="center"
        />
      </span>
    </section>
  );
};

export default SecondFeatures;

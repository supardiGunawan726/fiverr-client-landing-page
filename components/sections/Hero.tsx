import Button from "../Button";
import DocsIcon from "../icons/DocsIcon";
import LaunchIcon from "../icons/LaunchIcon";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      style={{
        background: `radial-gradient(50% 50% at 50% 50%, #313191 0%, #1E0F48 100%);`,
      }}
      className="pt-[60px] md:pt-[80px]"
    >
      <div className="relative z-10 mx-auto max-w-screen-2xl py-4 pb-10 px-4 md:py-10 lg:px-6 overflow-hidden lg:grid lg:grid-cols-2 lg:items-center">
        <div>
          <h1 className="text-4xl text-white font-semibold md:text-5xl lg:text-6xl lg:leading-tight">
            <span className="text-accent">Decentralized Trading</span> on
            PulseChain the Evolution of{" "}
            <span className="text-secondary">DeFi</span>
          </h1>
          <p className="text-white mt-2">
            Green, Effecient and Light-speed Blockchain swaps. Next-level
            liquidity. Friction-less yield.
          </p>
          <div className="w-max mt-6 flex items-center space-x-4">
            <Button href="/app" withIcon={<LaunchIcon />}>
              Launch App
            </Button>
            <Button
              href="/app"
              withIcon={<DocsIcon />}
              className="!bg-secondary/75"
            >
              Read Docs
            </Button>
          </div>
        </div>
        <div>
          <div className="mt-12 flex flex-col -space-y-12 md:-space-y-24 lg:-space-y-20 xl:-space-y-18">
            <div className="flex flex-col -space-y-12 md:-space-y-24 lg:-space-y-16 xl:-space-y-36">
              <div className="rounded-full md:ml-16 border-white border-2 aspect-square flex flex-col items-center justify-center w-max p-8 text-white ring-shadow">
                <span>TOTAL VALUE LOCKED</span>
                <h3 className="text-accent text-4xl">$00,000,000</h3>
              </div>
              <div className="place-self-end md:mr-16 rounded-full border-white border-2 aspect-square flex flex-col items-center justify-center w-max p-8 text-white ring-shadow">
                <span>TOTAL TRADING VOLUME</span>
                <h3 className="text-accent text-4xl">$00,000,000</h3>
              </div>
            </div>
            <figure className="w-64 transform rotate-[22deg] translate-x-24 place-self-end">
              <Image
                className="object-cover"
                src="/1105.png"
                width={426}
                height={384}
                alt=""
              />
            </figure>
          </div>
          <div className="flex items-center md:justify-end space-x-4 mt-8">
            <Image
              src="/pulsechain.png"
              width={48}
              height={44}
              alt="pulsechain"
            />
            <span className="block text-xl text-white font-semibold">
              Powered by PulseChain
            </span>
          </div>
        </div>
        <div className="absolute top-0 right-0 left-0 bottom-0 -z-10">
          <span className="absolute top-[20%] right-[5%]">
            <svg
              width="116"
              height="115"
              viewBox="0 0 116 115"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="58.1296"
                cy="57.4404"
                r="57.4216"
                transform="rotate(142.483 58.1296 57.4404)"
                fill="url(#paint0_linear_6_129)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_6_129"
                  x1="58.1296"
                  y1="0.018795"
                  x2="58.1296"
                  y2="114.862"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#D03FDC" />
                  <stop offset="0.777778" stopColor="#D03FDC" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span className="absolute top-[45%] right-[5%] lg:right-[15%] lg:top-[60%] transform rotate-45">
            <svg
              width="154"
              height="154"
              viewBox="0 0 196 196"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="98.1521"
                cy="97.7805"
                r="97.5234"
                transform="rotate(-180 98.1521 97.7805)"
                fill="url(#paint0_linear_6_111)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_6_111"
                  x1="98.1521"
                  y1="0.257095"
                  x2="98.1521"
                  y2="195.304"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#05D4FC" />
                  <stop offset="0.824653" stopColor="#05D4FC" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span className="absolute bottom-[20%] left-[5%] ">
            <svg
              width="154"
              height="154"
              viewBox="0 0 196 196"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="97.5233"
                cy="97.5234"
                r="97.5234"
                fill="url(#paint0_linear_6_82)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_6_82"
                  x1="97.5233"
                  y1="0"
                  x2="97.5233"
                  y2="195.047"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#D03FDC" />
                  <stop offset="0.777778" stopColor="#D03FDC" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;

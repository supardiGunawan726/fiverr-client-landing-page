import Image from "next/image";

const informations = [
  {
    title: "Tokenomics",
    description:
      "To get more information regarding PulseChain Swap tokenomics which include vesting, liquidity provider and treasury.",
    image: "/tokenomics.png",
  },
  {
    title: "Documentation",
    description:
      "Visit our documentation section to get everything you need know about PulseChain Swap. This documentation provide technical support about the protocol.",
    image: "/documentation.png",
  },
  {
    title: "Roadmap",
    description:
      "For more information on progress, features regarding the protocol and to understand PulseChain Swap goals and visions. Please check out the roadmap.",
    image: "/roadmap.png",
  },
  {
    title: "Blog",
    description:
      "To get more information about new articles on PulseChain Swap, visit our medium section.",
    image: "/blog.png",
  },
];

const Information = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="p-4 md:p-6 lg:py-8 xl:py-12 max-w-screen-2xl mx-auto space-y-6 relative z-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-6 lg:gap-8 xl:gap-12">
        {informations.map((information, index) => (
          <figure
            key={index}
            className="grid grid-cols-12 items-center shadow-[8px_14px_14px_rgba(0,_0,_0,_0.04)] rounded-[42px] overflow-hidden bg-white/40"
          >
            <span className="block col-span-4">
              <Image
                src={information.image}
                width={270}
                height={316}
                alt={information.title}
              />
            </span>
            <figcaption className="col-span-8 p-4 text-black bg-white/70 h-full flex flex-col justify-center">
              <h4 className="font-semibold text-xl md:text-2xl lg:text-3xl xl:text-[34px]">
                {information.title}
              </h4>
              <p className="mt-1 md:text-lg lg:text-2xl xl:text-[28px]">
                {information.description}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>
      <div className="flex flex-col items-center justify-center absolute top-0 left-0 right-0 bottom-0 z-0 -space-y-[25%] lg:flex-row lg:space-y-0 lg:space-x-[-20%]">
        <span className="w-[150%] block">
          <svg
            viewBox="0 0 1057 936"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_f_11_73)">
              <rect
                width="591.826"
                height="576.398"
                rx="49.5942"
                transform="matrix(-0.905596 -0.424141 -0.634747 0.77272 942.823 371.165)"
                fill="#FF9983"
                fillOpacity="0.4"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_11_73"
                x="-72.293"
                y="0.945999"
                width="1128.41"
                height="934.814"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="67.4171"
                  result="effect1_foregroundBlur_11_73"
                />
              </filter>
            </defs>
          </svg>
        </span>
        <span className="w-[150%] block">
          <svg
            viewBox="0 0 1057 935"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_f_11_72)">
              <rect
                width="591.826"
                height="576.398"
                rx="49.5942"
                transform="matrix(0.905596 -0.424141 0.634747 0.77272 114 370.238)"
                fill="#05D4FC"
                fillOpacity="0.4"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_11_72"
                x="0.707077"
                y="0.0194855"
                width="1128.41"
                height="934.814"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="67.4171"
                  result="effect1_foregroundBlur_11_72"
                />
              </filter>
            </defs>
          </svg>
        </span>
      </div>
      <span className="inline-block absolute top-1/2 transform -translate-y-1/2 -translate-x-3/4">
        <svg
          width="450"
          height="400"
          viewBox="0 0 901 794"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_150_117)">
            <rect
              x="135"
              y="135"
              width="630.683"
              height="524.116"
              rx="49.5942"
              fill="#D03FDC"
              fillOpacity="0.4"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_150_117"
              x="0.165726"
              y="0.165726"
              width="900.352"
              height="793.784"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="67.4171"
                result="effect1_foregroundBlur_150_117"
              />
            </filter>
          </defs>
        </svg>
      </span>
      <span className="inline-block absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-3/4">
        <svg
          width="450"
          height="400"
          viewBox="0 0 901 794"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_150_117)">
            <rect
              x="135"
              y="135"
              width="630.683"
              height="524.116"
              rx="49.5942"
              fill="#D03FDC"
              fillOpacity="0.4"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_150_117"
              x="0.165726"
              y="0.165726"
              width="900.352"
              height="793.784"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="67.4171"
                result="effect1_foregroundBlur_150_117"
              />
            </filter>
          </defs>
        </svg>
      </span>
    </section>
  );
};

export default Information;

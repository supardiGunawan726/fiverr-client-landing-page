import Link from "next/link";
import { FC } from "react";
import GithubIcon from "./icons/GithubIcon";
import Logo from "./icons/Logo";
import TwitterIcon from "./icons/TwitterIcon";

const links = [
  {
    group: "Products",
    items: [
      {
        name: "AMM Dex",
        href: "/",
      },
      {
        name: "Liquidity Pool",
        href: "/",
      },
      {
        name: "API",
        href: "/",
      },
    ],
  },
  {
    group: "Resources",
    items: [
      {
        name: "Documentation",
        href: "/",
      },
      {
        name: "Blog",
        href: "/",
      },
      {
        name: "Partners",
        href: "/",
      },
    ],
  },
  {
    group: "Protocol",
    items: [
      {
        name: "Governance",
        href: "/",
      },
      {
        name: "Analytics",
        href: "/",
      },
    ],
  },
];

const communities = [
  {
    icon: <TwitterIcon />,
    href: "/",
  },
  {
    icon: <GithubIcon />,
    href: "/",
  },
];

const Footer: FC = () => {
  return (
    <footer className="bg-dark text-white relative overflow-hidden">
      <div className="p-4 md:px-6 lg:px-16 xl:px-24 max-w-screen-2xl mx-auto md:py-12 lg:py-16 xl:py-24 2xl:py-32 md:grid md:grid-cols-12 md:space-x-8 relative z-10">
        <div className="md:col-span-3">
          <h2 className="text-2xl lg:text-3xl xl:text-4xl 2xl:text-[42px] font-semibold">
            PulseChain Swap
          </h2>
          <p className="mt-3 lg:text-lg xl:text-xl 2xl:text-[28px]">
            Pulsechain Swap is the home of AMM dex. We are building a
            comprehensive, decentralized trading platform for the future of
            finance on PulseChain. Join us!
          </p>
        </div>
        <nav className="mt-8 grid grid-cols-2 gap-x-4 gap-y-8 md:mt-1 md:col-span-9 xl:grid-cols-4">
          {links.map((link, index) => (
            <div key={index}>
              <h4 className="font-semibold text-lg md:text-xl lg:text-2xl xl:text-[32px]">
                {link.group}
              </h4>
              <div className="mt-2 xl:mt-4">
                {link.items.map((item, index) => (
                  <Link href={item.href} key={index}>
                    <a className="block mt-1 lg:text-lg xl:text-xl 2xl:text-[28px] xl:mt-2">
                      {item.name}
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          ))}
          <div>
            <h4 className="font-semibold text-lg md:text-xl lg:text-2xl xl:text-[32px]">
              Community
            </h4>
            <div className="flex items-center space-x-4 mt-2 xl:mt-6">
              {communities.map((community, index) => (
                <Link href={community.href} key={index}>
                  <a className="mt-1 block">{community.icon}</a>
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </div>
      <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-end z-0 opacity-[42%]">
        <div className="transform translate-x-1/4">
          <Logo width={343} height={294} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

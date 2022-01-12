import Link from "next/link";
import { FC, useState } from "react";
import Button from "./Button";
import BurgerIcon from "./icons/BurgerIcon";
import CrossIcon from "./icons/CrossIcon";
import LaunchIcon from "./icons/LaunchIcon";
import Logo from "./icons/Logo";
import NavLink from "./NavLink";

const Navbar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header
        className={`left-0 right-0 top-0 flex items-center h-[60px] justify-between px-4 z-50 max-w-screen-2xl mx-auto md:h-[80px] lg:px-6 ${
          isOpen ? "fixed" : "absolute"
        }`}
      >
        <Link href="/">
          <a className="flex items-center space-x-2 font-semibold text-xl text-white">
            <Logo className="w-7" />
            <span>
              Ray<span className="text-secondary">Dex</span>
            </span>
          </a>
        </Link>
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <CrossIcon /> : <BurgerIcon />}
        </button>
        <div className="hidden md:flex md:items-center md:space-x-2">
          <NavLink href="/analytics">Analytics</NavLink>
          <NavLink href="/governance">Governance</NavLink>
          <Button href="/apps" withIcon={<LaunchIcon />}>
            Launch app
          </Button>
        </div>
      </header>
      <nav
        className={`fixed right-0 left-0 flex flex-col bg-[#1E0F48] py-4 transition-all ease-in-out duration-500 z-40 pt-[60px] md:hidden ${
          isOpen ? "top-0" : "-top-full"
        }`}
      >
        <NavLink href="/analytics">Analytics</NavLink>
        <NavLink href="/governance">Governance</NavLink>
        <div className="w-max px-4 py-4">
          <Button href="/apps" withIcon={<LaunchIcon />}>
            Launch app
          </Button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

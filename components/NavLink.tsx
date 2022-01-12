import Link from "next/link";
import { FC } from "react";
import AnalyticsIcon from "./icons/AnalyticsIcon";

const NavLink: FC<{
  href: string;
}> = ({ children, href }) => {
  return (
    <Link href={href}>
      <a className="text-white text-[17px] flex items-center space-x-4 py-2 px-4">
        <span>
          <AnalyticsIcon />
        </span>
        <span>{children}</span>
      </a>
    </Link>
  );
};

export default NavLink;

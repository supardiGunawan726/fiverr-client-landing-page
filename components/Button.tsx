import Link from "next/link";
import { FC } from "react";

const Button: FC<{
  href: string;
  withIcon?: JSX.Element;
  className?: string;
}> = ({ children, href, withIcon, className }) => {
  return (
    <Link href={href}>
      <a
        className={`block items-center pl-3 pr-1 bg-primary rounded-xl text-white relative ${className}`}
      >
        <span className="flex items-center space-x-1">
          <span>{children}</span>
          {withIcon && <span>{withIcon}</span>}
        </span>
        <svg
          className="absolute left-3 right-3 bottom-0 blur-[2px]"
          viewBox="0 0 154 4"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse
            cx="76.681"
            cy="1.60105"
            rx="76.681"
            ry="1.60105"
            fill="#05D4FC"
            fillOpacity="0.7"
          />
        </svg>
      </a>
    </Link>
  );
};

export default Button;

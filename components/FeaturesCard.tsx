import { FC } from "react";
import Image from "next/image";

const FeaturesCard: FC<{
  title: string;
  img: string;
}> = ({ title, img }) => {
  return (
    <figure className="max-w-[260px] bg-white/40 mx-auto flex flex-col items-center justify-center relative rounded-[37px] overflow-hidden shadow-[7px_12px_12px_rgba(0,0,0,0.04)]">
      <div className="p-4">
        <Image
          src={img}
          width={200}
          height={160}
          alt={title}
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <figcaption className="py-2 px-9 text-center flex items-center bg-white">
        <p className="font-semibold text-xl text-black lg:text-[25px]">
          {title}
        </p>
      </figcaption>
    </figure>
  );
};

export default FeaturesCard;

import * as React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

interface BannerProps {
  image: string;
  content: string;
  size?: "large" | "small";
  colorText?: "black" | "white";
}

const Banner: React.FC<BannerProps> = ({
  image,
  content,
  size = "small",
  colorText = "black",
}) => {
  const router = useRouter();
  return (
    <div
      className={`relative z-10  ${
        size === "large" ? "h-[70vh] min-h-[500px]" : "h-96"
      }`}
    >
      <h2
        dangerouslySetInnerHTML={{ __html: content }}
        className={`relative inset-y-0 z-20 max-w-6xl mx-auto text-2xl lg:text-5xl text-center pt-32 px-4 ${
          colorText === "white" ? "text-white" : "text-black"
        }`}
      ></h2>
      <Image
        alt="banner"
        className="z-10"
        src={image}
        layout="fill"
        objectFit="cover"
        quality={100}
      />
    </div>
  );
};
export default Banner;

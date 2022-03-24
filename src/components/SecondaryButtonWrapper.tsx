import React from "react";
import { Link } from "@/components";

type IPorps = {
  children: string;
  url: string;
  className?: string;
};

const SecondaryButtonWrapper: React.FC<IPorps> = ({
  children,
  url,
  className,
}) => {
  return (
    <Link className={`px-4 py-2 mt-auto  rounded-3xl ${className}`} href={url}>
      {children}
    </Link>
  );
};
export default SecondaryButtonWrapper;

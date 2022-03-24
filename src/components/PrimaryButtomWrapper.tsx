import React from "react";
import { Link } from "@/components";
import { ChevronRight } from "../icons";

type IPorps = {
  children: string;
  url?: string;
  className?: string;
  blank?: boolean;
  onClick?: () => void;
};

const PrimaryButtomWrapper: React.FC<IPorps> = ({
  children,
  url,
  className,
  blank = false,
  onClick,
}) => {
  return (
    <>
      <div
        className={`flex items-center text-center text-primary ${className}`}
        onClick={onClick ? onClick : undefined}
      >
        {url ? (
          <Link className="flex items-center" href={url}>
            {children}
            <span className="flex items-center justify-center w-6 h-6 ml-2 text-white rounded-full bg-primary">
              <ChevronRight className="w-5 h-5" />
            </span>
          </Link>
        ) : (
          <span className="flex items-center">
            {children}
            <span className="flex items-center justify-center w-6 h-6 ml-2 text-white rounded-full bg-primary">
              <ChevronRight className="w-5 h-5" />
            </span>
          </span>
        )}
      </div>
    </>
  );
};
export default PrimaryButtomWrapper;

import React from "react";

type IProps = {
  title: string;
  subtitle?: string;
};
const Title: React.FC<IProps> = ({ title, subtitle }) => {
  return (
    <>
      <h3
        className={`text-4xl font-bold tracking-wide text-center font-yaldevi ${
          subtitle ? "mb-4" : "mb-11"
        }`}
      >
        {title}
      </h3>
      {subtitle && (
        <p className="max-w-6xl mx-auto text-2xl tracking-widest text-center mb-14 text-opacity-60">
          {subtitle}
        </p>
      )}
    </>
  );
};
export default Title;

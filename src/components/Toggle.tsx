import * as React from "react";
type ToggleProps = {
  question: string;
  response: string;
};

const Toggle: React.FC<ToggleProps> = ({ question, response }) => {
  const [toggle, setToggle] = React.useState(false);
  const containerToggle = React.useRef<HTMLDivElement>(null);
  const height = containerToggle?.current?.scrollHeight;

  return (
    <div className="w-full max-w-6xl mx-auto my-6 bg-[#E8ECF0]">
      <div className="p-3">
        <div
          className="flex items-center w-full cursor-pointer select-none focus:outline-none"
          onClick={() => setToggle(!toggle)}
          aria-label="Open/Close question"
        >
          <h4 className="w-full mt-2 mb-4 text-xl font-semibold tracking-wide text-left">
            {question}
          </h4>
          {/* <BsArrowUpShort
            size="50"
            className={`transform text-custom-primary transition-all duration-300 ml-auto ${
              !toggle && "rotate-180"
            }`}
          /> */}
          icon
        </div>
        <div
          ref={containerToggle}
          className={`overflow-hidden transition-all duration-300`}
          style={{ height: `${toggle ? `${height}px` : 0}` }}
        >
          <p className="pb-4 text-lg border-b-2 border-custom-primary">
            {response}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Toggle;

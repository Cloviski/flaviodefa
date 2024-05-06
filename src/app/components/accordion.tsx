"use client";
import { useState } from "react";

interface Props {
  title: string;
  answer: string;
}

const Accordion: React.FC<Props> = ({ title, answer }) => {
  const [faqOpen, setFaqOpen] = useState(false);
  return (
    <div className="py-2">
      <button
        onClick={() => setFaqOpen(!faqOpen)}
        className="flex justify-between w-full"
      >
        <span className="text-xl font-bold">{title}</span>
        {/*faqOpen ? <span>-</span> : <span>+</span>*/}
        <svg
          className="fill-black shrink-0 ml-8"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              faqOpen && "!rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              faqOpen && "!rotate-180"
            }`}
          />
        </svg>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-green-600 ${
          faqOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">{answer}</div>
      </div>
    </div>
  );
};

export default Accordion;

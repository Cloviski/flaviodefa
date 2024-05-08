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
        className="flex w-full items-center justify-between"
      >
        <span className="whitespace-nowrap text-xl font-bold">{title}</span>
        <svg
          className="ml-8 shrink-0 fill-black"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`origin-center transform transition duration-200 ease-out ${
              faqOpen && "!rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`origin-center rotate-90 transform transition duration-200 ease-out ${
              faqOpen && "!rotate-180"
            }`}
          />
        </svg>
      </button>
      <div
        className={`grid overflow-hidden text-green-600 transition-all duration-300 ease-in-out ${
          faqOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">{answer}</div>
      </div>
    </div>
  );
};

export default Accordion;

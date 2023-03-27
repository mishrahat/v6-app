import React, { useState } from "react";
import { useCopyToClipboard } from "usehooks-ts";
import copyboard from "../../assets/copy.svg";

const Hero = () => {
  const [copied, setCopied] = useState(false);
  const [value, copy] = useCopyToClipboard();
  const text_name = "copy text from here";

  return (
    <div className="flex gap-10 my-40 items-center flex-col">
      <h1 className="font-poppins leading-tight capitalize text-7xl font-bold">
        The best way to start a <br /> full-stack, typesafe, <br /> Next.js App
      </h1>
      <div className="flex items-center gap-3">
        <a className="bg-white py-1 px-4 text-[#171335]" href="#">
          Documentation
        </a>
        <a
          className="py-1 px-4 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10"
          href="#"
        >
          Github
        </a>
      </div>

      <button
        onClick={() => {
          copy(text_name);
          setCopied(true);
        }}
        className="flex items-center gap-3 py-2 px-3 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10"
      >
        {text_name}
        {copied ? (
          <p>Done!</p>
        ) : (
          <img className="w-1/10" src={copyboard} alt="" />
        )}
      </button>
    </div>
  );
};

export default Hero;

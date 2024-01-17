"use client";
import React, { useState } from "react";

const Body1 = () => {
  const [isAnimationActive, setAnimationActive] = useState(false);

  const handleButtonClick = () => {
    // Toggle the animation state
    setAnimationActive(!isAnimationActive);
  };

  return (
    <div className="flex justify-between items-center py-10 sm:py-14 md:py-16 px-5 sm:px-8 md:px-12 lg:px-28 xl:px-64 2xl:px-[700px]">
      <div className="flex flex-col gap-1 sm:gap-2 md:gap-3 lg:gap-3">
        <div className="text-white font-semibold text-[10px] sm:text-base md:text-lg lg:text-2xl">
          DF ARES
        </div>
        <div className="h-[1px] sm:h-[2px] lg:h-[2px] w-[20px] lg:w-[32px] bg-line"></div>
        <div className="text-white text-[8px] sm:text-[10px] md:text-xs 2xl:text-base font-semibold opacity-70">
          Dark Forest Community Rounds with
          <br /> Novel Game Mechanics
        </div>
        <div className="text-[6px] sm:text-[8px] md:text-[9px] lg:text-[10px] 2xl:text-[12px] font-semibold">
          <button
            onClick={handleButtonClick}
            className="px-2 sm:px-2 md:px[4] lg:px-5 py-1 sm:py-1.5 lg:py-2 border border-enterRoundBorder bg-white   text-enterRound1"
          >
            ENTER ROUND 1
          </button>
          <button className="px-2 sm:px-2 md:px[4] lg:px-5 py-1 sm:py-1.5 lg:py-2 ml-2 lg:m-[20px] border border-enterRoundBorder bg-line text-white ">
            LEARN MORE
          </button>
        </div>
      </div>
      <div>
        <img
          className={`h-12 sm:h-24 md:h-32 lg:h-40 xl:h-44 2xl:h-52  transition-transform ${
            isAnimationActive ? "animate-bounce" : ""
          }`}
          src="https://s3-alpha-sig.figma.com/img/3280/6b75/bd85dcea7d0c5ee4332becad17a88e19?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Mz~0aTcWF~L12w7J36dCb7dIm1KdzFA5DF7qSLcn~13I1nc8YmkRrjlJpAOJ3RVn4nCgwm9jTPcSlvwvPlYHZ2~aNyvFaz1ltXGqHnYLBtGZFdchbCRVU3JFi6EKX-9Nzh1wbopWD62IfQkmBN6SMFwlsdirBS4DtsycDWV8h86mMdnY90uHCUEuuQTMGbnOxMqM31jBYPuVBTfM2Td1Hngx2phDRHJbgtJUfVi89MnEG3jMj3M7p3y5TD9HepRNLu3v0EFtE3IOOaoq10wrur7iYYd~tz2W0v~VyrestabCNrwEAIInu~hc14oHeTkGMuKGonVQNVN-MfGaefbtoQ"
        />
      </div>
    </div>
  );
};

export default Body1;

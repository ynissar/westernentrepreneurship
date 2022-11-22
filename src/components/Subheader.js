import React from "react";
import { Animated } from "react-animated-css";

import { ReactComponent as Blob } from "../images/blob.svg";
import "./Subheader.css";

function Subheader({ title, subtitle }) {
  return (
    <div className="w-full bg-gradient-to-r from-[#F3FAFB] to-[#FAF6FA] py-[10rem] pt-[12rem] ">
      <div className="flex items-center flex-col ">
        <Animated
          animationIn="fadeInUp"
          animationInDuration={2000}
          isVisible={true}
        >
          <p className="text-6xl font-bold gradient-text font-montserrat">
            {title}
          </p>
        </Animated>
        {/*Description*/}
        <Animated
          animationIn="fadeInUp"
          animationInDuration={1300}
          animationInDelay={1050}
          isVisible={true}
        >
          <p className="text-center mt-6 max-w-lg text-2xl font-montserrat">
            {subtitle}
          </p>
        </Animated>
      </div>

      <Animated
        animationIn="fadeIn"
        animationInDuration={2000}
        isVisible={true}
      >
        <Blob className="absolute invisible xl:visible top-[18rem] left-80 w-[5.75rem] h-[5.75rem] opacity-100"></Blob>
        <Blob className="absolute invisible xl:visible top-16 left-0 w-[21.5rem] h-[21.5rem] rotate-90 opacity-80"></Blob>
        <Blob className="absolute invisible xl:visible top-36 right-[3rem] w-[16rem] h-[16rem] rotate-[120deg]"></Blob>
        <Blob className="absolute invisible xl:visible top-[6rem] right-[19.5rem] w-[8rem] h-[8rem] opacity-60"></Blob>
      </Animated>
    </div>
  );
}

export default Subheader;

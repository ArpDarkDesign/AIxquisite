import { top } from "../assets";
import Button from "./Button";
import { BackgroundCircles, Gradient } from "./design/Hero";

import { useRef } from "react";
import Generating from "./Generating";
// import CompanyLogos from "./CompanyLogos";

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <div
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6">
            Unlock A<span className="text-purple-600 animate-pulse">Ix</span>
            quisite's Potential
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            Elevate your projects with AIxquisite's cutting-edge AI solutions.
            Explore limitless possibilities and drive innovation like never
            before.
          </p>

          <Button
            href="#pricing"
            className="inline-block px-6 py-3 text-white font-semibold rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 bg-gradient-to-r from-red-900 via-purple-900 to-black"
          >
            Start Your AIxquisite Journey
          </Button>
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[0.5rem]  rounded-t-[1.25rem]" />

              <div className="aspect-[33/40] rounded-b-[1.25rem] overflow-hidden md:aspect-[688/490] lg:aspect-[900/500]">
                <img
                  src={top}
                  className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
                  width={1024}
                  height={490}
                  alt="AI"
                />

                <Generating className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[21rem] md:-translate-x-1/2" />
              </div>
            </div>

            <Gradient />
          </div>

          <BackgroundCircles />
        </div>

        {/* <CompanyLogos className="hidden relative z-10 mt-20 lg:block" /> */}
      </div>

      {/* <BottomLine /> */}
    </div>
  );
};

export default Hero;

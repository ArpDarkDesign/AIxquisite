// import Section from "./Section";
import Heading from "./Heading";
import { service1, dr, opp, check } from "../assets";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import {
  PhotoChatMessage,
  Gradient,
  // VideoBar,
  // VideoChatMessage,
} from "./design/Services";

// import Generating from "./Generating";

const Services = () => {
  return (
    <div id="how-to-use">
      <div className="container">
        <Heading
          title={
            <span className="relative z-10 ">
              A<span className="text-purple-600 animate-pulse">Ix</span>quisite
              : Empowering Creativity with Generative AI.
            </span>
          }
          text="Unlock limitless creative possibilities with our AI-powered tools."
        />

        <div className="relative">
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-gradient rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                className="w-full h-full object-cover md:object-right"
                width={800}
                alt="Smartest AI"
                height={730}
                src={service1}
              />
            </div>

            <div className="relative z-1 max-w-[17rem] ml-auto">
              <h4 className="h4 mb-4">Experience AIxquisite</h4>
              <p className="body-2 mb-[3rem] text-n-3">
                Unleash boundless creativity with AIxquisite – your gateway to
                AI-generated images, videos, and beyond.
              </p>
              <ul className="body-2">
                {brainwaveServices.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t border gradient-border"
                  >
                    <img width={24} height={24} src={check} />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* <Generating className="absolute left-4 right-4 bottom-4 border-n-1/10 border lg:left-1/2 lg-right-auto lg:bottom-8 lg:-translate-x-1/2" /> */}
          </div>

          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0 border gradient-br">
                <img
                  src={opp}
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="robot"
                />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="h4 mb-4">Elevate Your Photos</h4>
                <p className="body-2 mb-[3rem] text-n-3">
                  Elevate the quality of your photos effortlessly with our
                  AI-powered photo editing feature. Experience seamless
                  enhancements that bring your images to life!
                </p>
              </div>

              <PhotoChatMessage />
            </div>

            <div className="p-4 bg-n-7 border gradient-br rounded-3xl overflow-hidden lg:min-h-[46rem]">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4">AI-Powered Video Creation</h4>
                <p className="body-2 mb-[2rem] text-n-3">
                  Unleash the full potential of AI for stunning video
                  generation. Let your imagination soar with our cutting-edge AI
                  engine.
                </p>

                <ul className="flex items-center justify-between">
                  {brainwaveServicesIcons.map((item, index) => (
                    <li
                      key={index}
                      className={`rounded-2xl flex items-center justify-center ${
                        index === 2
                          ? "w-[3rem] h-[3rem] p-0.25 bg-nice-gradient md:w-[4.5rem] md:h-[4.5rem]"
                          : "flex w-10 h-10 bg-n-6 md:w-15 md:h-15"
                      }`}
                    >
                      <div
                        className={
                          index === 2
                            ? "flex items-center justify-center w-full h-full bg-n-7 rounded-[1rem]"
                            : ""
                        }
                      >
                        <img src={item} width={46} height={46} alt={item} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                <img
                  className="w-full h-full object-cover"
                  width={520}
                  height={400}
                  src={dr}
                ></img>
              </div>
            </div>
          </div>

          <Gradient />
        </div>
      </div>
    </div>
  );
};

export default Services;

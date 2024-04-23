import { smallSphere, stars } from "../assets";
import Heading from "./Heading";
import PricingList from "./PricingList";
import { LeftLine, RightLine } from "./design/Pricing";

const Pricing = () => {
  return (
    <div className="overflow-hidden" id="pricing">
      <div className="container relative z-2">

        <Heading
          title={
            <span className="relative z-10 ">
              Discover Premium Value with{" "}
              <span className="text-transparent bg-gradient-to-r from-red-500 via-gray-500 to-purple-500 bg-clip-text ">
                {"{"}
              </span>
              A<span className="text-purple-600 animate-pulse">Ix</span>
              quisite Pricing
              <span className="text-transparent bg-gradient-to-r from-red-500 via-gray-500 to-purple-500 bg-clip-text">
                {"}"}
              </span>
            </span>
          }
        />

        <div className="relative">
          <PricingList />
          <LeftLine />
          <RightLine />
        </div>
      </div>
    </div>
  );
};

export default Pricing;

import { check } from "../assets";
import { pricing } from "../constants";
import Button from "./Button";

const PricingList = () => {
  return (
    <div className="flex gap-[1rem] max-lg:flex-wrap">
      {pricing.map((item) => (
        <div
          key={item.id}
          className="w-19rem max-lg:w-full h-full px-14 bg-n-8 border gradient-border rounded-[4rem] lg:w-auto even:py-8 odd:py-8 odd:my-14 [&>h4]:first:text-color-4 [&>h4]:even:text-color-2 [&>h4]:last:text-color-5"
        >
          <h4 className="h4 mb-4 ">{item.title}</h4>

          <p className="body-2 min-h-[3rem] mb-3 text-n-1/85">
            {item.description}
          </p>

          <div className="flex items-center h-[5.5rem] mb-2">
            {item.price && (
              <>
                <div className="h3"></div>
                <div className="text-[3.5rem] leading-none font-cursive">
                  {item.price}
                </div>
              </>
            )}
          </div>

          <Button
            className="w-full mb-6"
            href={
              item.price ? "/pricing" : "#community"
            }
            // white={!!item.price}
          >
            {item.price ? "Initiate Now" : "Connect for Assistance"}
          </Button>

          <ul>
            {item.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start py-5 border-t border-n-8"
              >
                <img src={check} width={24} height={24} alt="Check" />
                <p className="body-2 ml-4">{feature}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PricingList;

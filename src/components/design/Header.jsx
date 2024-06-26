import { nice } from "../../assets";

export const Rings = () => {
  return (
    <div className="absolute top-1/2 left-1/2 w-[36.125rem] aspect-square border border-green-500 rounded-full -translate-x-1/2 -translate-y-1/2">
      <div className="absolute top-1/2 left-1/2 w-[23.125rem] aspect-square border border-purple-900 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
    </div>
  );
};

export const SideLines = () => {
  return (
    <>
      <div className="absolute top-0 left-5 w-0.25 h-full bg-n-6"></div>
      <div className="absolute top-0 right-5 w-0.25 h-full bg-n-6"></div>
    </>
  );
};

export const BackgroundCircles = () => {
  return (
    <>
      <div className="absolute top-[4.4rem] left-16 w-6 h-6 bg-gradient-to-b from-[#DD734F] to-[#1A1A32] diamond-shape"></div>

      <div className="absolute top-[12.6rem] right-60 w-3 h-3 bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] diamond-shape"></div>
      <div className="absolute top-[26.8rem] left-28 w-6 h-6 bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] diamond-shape"></div>
    </>
  );
};

export const HamburgerMenu = () => {
  return (
    <div className="absolute inset-0 pointer-events-none lg:hidden">
      <div className="absolute inset-0 opacity-[0.1]">
        <img
          className="w-full h-full object-cover"
          src={nice}
          width={688}
          height={953}
          alt="Background"
        />
      </div>

      <Rings />

      {/* <SideLines /> */}

      <BackgroundCircles />
    </div>
  );
};

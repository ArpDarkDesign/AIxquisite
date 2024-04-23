import React from "react";
import { socials } from "../constants";

const Footer = () => {
  return (
    <div className="!px-0 !py-10">
      <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <p className="caption text-n-4 lg:block">
          A<span className="text-purple-300 animate-pulse">Ix</span>quisite ©{" "}
          {new Date().getFullYear()}. All rights reserved.
        </p>

        <ul className="flex gap-5 flex-wrap">
          {socials.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
            >
              <img src={item.iconUrl} width={16} height={16} alt={item.title} />
            </a>
          ))}
        </ul>
        <div className="text-center text-sm mt-4 text-n-4">
          <p>
            Icons provided by{" "}
            <a
              href="https://lordicon.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Lordicon.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

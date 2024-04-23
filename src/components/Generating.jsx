import { useEffect, useState } from "react";

const Generating = ({ className }) => {
  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimationClass("animate-bounce"); // Add animation class after 1 second
    }, 1000);

    return () => clearTimeout(timeout); // Clear timeout on component unmount
  }, []);

  return (
    <div
      className={`flex items-center h-[3.5rem] px-6 bg-n-8/100 rounded-[1.7rem] ${
        className || ""
      } text-base ${animationClass}`}
      // style={{ color: "#00FF00" }} // Green color
    >
      <span style={{ marginRight: "0.75rem", fontSize: "1.5rem" }}>✅</span>{" "}
      Generated 💪
    </div>
  );
};

export default Generating;

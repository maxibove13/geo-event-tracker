import React from "react";

// Assets
import "./styles.scss";
import Lottie from "react-lottie";
import animationData from "../../utilities/earthAnimation.json";

const Loader = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="loader">
      <Lottie options={defaultOptions} height={400} width={400} />
      <h1>"Now I am become death, the destroyer of worlds"</h1>
      <h3> - Bhagavad Gita</h3>
    </div>
  );
};

export default Loader;

// import clsx from "https://cdn.skypack.dev/clsx@1.1.1";
import "./componentscss.css";

const Icon = ({ path = "options", className = "w-4 h-4" }) => {
  return (
    <img
      src={`https://assets.codepen.io/3685267/${path}.svg`}
      alt=""
      className={className}
    />
  );
};

export default Icon;

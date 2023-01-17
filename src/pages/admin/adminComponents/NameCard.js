// import clsx from "https://cdn.skypack.dev/clsx@1.1.1";
import Image from "./Image";
import Icon from "./Icon";
import { useSpring, animated } from "@react-spring/web";
import "./componentscss.css";
import FlightIcon from "@mui/icons-material/Flight";

const NameCard = ({
  name,
  position,
  transactionAmount,
  rise,
  tasksCompleted,
  imgId,
}) => {
  const { transactions, barPlayhead } = useSpring({
    transactions: transactionAmount,
    barPlayhead: 1,
    from: { transactions: 0, barPlayhead: 0 },
  });
  return (
    <div className="w-full p-2 lg:w-1/3">
      <div className="rounded-lg bg-gray-900 flex justify-between p-3 h-30">
        <div className="">
          <div className="flex items-center">
            {/* <Image path={`mock_faces_${imgId}`} className="w-10 h-10" /> */}
            {imgId}
            <div className="ml-2">
              <div className="flex items-center">
                <div className="mr-2 font-bold text-white">{name}</div>
                <Icon path="res-react-dash-tick" />
              </div>
            </div>
          </div>
          <div className="text-md text-gray-400 mt-2">
            <span className="text-gray-400 ">{position}:</span>
            <span className="ml-2">{`${tasksCompleted}`}</span>
          </div>
        </div>
        <div className="flex mt-1 flex-col items-center">
          {/* Insert Icon here */}
          <animated.div
            className={`
              ${rise ? "text-green-500" : "text-red-500"}
              font-bold
              text-xl
            `}
          >
            {transactions.interpolate((i) => `${i.toFixed(1)}`)}
          </animated.div>
          <div className="text-md text-gray-400 ">{name}</div>
        </div>
      </div>
    </div>
  );
};

export default NameCard;

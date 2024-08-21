import { useState } from "react";
import Volume from "./rgiht/Volume";

// eslint-disable-next-line react/prop-types
const Right = ({
  // eslint-disable-next-line react/prop-types
  togglePower,
  // eslint-disable-next-line react/prop-types
  isPowerOn,
  // eslint-disable-next-line react/prop-types
  toggleBank,
  // eslint-disable-next-line react/prop-types
  isBankOn,
  // eslint-disable-next-line react/prop-types
  action,
  // eslint-disable-next-line react/prop-types
  setAction,
}) => {
  // const [value, setValue] = useState("hello")
  const [volume, setVolume] = useState(50);

  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
  };

  return (
    <div className="flex flex-col justify-start items-center pt-10 pr-10">
      {/* power */}
      <div className="py-3">
        <h1 className="text-2xl font-bold pb-1.5 ">Power</h1>
        <div
          className="bg-black w-16 h-8 flex items-center relative cursor-pointer p-1"
          onClick={togglePower}
        >
          <div
            className={`bg-blue-800 h-[80%] transition-all duration-500 w-6/12  ${
              isPowerOn ? "ml-8" : "ml-0 w-5/12"
            }`}
          ></div>
        </div>
      </div>
      {/* Action */}
      <div className="w-36 h-10 bg-gray-600 my-4 text-[#ffffff] text-xl font-bold border shadow-lg shadow-[#4b63]">
        <p className="w-fit mx-auto leading-loose">{action}</p>
      </div>
      {/* Volume */}
      <Volume
        volume={volume}
        handleVolumeChange={handleVolumeChange}
        setAction={setAction}
      />
      {/* Bank */}
      <div className="py-3">
        <h1 className="text-2xl font-bold pb-1.5 ">Bank</h1>
        <div
          className="bg-black w-16 h-8 flex items-center relative cursor-pointer p-1"
          onClick={toggleBank}
        >
          <div
            className={`bg-blue-800 h-[80%] transition-all duration-500 w-6/12  ${
              isBankOn ? "ml-8" : "ml-0 w-5/12"
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Right;

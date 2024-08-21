import { useState } from "react";

import Right from "./components/Right";
import Left from "./components/Left";
import Logo from "./components/Logo";

function App() {
  const [isPowerOn, setIsPowerOn] = useState(false);

  const togglePower = () => {
    setIsPowerOn(!isPowerOn);
  };
  const [isBankOn, setIsBankOn] = useState(false);

  const toggleBank = () => {
    setIsBankOn(!isBankOn);
  };

  const [action, setAction] = useState("");

  return (
    // My app
    <div className=" bg-gray-200 min-h-screen flex items-center justify-center">
      {/* Container */}
      <div className="md:w-[660px] w-[450px] bg-gray-600 text-pink-100 relative p-10 flex flex-col md:flex-row justify-between">
        {/* Logo */}
        <Logo isPowerOn={isPowerOn} />
        {/* Left Side */}
        <Left
          isPowerOn={isPowerOn}
          isBankOn={isBankOn}
          action={action}
          setAction={setAction}
        />
        {/* Right Side */}
        <Right
          togglePower={togglePower}
          isPowerOn={isPowerOn}
          toggleBank={toggleBank}
          isBankOn={isBankOn}
          action={action}
          setAction={setAction}
        />
      </div>
    </div>
  );
}

export default App;

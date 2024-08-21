import BankOff from "./left/BankOff";
import BankOn from "./left/BankOn";

// eslint-disable-next-line react/prop-types
const Left = ({ isPowerOn, isBankOn, setAction }) => {
  const handleBtn = (e) => {
    e.target.classList.add("focus:scale-[0.95]", "focus:bg-yellow-400");
    setTimeout(() => {
      e.target.classList.remove("focus:scale-[0.95]", "focus:bg-yellow-400");
    }, 250);
  };

  return (
    isBankOn ? <BankOn  isPowerOn={isPowerOn} handleBtn={handleBtn} setAction={setAction} /> : <BankOff isPowerOn={isPowerOn} handleBtn={handleBtn} setAction={setAction} />
  )
};

export default Left;

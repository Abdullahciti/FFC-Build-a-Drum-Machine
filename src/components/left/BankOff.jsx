// eslint-disable-next-line react/prop-types
const BankOff = ({ isPowerOn, handleBtn, setAction }) => {
  const sounds = {
    clap1: new Audio("/src/assets/sounds/1.wav"),
    clap2: new Audio("/src/assets/sounds/2.wav"),
    clap3: new Audio("/src/assets/sounds/3.wav"),
    clap4: new Audio("/src/assets/sounds/4.wav"),
    clap5: new Audio("/src/assets/sounds/5.wav"),
    clap6: new Audio("/src/assets/sounds/6.wav"),
    clap7: new Audio("/src/assets/sounds/7.wav"),
    clap8: new Audio("/src/assets/sounds/8.wav"),
    clap9: new Audio("/src/assets/sounds/9.wav"),
  };

  const playSound = (sound) => {
    sound.play();
  };

  return (
    <div className="grid grid-cols-3 mt-6">
      <button
        onClick={(e) => {
          handleBtn(e);
          setAction("Chord 1");
          playSound(sounds.clap9);
        }}
        className={`btn p-10 rounded-lg bg-gray-300 m-1.5 text-3xl font-extrabold text-black text-center capitalize transition-all hover:bg-gray-400 shadow-md shadow-gray-900 ${
          !isPowerOn ? "cursor-pointer" : "cursor-no-drop pointer-events-none"
        }`}
      >
        q
      </button>
      <button
        onClick={(e) => {
          handleBtn(e);
          setAction("Chord 2");
          playSound(sounds.clap8);
        }}
        className={`btn p-10 rounded-lg bg-gray-300 m-1.5 text-3xl font-extrabold text-black text-center capitalize transition-all hover:bg-gray-400 shadow-md shadow-gray-900 ${
          !isPowerOn ? "cursor-pointer" : "cursor-no-drop pointer-events-none"
        }`}
      >
        w
      </button>
      <button
        onClick={(e) => {
          handleBtn(e);
          setAction("Chord 3");
          playSound(sounds.clap7);
        }}
        className={`btn p-10 rounded-lg bg-gray-300 m-1.5 text-3xl font-extrabold text-black text-center capitalize transition-all hover:bg-gray-400 shadow-md shadow-gray-900 ${
          !isPowerOn ? "cursor-pointer" : "cursor-no-drop pointer-events-none"
        }`}
      >
        e
      </button>
      <button
        onClick={(e) => {
          handleBtn(e);
          setAction("Shaker");
          playSound(sounds.clap6);
        }}
        className={`btn p-10 rounded-lg bg-gray-300 m-1.5 text-3xl font-extrabold text-black text-center capitalize transition-all hover:bg-gray-400 shadow-md shadow-gray-900 ${
          !isPowerOn ? "cursor-pointer" : "cursor-no-drop pointer-events-none"
        }`}
      >
        a
      </button>
      <button
        onClick={(e) => {
          handleBtn(e);
          setAction("Open HH");
          playSound(sounds.clap5);
        }}
        className={`btn p-10 rounded-lg bg-gray-300 m-1.5 text-3xl font-extrabold text-black text-center capitalize transition-all hover:bg-gray-400 shadow-md shadow-gray-900 ${
          !isPowerOn ? "cursor-pointer" : "cursor-no-drop pointer-events-none"
        }`}
      >
        s
      </button>
      <button
        onClick={(e) => {
          handleBtn(e);
          setAction("Closed HH");
          playSound(sounds.clap4);
        }}
        className={`btn p-10 rounded-lg bg-gray-300 m-1.5 text-3xl font-extrabold text-black text-center capitalize transition-all hover:bg-gray-400 shadow-md shadow-gray-900 ${
          !isPowerOn ? "cursor-pointer" : "cursor-no-drop pointer-events-none"
        }`}
      >
        d
      </button>
      <button
        onClick={(e) => {
          handleBtn(e);
          setAction("Punchy Kick");
          playSound(sounds.clap3);
        }}
        className={`btn p-10 rounded-lg bg-gray-300 m-1.5 text-3xl font-extrabold text-black text-center capitalize transition-all hover:bg-gray-400 shadow-md shadow-gray-900 ${
          !isPowerOn ? "cursor-pointer" : "cursor-no-drop pointer-events-none"
        }`}
      >
        z
      </button>
      <button
        onClick={(e) => {
          handleBtn(e);
          setAction("Side Stick");
          playSound(sounds.clap2);
        }}
        className={`btn p-10 rounded-lg bg-gray-300 m-1.5 text-3xl font-extrabold text-black text-center capitalize transition-all hover:bg-gray-400 shadow-md shadow-gray-900 ${
          !isPowerOn ? "cursor-pointer" : "cursor-no-drop pointer-events-none"
        }`}
      >
        x
      </button>
      <button
        onClick={(e) => {
          handleBtn(e);
          setAction("Snare");
          playSound(sounds.clap1);
        }}
        className={`btn p-10 rounded-lg bg-gray-300 m-1.5 text-3xl font-extrabold text-black text-center capitalize transition-all hover:bg-gray-400 shadow-md shadow-gray-900 ${
          !isPowerOn ? "cursor-pointer" : "cursor-no-drop pointer-events-none"
        }`}
      >
        c
      </button>
    </div>
  );
};

export default BankOff;

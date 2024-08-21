// eslint-disable-next-line react/prop-types
const Volume = ({ volume, handleVolumeChange, setAction }) => {
  return (
    <div className="my-4">
      <input
        type="range"
        min={0}
        max={100}
        value={volume}
        onClick={() => {
          setAction(`Volume: ${volume}`);
          setTimeout(() => {
            setAction("");
          }, 1200);
        }}
        onChange={handleVolumeChange}
        className="w-full h-2 mb-6 bg-gray-200 rounded-lg appearance-none cursor-pointer
                  dark:bg-gray-700"
      />
    </div>
  );
};

export default Volume;

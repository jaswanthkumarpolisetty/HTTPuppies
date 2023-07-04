import { useState } from "react";
const Hero = () => {
  const [httpCode, sethttpCode] = useState(404);
  const [url, setUrl] = useState("");
  const handleForm = (e) => {
    e.preventDefault();
    setUrl(`https://http.dog/${httpCode}.jpg`);
  };
  return (
    <>
      <div className="w-[40%] mx-auto flex justify-between items-center gap-4">
        <img src={url} />
      </div>
      <form onSubmit={handleForm}>
        <div>
          <input
            type="text"
            placeholder="Enter http code here"
            onChange={(e) => {
              sethttpCode(e.target.value);
            }}
            className="border-2 border-black px-2 py-1"
          />
        </div>
        <button
          className="bg-sky-400 text-white px-3 py-1 rounded-full"
          type="submit"
        >
          Get Image
        </button>
      </form>
    </>
  );
};

export default Hero;

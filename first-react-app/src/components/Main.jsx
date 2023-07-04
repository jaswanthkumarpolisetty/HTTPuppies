import React, { useState } from "react";

const Main = () => {
  const [httpCode, setHttpCode] = useState(200);
  const [url, setUrl] = useState("https://http.dog/200.jpg");
  const handleForm = (e) => {
    e.preventDefault();
    setUrl(`https://http.dog/${httpCode}.jpg`);
  };

  return (
    <div className="bg-[#a3b18a] text-[#3a5a40] h-[36.4rem] md:h-[36.8rem]md:py-10">
      <div className="w-[95%] md:w-[80%] mx-auto p-2">
        <div className="md:flex flex-row-reverse md:mb-4">
          <div className="flex-1 flex justify-center items-center">
            <div className="flex flex-col justify-center items-center text-center font-['Karla'] text-lg p-2 md:gap-6">
              <h2 className="py-2">
                Are you tired of dealing with boring error messages and
                technical jargon?
              </h2>
              <h2>
                Introducing HTTPuppies, the website that turns your HTTPS status
                codes into delightful doggie moments.
              </h2>
              <h2 className="hidden md:block">
                Ever wondered what your 404 Not Found error would look like as
                an adorable furry friend? Or how about experiencing the joy of a
                200 OK response in the form of a wagging tail? With HTTPuppies,
                you'll never see error codes the same way again!
              </h2>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex justify-center items-center mb-2">
              <img src={url} alt="OK" className="h-[18rem] md:h-[25rem]" />
            </div>
          </div>
        </div>

        <form
          onSubmit={handleForm}
          className="mt-8 flex flex-col justify-center items-center gap-2"
        >
          <input
            type="text"
            className="w-[70%] md:w-[40%] bg-slate-100 px-3 py-1 rounded-sm outline-none"
            placeholder="Enter https code here"
            onChange={(e) => {
              setHttpCode(e.target.value);
            }}
          />
          <button
            type="submit"
            className="text-lg px-3 py-1 bg-[#3a5a40] text-[#a3b18a] rounded-full hover:bg-[#344e41] ease-out duration-200"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Main;

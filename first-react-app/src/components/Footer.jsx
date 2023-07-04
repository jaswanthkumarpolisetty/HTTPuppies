import { AiOutlineTwitter, AiOutlineGithub } from "react-icons/ai";

import { BsLinkedin } from "react-icons/bs";
const Footer = () => {
  const socials = {
    linkedin: "https://www.linkedin.com/in/jaswanth-kumar-polisetty-5980251b4/",
    Github: "https://github.com/jaswanthkumarpolisetty",
    twitter: "https://twitter.com/polisettyjaswa1",
  };
  return (
    <>
      <div className="bg-[#588157] text-[#dad7cd] p-4">
        <div className="w-full md:w-[80%] md:mx-auto px-2 md:px-6 flex justify-center items-center">
          <div className="flex flex-col justify-evenly items-center gap-2">
            <div>
              Developed By
              <span className="font-semibold"> Jaswanth Kumar Polisetty</span>
            </div>
            <div className="flex justify-between items-center gap-4 text-lg">
              <a href={socials.Github} target="_blank">
                <AiOutlineGithub />
              </a>
              <a href={socials.twitter} target="_blank">
                <AiOutlineTwitter />
              </a>
              <a href={socials.linkedin} target="_blank">
                <BsLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

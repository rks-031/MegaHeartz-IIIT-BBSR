import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaYoutube, FaInstagram, FaFileAlt } from "react-icons/fa";
import { FadeIn } from "./FadeIn";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Face of IIIT Bhubaneswar"],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return (
    <FadeIn className="w-full lg:w-3/4 flex flex-col gap-20 items-center text-center lg:text-left">
      <div className="w-full flex flex-col gap-5">
        <br />
        <h1 className="text-6xl font-bold text-white">
          IIIT <span className="text-designColor capitalize">MegaHeartz</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          <span>{text}</span>
          <Cursor cursorStyle="|" cursorColor="#ff014f" />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wider text-white">
          MegaHeartz is more than just a social media entity; it stands as the
          vibrant pulse of our college's identity, dedicated to marketing and
          elevating our brand value. It serves as the dynamic nexus for student
          connectivity, amplifying their voices and experiences across diverse
          digital platforms. <br />
          By curating compelling content and cultivating online communities,
          MegaHeartz enriches the college journey, nurturing a profound sense of
          unity among students.
        </p>
      </div>
      <div className="w-full flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4 text-white">
            Check Out &nbsp;👇
          </h2>
          <div className="flex gap-4">
            <a
              href="https://www.youtube.com/@MegaheartzIIITBhubaneswar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="bannerIcon">
                <FaYoutube />
              </span>
            </a>
            <a
              href="https://www.instagram.com/megaheartz_iiitbh/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="bannerIcon">
                <FaInstagram />
              </span>
            </a>
            <a
              href="https://drive.google.com/uc?export=download&id=16Oi5beLjR8ouvMouEQMVKf9k7mpSBTAP"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="bannerIcon">
                <FaFileAlt />
              </span>
            </a>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

export default LeftBanner;

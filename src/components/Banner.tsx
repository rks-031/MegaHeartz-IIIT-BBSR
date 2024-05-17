import LeftBanner from "./LeftBanner";

const Banner = () => {
  return (
    <section
      id="home"
      className="w-full pt-10 pb-20 flex flex-col items-center border-b-[1px] font-titleFont border-b-gray-700"
    >
      <LeftBanner />
    </section>
  );
};

export default Banner;

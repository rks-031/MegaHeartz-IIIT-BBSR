import { HiArrowRight } from "react-icons/hi";

interface Props {
  title: string;
  des: string;
  icon: React.ReactNode;
}

const Card = ({ title, des, icon }: Props) => {
  return (
    <div className="w-full px-4 md:px-8 lg:px-10 h-50 py-4 rounded-lg shadow-shadowOne flex items-center bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors duration-100 group">
      <div className="h-45 overflow-y-hidden">
        <div className="flex h-full flex-col gap-6 translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
          <div className="w-10 h-8 flex flex-col justify-between">
            {icon ? (
              <span className="text-4xl md:text-5xl text-designColor">
                {icon}
              </span>
            ) : (
              <>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
              </>
            )}
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-lg md:text-xl font-titleFont font-bold text-gray-300">
              {title}
            </h2>
            <p className="text-sm">{des}</p>
            <span className="text-lg text-designColor">
              <HiArrowRight />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

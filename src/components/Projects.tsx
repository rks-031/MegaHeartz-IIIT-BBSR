import Title from "./Title";
import ProjectsCard from "./ProjectsCard";
import {
  freshers,
  GCAftermovie,
  independence,
  janmashtami,
  kalakritiAftermovie,
  lazyDance,
  navratriAftermovie,
  nebulae,
  republic,
  sapphire,
  tasveer,
  tms,
} from "../assets";
import { FadeIn } from "./FadeIn";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-gray-700"
    >
      <FadeIn>
        <div className="flex justify-center items-center text-center">
          <Title title="Checkout our work" des="Our Projects" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
          <ProjectsCard
            title="Independence Day 2023"
            des="A celebration of freedom and unity."
            src={independence}
          />
          <ProjectsCard
            title="Kalakriti"
            des="An artistic showcase of creativity and culture."
            src={kalakritiAftermovie}
          />
          <ProjectsCard
            title="Freshers Intro 2024"
            des="An exciting welcome to the new academic year."
            src={freshers}
          />
          <ProjectsCard
            title="Grand Championship 2023"
            des="A showcase of talent and sportsmanship."
            src={GCAftermovie}
          />
          <ProjectsCard
            title="Janmashtami"
            des="A celebration of Lord Krishna's birth."
            src={janmashtami}
          />
          <ProjectsCard
            title="Lazy-Dance"
            des="An energetic and fun-filled dance performance."
            src={lazyDance}
          />
          <ProjectsCard
            title="Navratri Aftermovie"
            des="A vibrant and colorful celebration of Navratri."
            src={navratriAftermovie}
          />
          <ProjectsCard
            title="Nebulae 2023"
            des="An exploration of the cosmos and beyond."
            src={nebulae}
          />
          <ProjectsCard
            title="Tasveer 2023"
            des="A visual journey through photography."
            src={tasveer}
          />
          <ProjectsCard
            title="The MegaHeartz Show"
            des="An entertaining and captivating showcase."
            src={tms}
          />
          <ProjectsCard
            title="Republic Day 2024"
            des="A patriotic celebration of India's republic."
            src={republic}
          />
          <ProjectsCard
            title="Sapphire 2023"
            des="A gemstone-inspired event of elegance and grace."
            src={sapphire}
          />
        </div>
      </FadeIn>
    </section>
  );
};

export default Projects;

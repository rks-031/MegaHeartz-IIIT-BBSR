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
            youtubeLink="https://youtu.be/K0zPaPCEvag?si=dcwfSanA1jIYFQ_9"
          />
          <ProjectsCard
            title="Kalakriti"
            des="An artistic showcase of creativity and culture."
            src={kalakritiAftermovie}
            youtubeLink="https://youtu.be/GBHYGlLd8Uk?si=TWN0nuao5jaQsBgF"
          />
          <ProjectsCard
            title="Freshers Intro 2024"
            des="An exciting welcome to the new academic year."
            src={freshers}
            youtubeLink="https://youtu.be/ADDnp6mUOZA?si=EOy4ZTuSSGdXIT3D"
          />
          <ProjectsCard
            title="Grand Championship 2023"
            des="A showcase of talent and sportsmanship."
            src={GCAftermovie}
            youtubeLink="https://youtu.be/m3Om6NkRj-g?si=sq_HZi4bL00s1dFv"
          />
          <ProjectsCard
            title="Janmashtami"
            des="A celebration of Lord Krishna's birth."
            src={janmashtami}
            youtubeLink="https://youtu.be/O16c7uutn5g?si=06xP4Igdt9IS0qTB"
          />
          <ProjectsCard
            title="Funny Dance"
            des="An energetic and fun-filled dance performance."
            src={lazyDance}
            youtubeLink="https://youtu.be/iPO0531yuL8?si=T8iUYPDyYAtviI5L"
          />
          <ProjectsCard
            title="Navratri Aftermovie"
            des="A vibrant and colorful celebration of Navratri."
            src={navratriAftermovie}
            youtubeLink="https://youtu.be/5VaF2KvRPCk?si=enQP974yrprBh6xe"
          />
          <ProjectsCard
            title="Nebulae 2023"
            des="An exploration of the cosmos and beyond."
            src={nebulae}
            youtubeLink="https://youtu.be/YsVdg04_Yis?si=8VJCgMQR7DOFYR0w"
          />
          <ProjectsCard
            title="Tasveer 2023"
            des="A visual journey through the lens and a traditional evening."
            src={tasveer}
            youtubeLink="https://youtu.be/2eRIpw7FVrQ?si=3Fbq5IjzeYCEY-Nz"
          />
          <ProjectsCard
            title="The MegaHeartz Show"
            des="An entertaining and captivating showcase."
            src={tms}
            youtubeLink="https://youtube.com/playlist?list=PL5YUk3UMmna6K_Rk_8nfN3qE2NJeDrK9X&si=ooED1bgQdrUlOGrj"
          />
          <ProjectsCard
            title="Republic Day 2024"
            des="A patriotic celebration of India's republic."
            src={republic}
            youtubeLink="https://youtu.be/lDszQFF1gew?si=xxgyNRe-35uNMYe4"
          />
          <ProjectsCard
            title="Sapphire 2023"
            des="A gemstone-inspired event of elegance and grace."
            src={sapphire}
            youtubeLink="https://youtu.be/rQUs-p2rFxQ?si=EjcDCddqoyqwlPrK"
          />
        </div>
      </FadeIn>
    </section>
  );
};

export default Projects;

import {
  FaVideo,
  FaCamera,
  FaEdit,
  FaMobile,
  FaPalette,
  FaMicrophone,
  FaHeadset,
  FaPencilAlt,
  FaUsers,
} from "react-icons/fa";
import Card from "./Card";
import Title from "./Title";
import { FadeIn } from "./FadeIn";

const Feature = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-gray-700"
    >
      <FadeIn>
        <Title title="Our Domains" des="What do we offer" />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
          <Card title="Videography" des=" " icon={<FaVideo />} />
          <Card title="Photography" des=" " icon={<FaCamera />} />
          <Card title="Video Editing" des=" " icon={<FaEdit />} />
          <Card title="Photo Editing" des=" " icon={<FaMobile />} />
          <Card title="Graphic Designing" des=" " icon={<FaPalette />} />
          <Card title="Oration" des=" " icon={<FaMicrophone />} />
          <Card title="Sound Designing" des=" " icon={<FaHeadset />} />
          <Card title="Content Writing" des=" " icon={<FaPencilAlt />} />
          <Card title="Social Media Management" des=" " icon={<FaUsers />} />
        </div>
      </FadeIn>
    </section>
  );
};

export default Feature;

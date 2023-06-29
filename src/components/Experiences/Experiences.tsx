import { ExperienceType } from '@/pages';
import Experience from '../Experience/Experience';

import classes from './Experiences.module.scss';

const Experiences: React.FC<{ experiences: ExperienceType[] }> = ({
  experiences,
}) => {
  const { container, title } = classes;

  return (
    <section id="experiences" className={container}>
      <span className={title}>Experiences</span>
      {experiences.map((experience) => (
        <Experience key={experience.name} experience={experience} />
      ))}
    </section>
  );
};

export default Experiences;

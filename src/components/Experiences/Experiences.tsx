import { ExperienceType } from '@/pages';
import Experience from '../Experience/Experience';

import classes from './Experiences.module.scss';

const Experiences: React.FC<{ experiences: ExperienceType[] }> = ({
  experiences,
}) => {
  const { container, title } = classes;

  return (
    <div className={container}>
      <h3 className={title}>Experiences</h3>
      {experiences.map((experience) => (
        <Experience key={experience.name} experience={experience} />
      ))}
    </div>
  );
};

export default Experiences;

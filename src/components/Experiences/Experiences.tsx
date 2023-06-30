import { ExperienceType } from '@/pages';
import Experience from '../Experience/Experience';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

import classes from './Experiences.module.scss';

const Experiences: React.FC<{ experiences: ExperienceType[] }> = ({
  experiences,
}) => {
  const { container, containerDark, title } = classes;
  const darkMode = useSelector((state: RootState) => state.darkMode);

  return (
    <section id="experiences" className={darkMode ? containerDark : container}>
      <span className={title}>Experiences</span>
      {experiences.map((experience) => (
        <Experience key={experience.name} experience={experience} />
      ))}
    </section>
  );
};

export default Experiences;

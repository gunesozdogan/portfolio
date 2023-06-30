import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

import classes from './Skill.module.css';

const Skill: React.FC<{
  titleText: string;
  descriptionText: string;
  things: { name: string; icon: string }[];
}> = ({ titleText, descriptionText, things }) => {
  const {
    container,
    containerDark,
    title,
    description,
    skills,
    skill,
    icon,
    skillContainer,
  } = classes;

  const darkMode = useSelector((state: RootState) => state.darkMode);
  return (
    <div className={darkMode ? containerDark : container}>
      <span className={title}>{titleText}</span>
      <p className={description}>{descriptionText}</p>
      <div className={skills}>
        {things.map((thing) => {
          return (
            <div key={thing.name} className={skillContainer}>
              <img
                className={icon}
                src={thing.icon}
                alt={thing.name}
                width="40"
                height="40"
              />
              <span className={skill}>{thing.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skill;

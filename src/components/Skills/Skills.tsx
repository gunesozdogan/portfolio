import Skill from './Skill/Skill';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

import classes from './Skills.module.css';

const Skills: React.FC<{
  skillsData: {
    techs: { name: string; icon: string }[];
    tools: { name: string; icon: string }[];
  };
}> = ({ skillsData }) => {
  const { container, containerDark, innerContainer } = classes;
  const darkMode = useSelector((state: RootState) => state.darkMode);

  return (
    <div className={darkMode ? containerDark : container}>
      <div className={innerContainer}>
        <Skill
          titleText="Technologies"
          descriptionText="I like developing fast and responsive web applications"
          things={skillsData.techs}
        />
        <Skill
          titleText="Other Tools"
          descriptionText="Other tools that I use in my daily life"
          things={skillsData.tools}
        />
      </div>
    </div>
  );
};

export default Skills;

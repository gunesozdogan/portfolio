import Skill from './Skill/Skill';
import classes from './Skills.module.css';

const Skills: React.FC<{
  skillsData: {
    techs: { name: string; icon: string }[];
    tools: { name: string; icon: string }[];
  };
}> = ({ skillsData }) => {
  const { container, innerContainer } = classes;

  return (
    <div className={container}>
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

import Skills from '../Skills/Skills';
import { SkillType } from '@/pages';

import classes from './About.module.css';

const About: React.FC<{
  skills: {
    techs: SkillType[];
    tools: SkillType[];
  };
}> = ({ skills }) => {
  const { container, textContainer } = classes;

  return (
    <section id="about" className={container}>
      <div className={textContainer}>
        <h3>Hello I am Güneş. Nice to meet you</h3>
        <p>
          I am a web developer who is passionate about using algorithms and
          creating modern, fast websites. Currently I am learning asynchronous
          javascript and React. My aim is to become a higly skilled full stack
          web developer who can solve challenging problems with different
          algorithms and has advance knowledge on front-end development that can
          provide quick solutions for the web-design.
        </p>
      </div>
      <Skills skillsData={skills} />
    </section>
  );
};

export default About;

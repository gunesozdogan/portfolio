import Header from '@/components/Header/Header';
import About from '@/components/About/About';
import Projects from '@/components/Projects/Projects';
import Experiences from '@/components/Experiences/Experiences';

export type ProjectType = {
  name: string;
  url: string;
  img: string;
  repo: string;
};

export type SkillType = {
  name: string;
  icon: string;
};

export type ExperienceType = {
  name: string;
  date: string;
  title: string;
  description: string[];
};

const HomePage: React.FC<{
  skillsData: {
    techs: SkillType[];
    tools: SkillType[];
  };
  projectsData: ProjectType[];
  experiencesData: ExperienceType[];
}> = ({ skillsData, projectsData, experiencesData }) => {
  return (
    <>
      <Header />
      <About skills={skillsData} />
      <Projects projects={projectsData} />
      <Experiences experiences={experiencesData} />
    </>
  );
};

export default HomePage;

export async function getStaticProps() {
  try {
    const [skillsResponse, projectsResponse, experiencesResponse] =
      await Promise.all([
        fetch(
          'https://portfolio-83517-default-rtdb.firebaseio.com/skills.json'
        ),
        fetch(
          'https://portfolio-83517-default-rtdb.firebaseio.com/projects.json'
        ),
        fetch(
          'https://portfolio-83517-default-rtdb.firebaseio.com/experiences.json'
        ),
      ]);

    let [fetchedSkillsData, fetchedProjectsData, fetchedExperiencesData]: [
      {
        techs: SkillType[];
        tools: SkillType[];
      },
      ProjectType[],
      ExperienceType[]
    ] = await Promise.all([
      skillsResponse.json(),
      projectsResponse.json(),
      experiencesResponse.json(),
    ]);

    const skillsData = Object.values(fetchedSkillsData)[0];
    const projectsData = Object.values(fetchedProjectsData)[0];
    const experiencesData = Object.values(fetchedExperiencesData)[0];

    return {
      props: { skillsData, projectsData, experiencesData },
      revalidate: 1,
    };
  } catch (err) {
    console.log(err);
  }
}

import Header from '@/components/Header/Header';
import About from '@/components/About/About';
import Projects from '@/components/Projects/Projects';

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

const HomePage: React.FC<{
  skillsData: {
    techs: SkillType[];
    tools: SkillType[];
  };
  projectsData: ProjectType[];
}> = ({ skillsData, projectsData }) => {
  return (
    <>
      <Header />
      <About skills={skillsData} />
      <Projects projects={projectsData} />
    </>
  );
};

export default HomePage;

export async function getStaticProps() {
  try {
    const [skillsResponse, projectsResponse] = await Promise.all([
      fetch('https://portfolio-83517-default-rtdb.firebaseio.com/skills.json'),
      fetch(
        'https://portfolio-83517-default-rtdb.firebaseio.com/projects.json'
      ),
    ]);

    let [fetchedSkillsData, fetchedProjectsData]: [
      {
        techs: SkillType[];
        tools: SkillType[];
      },
      ProjectType[]
    ] = await Promise.all([skillsResponse.json(), projectsResponse.json()]);

    const skillsData = Object.values(fetchedSkillsData)[0];
    const projectsData = Object.values(fetchedProjectsData)[0];

    return {
      props: { skillsData, projectsData },
      revalidate: 1,
    };
  } catch (err) {
    console.log(err);
  }
}

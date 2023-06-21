import Header from '@/components/Header/Header';
import About from '@/components/About/About';

const HomePage: React.FC<{
  skillsData: {
    techs: { name: string; icon: string }[];
    tools: { name: string; icon: string }[];
  };
}> = ({ skillsData }) => {
  return (
    <>
      <Header />
      <About skills={skillsData} />
    </>
  );
};

export default HomePage;

export async function getStaticProps() {
  const response = await fetch(
    'https://portfolio-83517-default-rtdb.firebaseio.com/skills.json'
  );
  const data: { techs: string[]; tools: string[] } = await response.json();
  const skillsData = Object.values(data)[0];

  return {
    props: { skillsData },
    revalidate: 1,
  };
}

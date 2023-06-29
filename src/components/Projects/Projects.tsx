import classes from './Projects.module.css';
import { ProjectType } from '@/pages';

const Projects: React.FC<{
  projects: ProjectType[];
}> = ({ projects }) => {
  const {
    container,
    title,
    innerContainer,
    projectContainer,
    lowerContainer,
    projectName,
    buttonContainer,
    webLink,
    repoLink,
    repoIcon,
    githubIcon,
  } = classes;

  return (
    <section id="projects" className={container}>
      <span className={title}>My Personal Projects</span>
      <div className={innerContainer}>
        {projects.map((project) => (
          <div key={project.name} className={projectContainer}>
            <img src={project.img} alt={project.name} />
            <div className={lowerContainer}>
              <span className={projectName}>{project.name}</span>
              <div className={buttonContainer}>
                <a className={webLink} href={project.url}>
                  <svg
                    height="16"
                    viewBox="0 0 16 16"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    className={repoIcon}
                  >
                    <path d="M15,10 L15,14 C15,15.1045695 14.1045695,16 13,16 L2,16 C0.8954305,16 0,15.1045695 0,14 L0,3 C0,1.8954305 0.8954305,1 2,1 L6,1 L6,3 L2,3 L2,14 L13,14 L13,10 L15,10 Z M13.9971001,3.41421356 L7.70420685,9.70710678 L6.28999329,8.29289322 L12.5828865,2 L8.99710007,2 L8.99710007,0 L15.9971001,0 L15.9971001,7 L13.9971001,7 L13.9971001,3.41421356 Z" />
                  </svg>
                </a>
                <a className={repoLink} href={project.repo}>
                  <svg
                    height="512px"
                    id="Layer_1"
                    version="1.1"
                    viewBox="0 0 512 512"
                    width="512px"
                    className={githubIcon}
                  >
                    <style type="text/css"></style>
                    <g>
                      <path
                        className="st0"
                        d="M256,32C132.3,32,32,134.8,32,261.7c0,101.5,64.2,187.5,153.2,217.9c11.2,2.1,15.3-5,15.3-11.1   c0-5.5-0.2-19.9-0.3-39.1c-62.3,13.9-75.5-30.8-75.5-30.8c-10.2-26.5-24.9-33.6-24.9-33.6c-20.3-14.3,1.5-14,1.5-14   c22.5,1.6,34.3,23.7,34.3,23.7c20,35.1,52.4,25,65.2,19.1c2-14.8,7.8-25,14.2-30.7c-49.7-5.8-102-25.5-102-113.5   c0-25.1,8.7-45.6,23-61.6c-2.3-5.8-10-29.2,2.2-60.8c0,0,18.8-6.2,61.6,23.5c17.9-5.1,37-7.6,56.1-7.7c19,0.1,38.2,2.6,56.1,7.7   c42.8-29.7,61.5-23.5,61.5-23.5c12.2,31.6,4.5,55,2.2,60.8c14.3,16.1,23,36.6,23,61.6c0,88.2-52.4,107.6-102.3,113.3   c8,7.1,15.2,21.1,15.2,42.5c0,30.7-0.3,55.5-0.3,63c0,6.1,4,13.3,15.4,11C415.9,449.1,480,363.1,480,261.7   C480,134.8,379.7,32,256,32z"
                      />
                    </g>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

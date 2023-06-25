import { ExperienceType } from '@/pages';
import classes from './Experience.module.scss';
import { useState } from 'react';

const Experience: React.FC<{ experience: ExperienceType }> = ({
  experience,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const switchCollapseHandler = () => {
    setIsCollapsed(!isCollapsed);
  };

  const {
    container,
    upperContainer,
    leftContainer,
    rightContainer,
    lowerContainer,
    title,
    date,
    description,
    collapseIcon,
    hidden,
  } = classes;

  const {
    name: companyName,
    title: jobTitle,
    description: descriptionData,
    date: experienceDate,
  } = experience;

  return (
    <div className={container}>
      <div className={upperContainer}>
        <div className={leftContainer}>
          <span className={title}>
            {jobTitle} - {companyName}
          </span>
        </div>
        <div className={rightContainer}>
          <span className={date}>{experienceDate}</span>
          <button className={collapseIcon} onClick={switchCollapseHandler}>
            <svg
              height="512px"
              id="Layer_1"
              version="1.1"
              viewBox="0 0 512 512"
              width="512px"
            >
              <polygon points="396.6,160 416,180.7 256,352 96,180.7 115.3,160 256,310.5 " />
            </svg>
          </button>
        </div>
      </div>
      <ul className={isCollapsed ? hidden : lowerContainer}>
        {descriptionData.map((descriptionItem) => (
          <li key={descriptionItem} className={description}>
            {descriptionItem}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Experience;

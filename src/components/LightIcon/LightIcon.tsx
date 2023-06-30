import { RootState } from '@/store/store';
import { useSelector } from 'react-redux';

import classes from './LightIcon.module.css';

const MySvg: React.FC = () => {
  const { light, dark } = classes;
  const darkMode = useSelector((state: RootState) => state.darkMode);

  return (
    <svg
      className={darkMode ? dark : light}
      viewBox="0 0 256 256"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect fill="none" height="256" width="256" />
      <path
        d="M216.7,152.6A91.9,91.9,0,0,1,103.4,39.3h0A92,92,0,1,0,216.7,152.6Z"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
    </svg>
  );
};

export default MySvg;

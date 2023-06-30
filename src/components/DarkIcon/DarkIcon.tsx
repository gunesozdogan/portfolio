import { RootState } from '@/store/store';
import { useSelector } from 'react-redux';

import classes from './DarkIcon.module.css';

const DarkIcon = () => {
  const { light, dark } = classes;
  const darkMode = useSelector((state: RootState) => state.darkMode);

  return (
    <svg
      className={darkMode ? dark : light}
      viewBox="0 0 256 256"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect fill="none" height="256" width="256" />
      <circle
        cx="128"
        cy="128"
        fill="none"
        r="60"
        stroke="#66fcf1"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <line
        fill="#66fcf1"
        stroke="#66fcf1"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        x1="128"
        x2="128"
        y1="36"
        y2="16"
      />
      <line
        fill="#66fcf1"
        stroke="#66fcf1"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        x1="62.9"
        x2="48.8"
        y1="62.9"
        y2="48.8"
      />
      <line
        fill="#66fcf1"
        stroke="#66fcf1"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        x1="36"
        x2="16"
        y1="128"
        y2="128"
      />
      <line
        fill="#66fcf1"
        stroke="#66fcf1"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        x1="62.9"
        x2="48.8"
        y1="193.1"
        y2="207.2"
      />
      <line
        fill="#66fcf1"
        stroke="#66fcf1"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        x1="128"
        x2="128"
        y1="220"
        y2="240"
      />
      <line
        fill="#66fcf1"
        stroke="#66fcf1"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        x1="193.1"
        x2="207.2"
        y1="193.1"
        y2="207.2"
      />
      <line
        fill="#66fcf1"
        stroke="#66fcf1"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        x1="220"
        x2="240"
        y1="128"
        y2="128"
      />
      <line
        fill="#66fcf1"
        stroke="#66fcf1"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        x1="193.1"
        x2="207.2"
        y1="62.9"
        y2="48.8"
      />
    </svg>
  );
};

export default DarkIcon;

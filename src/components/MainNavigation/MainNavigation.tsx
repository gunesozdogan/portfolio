import Link from 'next/link';
import Image from 'next/image';
import darkLogo from '../../../public/images/logoDark.png';
import lightLogo from '../../../public/images/logoLight.png';
import LightIcon from '../LightIcon/LightIcon';
import DarkIcon from '../DarkIcon/DarkIcon';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@/store/store';
import { darkModeActions } from '@/store/slices/darkModeSlice';
import { useState } from 'react';

import classes from './MainNavigation.module.css';

const MainNavigation: React.FC = () => {
  const {
    navbar,
    navbarDark,
    containerLeft,
    containerRight,
    containerDark,
    menuImage,
    linkContainer,
    containerToggled,
    hide,
  } = classes;
  const darkMode = useSelector((state: RootState) => state.darkMode);
  const dispatch = useDispatch<AppDispatch>();

  const themeChangeHandler = () => {
    dispatch(darkModeActions.switch());

    toggleOff();
  };

  const [isMenuDisplayed, setIsMenuDisplayed] = useState(false);

  const switchDisplay = () => {
    setIsMenuDisplayed(!isMenuDisplayed);
  };

  const toggleOff = () => {
    setIsMenuDisplayed(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <nav className={darkMode ? `${navbarDark} ${navbar}` : navbar}>
      <div
        className={
          isMenuDisplayed
            ? `${containerToggled} ${containerLeft}`
            : containerLeft
        }
      >
        <Image
          onClick={scrollToTop}
          src={darkMode ? darkLogo : lightLogo}
          alt="logo"
        />
      </div>
      <div
        className={
          darkMode ? `${containerRight} ${containerDark}` : containerRight
        }
      >
        <button className={menuImage} onClick={switchDisplay}>
          <svg
            height="24"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 5H21"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 12H21"
              stroke="currentColor"
              strokeWidth="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 19H21"
              stroke="currentColor"
              strokeWidth="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <div
          className={
            isMenuDisplayed ? linkContainer : `${linkContainer} ${hide}`
          }
        >
          <Link onClick={toggleOff} href="#about">
            About
          </Link>
          <Link onClick={toggleOff} href="#projects">
            Projects
          </Link>
          <Link onClick={toggleOff} href="#experiences">
            Experiences
          </Link>
          <Link onClick={toggleOff} href="#contact">
            Contact
          </Link>
          <button onClick={themeChangeHandler}>
            {darkMode ? <DarkIcon /> : <LightIcon />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default MainNavigation;

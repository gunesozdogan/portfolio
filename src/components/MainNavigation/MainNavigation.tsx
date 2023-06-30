import Link from 'next/link';
import Image from 'next/image';
import darkLogo from '../../../public/images/logoDark.png';
import lightLogo from '../../../public/images/logoLight.png';
import darkIcon from '../../../public/svgs/dark.svg';
import lightIcon from '../../../public/svgs/light.svg';
import classes from './MainNavigation.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@/store/store';
import { darkModeActions } from '@/store/slices/darkModeSlice';

const MainNavigation: React.FC = () => {
  const { navbar, navbarDark, containerLeft, containerRight, containerDark } =
    classes;
  const darkMode = useSelector((state: RootState) => state.darkMode);
  const dispatch = useDispatch<AppDispatch>();

  const themeChangeHandler = () => {
    dispatch(darkModeActions.switch());
  };

  return (
    <nav className={darkMode ? `${navbarDark} ${navbar}` : navbar}>
      <div className={containerLeft}>
        <Image src={darkMode ? darkLogo : lightLogo} alt="logo" />
      </div>
      <div
        className={
          darkMode ? `${containerRight} ${containerDark}` : containerRight
        }
      >
        <Link href="#about">About</Link>
        <Link href="#projects">Projects</Link>
        <Link href="#experiences">Experiences</Link>
        <Link href="#contact">Contact</Link>
        <button onClick={themeChangeHandler}>
          <img
            src={darkMode ? darkIcon.src : lightIcon.src}
            height="30px"
            width="30px"
          />
        </button>
      </div>
    </nav>
  );
};

export default MainNavigation;

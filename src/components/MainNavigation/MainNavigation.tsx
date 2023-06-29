import Link from 'next/link';
import logo from '../../../public/images/logo.png';
import Image from 'next/image';
import darkIcon from '../../../public/svgs/dark.svg';
import lightIcon from '../../../public/svgs/light.svg';
import classes from './MainNavigation.module.css';

const MainNavigation: React.FC = () => {
  const { navbar, containerLeft, containerRight } = classes;

  return (
    <nav className={navbar}>
      <div className={containerLeft}>
        <Image src={logo} alt="logo" />
      </div>
      <div className={containerRight}>
        <Link href="#about">About</Link>
        <Link href="#projects">Projects</Link>
        <Link href="#experiences">Experiences</Link>
        <Link href="#contact">Contact</Link>
        <button>
          <img src={lightIcon.src} height="30px" width="30px" />
        </button>
      </div>
    </nav>
  );
};

export default MainNavigation;

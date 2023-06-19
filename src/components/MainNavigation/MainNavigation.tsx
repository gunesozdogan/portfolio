import Link from 'next/link';
import logo from '../../../public/logo.png';
import Image from 'next/image';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  const { navbar, containerLeft, containerRight } = classes;

  return (
    <nav className={navbar}>
      <div className={containerLeft}>
        <Image src={logo} alt="logo" />
      </div>
      <div className={containerRight}>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
      </div>
    </nav>
  );
};

export default MainNavigation;

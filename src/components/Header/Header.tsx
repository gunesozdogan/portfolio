import classes from './Header.module.css';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import Link from 'next/link';

const Header: React.FC = () => {
  const { container, containerDark } = classes;
  const darkMode = useSelector((state: RootState) => state.darkMode);

  return (
    <div className={darkMode ? containerDark : container}>
      <h1>Frontend Developer</h1>
      <span>
        Exemplary front-end development skills delivering immersive and
        user-centric web experiences
      </span>
      <span>Frontend Developer @ Insider</span>
      <Link href="#contact">Contact Me</Link>
    </div>
  );
};

export default Header;

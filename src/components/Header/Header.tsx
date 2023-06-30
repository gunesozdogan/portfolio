import classes from './Header.module.css';
import Image from 'next/image';
import myPhoto from '../../../public/images/photo-me.jpg';
import myPhotoDark from '../../../public/images/photo-me-dark.jpg';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

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
      <Image src={darkMode ? myPhotoDark : myPhoto} alt="my-photo"></Image>
    </div>
  );
};

export default Header;

import classes from './Header.module.css';
import Image from 'next/image';
import myPhoto from '../../../public/images/photo-me.jpg';

const Header: React.FC = () => {
  const { container } = classes;

  return (
    <div className={container}>
      <h1>Frontend Developer</h1>
      <span>
        Exemplary front-end development skills delivering immersive and
        user-centric web experiences
      </span>
      <Image src={myPhoto} alt="my-photo"></Image>
    </div>
  );
};

export default Header;

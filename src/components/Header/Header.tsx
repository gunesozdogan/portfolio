import classes from './Header.module.css';
import Image from 'next/image';
import myPhoto from '../../../public/photo-me.jpg';

const Header: React.FC = () => {
  const { container } = classes;

  return (
    <div className={container}>
      <h1>Frontend Developer</h1>
      <h3>Passionate about web development</h3>
      <Image src={myPhoto} alt="my-photo"></Image>
    </div>
  );
};

export default Header;

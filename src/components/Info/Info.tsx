import Image from 'next/image';
import myPhoto from '../../../public/photo-me.jpg';
import classes from './Info.module.css';

const Info: React.FC = () => {
  const { container, textContainer } = classes;

  return (
    <div className={container}>
      <Image src={myPhoto} alt="my-photo"></Image>
      <div className={textContainer}>
        <h3>Güneş Oktay Özdoğan</h3>
        <p>
          My name is Güneş and I am a web developer who is passionate about
          using algorithms and creating modern, fast websites. Currently I am
          learning asynchronous javascript and React. My aim is to become a
          higly skilled full stack web developer who can solve challenging
          problems with different algorithms and has advance knowledge on
          front-end development that can provide quick solutions for the
          web-design.
        </p>
      </div>
    </div>
  );
};

export default Info;

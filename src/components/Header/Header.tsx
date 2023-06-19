import classes from './Header.module.css';

const Header = () => {
  const { container } = classes;

  return (
    <div className={container}>
      <h1>Frontend Developer</h1>
      <h3>Passionate about web development</h3>
    </div>
  );
};

export default Header;

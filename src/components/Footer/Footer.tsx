import classes from './Footer.module.css';

const Footer: React.FC = () => {
  const {
    footer,
    container,
    title,
    description,
    email,
    linkContainer,
    link,
    info,
  } = classes;
  return (
    <footer className={footer}>
      <div className={container}>
        <span className={title}>CONTACT ME</span>
        <p className={description}>
          Feel free to reach out to me. I would love to connect and discuss
          exciting opportunities!
        </p>
        <span className={email}>gunes.ozdogan95@gmail.com</span>
        <div className={linkContainer}>
          <a
            className={link}
            href="https://www.linkedin.com/in/gunes-oktay-ozdogan/"
          >
            <svg height="100%" version="1.1" viewBox="0 0 512 512" width="100%">
              <path d="M256,0c141.29,0 256,114.71 256,256c0,141.29 -114.71,256 -256,256c-141.29,0 -256,-114.71 -256,-256c0,-141.29 114.71,-256 256,-256Zm-80.037,399.871l0,-199.921l-66.464,0l0,199.921l66.464,0Zm239.62,0l0,-114.646c0,-61.409 -32.787,-89.976 -76.509,-89.976c-35.255,0 -51.047,19.389 -59.889,33.007l0,-28.306l-66.447,0c0.881,18.757 0,199.921 0,199.921l66.446,0l0,-111.65c0,-5.976 0.43,-11.95 2.191,-16.221c4.795,-11.935 15.737,-24.299 34.095,-24.299c24.034,0 33.663,18.34 33.663,45.204l0,106.966l66.45,0Zm-272.403,-296.321c-22.74,0 -37.597,14.95 -37.597,34.545c0,19.182 14.405,34.544 36.717,34.544l0.429,0c23.175,0 37.6,-15.362 37.6,-34.544c-0.43,-19.595 -14.424,-34.545 -37.149,-34.545Z" />
            </svg>
          </a>
          <a className={link} href="https://github.com/gunesozdogan">
            <svg id="Layer_1" version="1.1" viewBox="0 0 512 512">
              <style type="text/css"></style>
              <g>
                <path
                  className="st0"
                  d="M256,32C132.3,32,32,134.8,32,261.7c0,101.5,64.2,187.5,153.2,217.9c11.2,2.1,15.3-5,15.3-11.1   c0-5.5-0.2-19.9-0.3-39.1c-62.3,13.9-75.5-30.8-75.5-30.8c-10.2-26.5-24.9-33.6-24.9-33.6c-20.3-14.3,1.5-14,1.5-14   c22.5,1.6,34.3,23.7,34.3,23.7c20,35.1,52.4,25,65.2,19.1c2-14.8,7.8-25,14.2-30.7c-49.7-5.8-102-25.5-102-113.5   c0-25.1,8.7-45.6,23-61.6c-2.3-5.8-10-29.2,2.2-60.8c0,0,18.8-6.2,61.6,23.5c17.9-5.1,37-7.6,56.1-7.7c19,0.1,38.2,2.6,56.1,7.7   c42.8-29.7,61.5-23.5,61.5-23.5c12.2,31.6,4.5,55,2.2,60.8c14.3,16.1,23,36.6,23,61.6c0,88.2-52.4,107.6-102.3,113.3   c8,7.1,15.2,21.1,15.2,42.5c0,30.7-0.3,55.5-0.3,63c0,6.1,4,13.3,15.4,11C415.9,449.1,480,363.1,480,261.7   C480,134.8,379.7,32,256,32z"
                />
              </g>
            </svg>
          </a>
        </div>
      </div>
      <span className={info}>
        Built by me with <b>Next.js</b> and <b>Typescript</b>
      </span>
    </footer>
  );
};

export default Footer;

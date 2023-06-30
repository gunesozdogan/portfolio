import MainNavigation from '../MainNavigation/MainNavigation';
import { ReactNode } from 'react';
import Head from 'next/head';
import classes from './Layout.module.scss';

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Güneş Oktay Özdoğan | React & Typescript Developer</title>
        <meta
          name="description"
          content="Browse a huge list of highly active React meetups!"
        />
      </Head>
      <div className={classes.container}>
        <MainNavigation />
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;

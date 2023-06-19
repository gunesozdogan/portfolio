import MainNavigation from '../MainNavigation/MainNavigation';
import { ReactNode } from 'react';
import Head from 'next/head';

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>My Portfolio</title>
        <meta
          name="description"
          content="Browse a huge list of highly active React meetups!"
        />
      </Head>
      <div>
        <MainNavigation />
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;

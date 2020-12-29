import React, { FC } from 'react';
import Header from './Header';
import Head from 'next/head';
interface LayoutProps {
  title?: string;
  description: string;
}
const Layout: FC<LayoutProps> = ({ children, title }) => {
  return (
    <div>
      <Head>
        <title> {title || 'Lucas Ignacio'} </title>
      </Head>
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;

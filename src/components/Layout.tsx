import React, { FC } from 'react';
import Header from './Header';

const Layout: FC = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;

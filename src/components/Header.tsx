import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <Link href={'/'}>
        <a style={{ marginRight: 5 }}>Index</a>
      </Link>
      <Link href={'/users'}>
        <a style={{ marginRight: 5 }}>Users</a>
      </Link>
      <Link href={'/github'}>
        <a style={{ marginRight: 5 }}>Github</a>
      </Link>
    </header>
  );
};

export default Header;

import React from 'react';
import Head from './Head';
import HeaderNavbar from './HeaderNavbar';
import Search from './Search';

const Header = () => {
  const headerStyle = {
    background:'#ffff'
  }
  return (
    <div className='shadow-sm headerStyle' style={headerStyle}>
      <Head></Head>
      <Search></Search>
      <HeaderNavbar></HeaderNavbar>
    </div>
  );
};

export default Header;
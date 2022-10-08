import React, { useState } from 'react';
import { useEffect } from 'react';
import Head from './Head';
import HeaderNavbar from './HeaderNavbar';
import Search from './Search';
const headerStyle = {
  background:'#ffff'
}


const Header = () => {

  const [fixedTop , setFiexdTop] = useState('')

   window.addEventListener('scroll', () =>{
    const scrollSize = window.scrollY    
    if(scrollSize > 80){ 
      setFiexdTop('fixed-top shadow-lg ')
    }
    if(scrollSize < 80){
       setFiexdTop('')
      }
} )



  return (
    <div className='shadow-sm headerStyle' style={headerStyle}>
      <Head></Head>
      <div className={`${fixedTop}`} style={{background:'#ffff'}}>
      <Search fixedTop={fixedTop} key={fixedTop}></Search>
      </div>
      <HeaderNavbar></HeaderNavbar>
    </div>
  );
};

export default Header;
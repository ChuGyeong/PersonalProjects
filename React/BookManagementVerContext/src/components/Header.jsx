import React, { memo } from 'react';
import NavBar from './NavBar';
import { HeaderContainer } from '../styled/bookStyle';
import { Link } from 'react-router-dom';

const Header = memo(() => {
   return (
      <HeaderContainer>
         <h1>
            <Link to="/">
               <span>BOOK</span>
               <span>CAFE</span>
            </Link>
         </h1>
         <NavBar />
      </HeaderContainer>
   );
});

export default Header;

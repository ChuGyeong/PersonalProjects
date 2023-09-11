import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = memo(() => {
   const { authed } = useSelector(state => state.user);
   return (
      <header>
         <h2>직원명단</h2>
         <ul className="menus">
            <li>
               <Link to={'/'}>Home</Link>
            </li>
            {authed && (
               <li>
                  <Link to={'/add'}>Add</Link>
               </li>
            )}
            <li>{authed ? <Link to={'/logout'}>Logout</Link> : <Link to={'/login'}>Login</Link>}</li>
         </ul>
      </header>
   );
});

export default Header;

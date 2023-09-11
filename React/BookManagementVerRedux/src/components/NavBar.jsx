import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const NavBar = memo(() => {
   const { authed } = useSelector(state => state.user);
   return (
      <ul>
         <li>
            <Link to="/">Home</Link>
         </li>
         {authed && (
            <li>
               <Link to="/add">Add</Link>
            </li>
         )}
         <li>{authed ? <Link to="/logout">Logout</Link> : <Link to="/login">Login</Link>}</li>
      </ul>
   );
});

export default NavBar;

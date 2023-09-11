import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const NavBar = memo(() => {
   const { authed } = useAuth();
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

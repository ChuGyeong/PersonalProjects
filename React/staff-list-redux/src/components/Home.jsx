import React, { memo } from 'react';
import StaffList from './StaffList';

const Home = memo(() => {
   return (
      <div>
         <h2>Home</h2>
         <StaffList />
      </div>
   );
});

export default Home;

import React, { memo } from 'react';
import StaffItem from './StaffItem';
import { useSelector } from 'react-redux';

const StaffList = memo(() => {
   const { staffData } = useSelector(state => state.staff);

   return (
      <ul className="staff-list">
         {staffData.map(item => (
            <StaffItem key={item.id} item={item} />
         ))}
      </ul>
   );
});

export default StaffList;

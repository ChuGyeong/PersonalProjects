import React from 'react';
import TheGloryItem from './TheGloryItem/TheGloryItem';
import './TheGloryList.scss';

const TheGloryList = ({ data, onShow }) => {
   return (
      <ul className="list">
         {data.map(item => (
            <TheGloryItem key={item.id} item={item} onShow={onShow} />
         ))}
      </ul>
   );
};

export default TheGloryList;

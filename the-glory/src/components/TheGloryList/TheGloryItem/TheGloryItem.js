import React from 'react';
import './TheGloryItem.scss';

const TheGloryItem = ({ item, onShow }) => {
   const { id, name, imgUrl, isChk } = item;
   return (
      <li
         data-id={id}
         className={isChk ? 'on' : ''}
         onClick={() => {
            onShow(id);
         }}>
         <div className="imgBox">
            <img src={imgUrl} alt={name} />
         </div>
         <p>{name}</p>
      </li>
   );
};

export default TheGloryItem;

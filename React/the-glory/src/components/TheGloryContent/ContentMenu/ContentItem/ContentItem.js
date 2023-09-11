import React from 'react';
import './ContentItem.scss';

const ContentItem = ({ item, onMenu }) => {
   const { title, isChk } = item;
   return (
      <li className={isChk ? 'on' : ''} onClick={() => onMenu(title)}>
         {title}
      </li>
   );
};

export default ContentItem;

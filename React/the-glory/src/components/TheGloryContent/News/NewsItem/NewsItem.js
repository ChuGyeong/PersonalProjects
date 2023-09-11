import React, { useEffect } from 'react';
import './NewsItem.scss';

const NewsItem = ({ item, onOpen }) => {
   const { title, des, imgurl, isChk, id } = item;

   return (
      <li>
         <h3 onClick={() => onOpen(id)}>
            {title}
            <i className={isChk ? 'xi-angle-down' : 'xi-angle-up'}></i>
         </h3>
         <div className={`details ${isChk ? 'on' : ''}`}>
            <img src={imgurl} alt={title} />
            <p>{des}</p>
         </div>
      </li>
   );
};

export default NewsItem;

import React, { useEffect, useState } from 'react';
import './News.scss';
import NewsItem from './NewsItem/NewsItem';

const News = ({ news }) => {
   const [isList, setIsList] = useState(news);

   const onOpen = id => {
      setIsList(isList.map(item => (item.id === id ? { ...item, isChk: true } : { ...item, isChk: false })));
   };
   return (
      <div className="news">
         <ul>
            {isList.map(item => (
               <NewsItem key={item.id} item={item} onOpen={onOpen} />
            ))}
         </ul>
      </div>
   );
};

export default News;

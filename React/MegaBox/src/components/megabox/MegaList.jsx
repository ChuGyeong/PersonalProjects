import React, { memo } from 'react';
import { MegaListBox } from '../styled/MegaStyle';
import MegaItem from './MegaItem';

const MegaList = memo(({ data, onPopUp, showLike, setData }) => {
   const nameSort = () => {
      const sortedData = [...data].sort((a, b) => {
         if (a.movieNm > b.movieNm) {
            return 1;
         }
         if (a.movieNm < b.movieNm) {
            return -1;
         }
         return 0;
      });
      setData(sortedData);
   };
   const likeSort = () => {
      const sortedData = [...data].sort((a, b) => {
         if (a.likeCnt > b.likeCnt) {
            return -1;
         }
         if (a.likeCnt < b.likeCnt) {
            return 1;
         }
         return 0;
      });
      setData(sortedData);
   };

   return (
      <MegaListBox>
         <span onClick={nameSort}>가나다순</span>
         <span onClick={likeSort}>좋아요순</span>
         <span>{data.length}개의 영화가 검색되었습니다.</span>
         <ul>
            {data.map(item => (
               <MegaItem key={item.movieCd} item={item} onPopUp={onPopUp} showLike={showLike} />
            ))}
         </ul>
      </MegaListBox>
   );
});

export default MegaList;

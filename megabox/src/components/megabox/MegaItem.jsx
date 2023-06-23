import React, { memo } from 'react';
import { MegaListItem } from '../styled/MegaStyle';
import Numeral from 'numeral';

const MegaItem = memo(({ item, onPopUp, showLike }) => {
   const { movieNm, salesShare, imageURL, openDt, agelimit, isImax, islike, movieCd, likeCnt } = item;
   return (
      <MegaListItem>
         <img src={imageURL} alt={movieNm} onClick={() => onPopUp(item)} />
         <h3>
            <img src={agelimit} alt="agelimit" />
            {movieNm}
         </h3>
         <div>
            <p>예매율 {salesShare}%</p>
            <p>개봉일 {openDt}</p>
         </div>
         <div className="btn-wrap">
            <button onClick={() => showLike(movieCd)}>
               {islike ? <i className="xi-heart"></i> : <i className="xi-heart-o"></i>}
               {Math.floor(likeCnt / 100) / 10}k
            </button>
            <button>예매</button>
            {isImax && (
               <button>
                  <img src="./images/dolby.png" alt="dolby" />
               </button>
            )}
         </div>
      </MegaListItem>
   );
});

export default MegaItem;

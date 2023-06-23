import React, { memo } from 'react';
import { MegaModalBox } from '../styled/MegaStyle';
import Numeral from 'numeral';

const MegaModal = memo(({ modalItem, setIsModal }) => {
   const {
      movieNm,
      openDt,
      salesShare,
      imageURL,
      rank,
      rankOldAndNew,
      rankInten,
      salesAmt,
      salesInten,
      salesChange,
      salesAcc,
      audiCnt,
      audiInten,
      audiAcc,
      audiChange,
      scrnCnt,
      showCnt,
      videoKey,
      story,
   } = modalItem;
   return (
      <MegaModalBox bgimg={imageURL}>
         <div
            className="bg"
            onClick={() => {
               setIsModal(false);
            }}></div>
         <article>
            <div className="details">
               <div className="iframe-box">
                  <iframe
                     width="560"
                     height="315"
                     src={`https://www.youtube.com/embed/${videoKey}`}
                     title="YouTube video player"
                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                     allowFullScreen></iframe>
               </div>
               <div className="text-box">
                  <h3>{movieNm}</h3>
                  <span>박스 오피스 순위 : {rank}</span>
                  <span>전일 대비 순위 : {rankInten}</span>
                  <span>기존/신규 : {rankOldAndNew === 'OLD' ? '기존' : '신규'}</span>
                  <span>개봉일 : {openDt}</span>
                  <span>누적 매출액 : {Numeral(salesAcc).format(0, 0)}</span>
                  <span>해당 일의 관객수 : {Numeral(audiCnt).format(0, 0)}</span>
                  <span>누적 관객수 : {Numeral(audiAcc).format(0, 0)}</span>
                  <span>해당 일자에 상영한 스크린수 : {Numeral(scrnCnt).format(0, 0)}</span>
                  <span>해당 일자에 상영된 횟수 : {Numeral(showCnt).format(0, 0)}</span>
                  <span>{story}</span>
               </div>
            </div>
         </article>
      </MegaModalBox>
   );
});

export default MegaModal;

import React, { useEffect, useState } from 'react';
import { MegaContainer } from '../styled/MegaStyle';
import MegaTabs from './MegaTabs';
import MegaSearch from './MegaSearch';
import MegaList from './MegaList';
import axios from 'axios';
import MegaModal from './MegaModal';

const Mega = () => {
   const [data, setData] = useState([]);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(null);
   const [originData, setOriginData] = useState([]);
   const [isModal, setIsModal] = useState(false);
   const [modalItem, setModalItem] = useState();

   //  데이터 가져오기
   useEffect(() => {
      const url = `https://gist.githubusercontent.com/ChuGyeong/0047fa1e3ba9e0e95c9dac427cb0719d/raw/4413a1dc9189b80d3ce4a9d280d82ca63470fa9e/megabox.json`;
      axios
         .get(url)
         .then(res => {
            setData(res.data);
            setLoading(true);
            setError(null);
            setOriginData(res.data);
         })
         .catch(error => {
            setData([]);
            setOriginData([]);
            setLoading(false);
            setError('api 주소를 확인하세요');
         });
   }, []);

   //  검색
   const onSearch = text => {
      setData(originData.filter(item => item.movieNm.includes(text)));
   };

   //  팝업창
   const onPopUp = item => {
      setIsModal(true);
      setModalItem(item);
   };

   const menus = ['ALL', ...new Set(originData.map(item => item.isScreening))];
   // 상영여부 확인
   const onIsScreen = name => {
      if (name === 'ALL') {
         setData(originData);
      } else {
         setData(originData.filter(item => item.isScreening === name));
      }
   };

   const showLike = id => {
      setData(
         data.map(item =>
            item.movieCd === id
               ? { ...item, islike: !item.islike, likeCnt: item.islike ? item.likeCnt - 1 : item.likeCnt + 1 }
               : item,
         ),
      );
      setOriginData(
         originData.map(item =>
            item.movieCd === id
               ? { ...item, islike: !item.islike, likeCnt: item.islike ? item.likeCnt - 1 : item.likeCnt + 1 }
               : item,
         ),
      );
   };

   return (
      <div className="wrap" style={{ width: '100%', position: 'relative' }}>
         <MegaContainer>
            <h1>
               <a href="#">
                  <img src="./images/logo.png" alt="" />
               </a>
            </h1>
            <MegaTabs menus={menus} onIsScreen={onIsScreen} />
            <MegaSearch onSearch={onSearch} />
            <MegaList data={data} onPopUp={onPopUp} showLike={showLike} setData={setData} />
            {isModal && <MegaModal modalItem={modalItem} setIsModal={setIsModal} />}
         </MegaContainer>
      </div>
   );
};

export default Mega;

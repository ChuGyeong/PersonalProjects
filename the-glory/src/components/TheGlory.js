import TheGloryList from './TheGloryList/TheGloryList';
import dataList from '../assets/api/dataList';
import './TheGlory.scss';
import { useState } from 'react';
import TheGloryContent from './TheGloryContent/TheGloryContent';

const Main = () => {
   const [data, setData] = useState(dataList);

   const onShow = id => {
      setData(data.map(item => (item.id === id ? { ...item, isChk: true } : { ...item, isChk: false })));
   };

   return (
      <div className="wrap">
         <div className="container">
            <h2>더 글로리</h2>
            <TheGloryList data={data} onShow={onShow} />
            <TheGloryContent data={data.find(item => item.isChk)} />
         </div>
      </div>
   );
};

export default Main;

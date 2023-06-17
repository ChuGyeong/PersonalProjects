import ListBox from './ListBox';
import dataList from '../assets/api/dataList';
import './style.scss';

const Main = () => {
   return (
      <div className="wrap">
         <div className="content">
            <div className="inner">
               <h3>더 글로리</h3>
               <ListBox dataList={dataList} />
            </div>
         </div>
      </div>
   );
};

export default Main;

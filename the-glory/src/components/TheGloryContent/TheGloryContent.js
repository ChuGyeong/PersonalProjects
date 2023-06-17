import ContentMenu from './ContentMenu/ContentMenu';
import Character from './Character/Character';
import Profile from './Profile/Profile';
import WorkActivity from './WorkActivity/WorkActivity';
import News from './News/News';
import './TheGloryContent.scss';
import { useEffect, useState } from 'react';

const TheGloryContent = ({ data }) => {
   const [menus, setMenus] = useState([
      { title: '캐릭터소개', isChk: true },
      { title: '프로필', isChk: false },
      { title: '작품활동', isChk: false },
      { title: '관련뉴스', isChk: false },
   ]);

   const onMenu = title => {
      setMenus(menus.map(item => (item.title === title ? { ...item, isChk: true } : { ...item, isChk: false })));
   };

   useEffect(() => {
      setMenus(menus.map(item => (item.title === '캐릭터소개' ? { ...item, isChk: true } : { ...item, isChk: false })));
      return;
   }, [data]);

   return (
      <div className="content">
         <ContentMenu menus={menus} onMenu={onMenu} />
         {menus[0].isChk && <Character data={data} />}
         {menus[1].isChk && <Profile profile={data.profile} />}
         {menus[2].isChk && <WorkActivity workActivity={data.workActivity} />}
         {menus[3].isChk && <News news={data.news} />}
      </div>
   );
};

export default TheGloryContent;

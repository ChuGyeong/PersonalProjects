import ContentItem from './ContentItem/ContentItem';
import './ContentMenu.scss';

const ContentMenu = ({ menus, onMenu }) => {
   return (
      <ul className="menu">
         {menus.map((item, idx) => (
            <ContentItem key={idx} item={item} onMenu={onMenu} />
         ))}
      </ul>
   );
};

export default ContentMenu;

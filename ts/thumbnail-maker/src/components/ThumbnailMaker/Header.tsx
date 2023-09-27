import React, { memo } from 'react';
import { HeaderContainer } from '../styled/ThumbnailStyle';

const Header = memo(() => {
   return (
      <HeaderContainer>
         <div className="inner">
            <h1>thumbnail maker</h1>
            <div className="author">
               <a href="https://github.com/ChuGyeong" target="_blank">
                  <img src="https://avatars.githubusercontent.com/u/121862169?v=4" alt="" />
                  <span>ChuGyeong</span>
               </a>
            </div>
         </div>
      </HeaderContainer>
   );
});

export default Header;

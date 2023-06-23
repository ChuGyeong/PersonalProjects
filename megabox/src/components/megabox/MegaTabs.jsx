import React, { memo } from 'react';
import { MegaTabBox } from '../styled/MegaStyle';
import { useState } from 'react';

const MegaTabs = memo(({ menus, onIsScreen }) => {
   return (
      <MegaTabBox>
         {menus.map(item => (
            <li onClick={() => onIsScreen(item)} key={item}>
               {item}
            </li>
         ))}
      </MegaTabBox>
   );
});

export default MegaTabs;

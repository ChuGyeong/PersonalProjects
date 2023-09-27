import React, { memo } from 'react';
import ThumbnailMaker from './components/ThumbnailMaker/ThumbnailMaker';
import GlobalStyle from './components/styled/Global';

const App = memo(() => {
   return (
      <>
         <GlobalStyle />
         <ThumbnailMaker />
      </>
   );
});

export default App;

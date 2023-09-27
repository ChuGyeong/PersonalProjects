import React, { memo } from 'react';
import Header from './Header';
import Container from './Container';
import { ThumbnailMakerContainer } from '../styled/ThumbnailStyle';

const ThumbnailMaker = memo(() => {
   return (
      <ThumbnailMakerContainer>
         <Header />
         <Container />
      </ThumbnailMakerContainer>
   );
});

export default ThumbnailMaker;

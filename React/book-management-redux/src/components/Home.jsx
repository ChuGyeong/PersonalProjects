import React, { memo } from 'react';
import { BookContainer } from '../styled/bookStyle';
import BookList from './BookList';

const Home = memo(() => {
   return (
      <BookContainer>
         <BookList />
      </BookContainer>
   );
});

export default Home;

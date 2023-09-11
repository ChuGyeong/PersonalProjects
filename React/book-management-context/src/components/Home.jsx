import React, { memo } from 'react';
import { BookContainer } from '../styled/bookStyle';
import BookList from './BookList';
import { useAuth } from '../context/AuthContext';

const Home = memo(() => {
   const { authed } = useAuth();
   return <BookContainer>{authed && <BookList />}</BookContainer>;
});

export default Home;

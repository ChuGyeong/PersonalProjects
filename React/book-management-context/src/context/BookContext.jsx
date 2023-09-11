import React, { createContext, memo, useContext, useEffect, useMemo, useReducer, useState } from 'react';
import { BookReducer } from './BookReducer';

const BookContext = createContext();
export const useBook = () => useContext(BookContext);

const initialState = {
   data: localStorage.getItem('data')
      ? JSON.parse(localStorage.getItem('data'))
      : [
           { id: 1, title: '꿀벌의 예언 1', genre: '소설', author: '베르나르 베르베르 ', bookcode: '00001' },
           { id: 2, title: '세이노의 가르침', genre: '자기계발', author: '세이노(SayNo)', bookcode: '00002' },
           { id: 3, title: '나는 죽을 때까지 지적이고 싶다', genre: '에세이', author: '양원근', bookcode: '00003' },
           { id: 4, title: '메리골드 마음 세탁소', genre: '소설', author: '윤정은', bookcode: '00004' },
           { id: 5, title: '꿀벌의 예언 2', genre: '소설', author: '베르나르 베르베르', bookcode: '00005' },
           { id: 6, title: '상처받지 않는 관계의 비밀', genre: '자기계발', author: '최리나', bookcode: '00006' },
           { id: 7, title: '명탐정 코난 103', genre: '만화', author: 'Gosho Aoyama', bookcode: '00007' },
           {
              id: 8,
              title: '권력과 진보',
              genre: '정치/사회',
              author: '대런 아세모글루',
              bookcode: '00008',
           },
           { id: 9, title: '매스커레이드 게임', genre: '소설', author: '히가시노 게이고', bookcode: '00009' },
           {
              id: 10,
              title: '연수',
              genre: '소설',
              author: '장류진',
              bookcode: '00010',
           },
        ],
};

const BookProvider = memo(({ children }) => {
   const [state, dispatch] = useReducer(BookReducer, initialState);
   const { data } = state;

   const [no, setNo] = useState(localStorage.getItem('no') ? JSON.parse(localStorage.getItem('no')) : data.length + 1);

   const onAdd = text => {
      const newNo = no + 1;
      setNo(newNo);
      localStorage.setItem('no', JSON.stringify(newNo));
      dispatch({ type: 'ADD', text, id: no });
   };
   const onDel = id => {
      dispatch({ type: 'DEL', id });
   };
   const onEdit = current => {
      dispatch({ type: 'EDIT', current });
   };

   useEffect(() => {
      localStorage.setItem('data', JSON.stringify(data));
   }, [data]);

   const value = useMemo(() => ({ data, onAdd, onDel, onEdit }), [data, onAdd, onDel, onEdit]);
   return <BookContext.Provider value={value}>{children}</BookContext.Provider>;
});

export default BookProvider;

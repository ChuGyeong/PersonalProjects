import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   text: { title: '', genre: '', author: '', bookcode: '' },
   bookData: localStorage.getItem('bookData')
      ? JSON.parse(localStorage.getItem('bookData'))
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

let bookId = localStorage.getItem('bookId') ? JSON.parse(localStorage.getItem('bookId')) : 11;

export const bookSlice = createSlice({
   name: 'book',
   initialState,
   reducers: {
      changeInput(state, action) {
         const { name, value } = action.payload;
         state.text = { ...state.text, [name]: value };
      },
      addBook(state, action) {
         state.bookData = [
            ...state.bookData,
            {
               id: bookId++,
               title: action.payload.title,
               genre: action.payload.genre,
               author: action.payload.author,
               bookcode: action.payload.bookcode,
            },
         ];
         localStorage.setItem('bookData', JSON.stringify(state.bookData));
         localStorage.setItem('bookId', bookId);
         state.text = {};
      },
      delBook(state, action) {
         state.bookData = state.bookData.filter(item => item.id !== action.payload);
         localStorage.setItem('bookData', JSON.stringify(state.bookData));
      },
      editBook(state, action) {
         state.bookData = state.bookData.map(item => (item.id === action.payload.id ? action.payload : item));
         localStorage.setItem('bookData', JSON.stringify(state.bookData));
      },
   },
});
export const { addBook, changeInput, delBook, editBook } = bookSlice.actions;
export default bookSlice.reducer;

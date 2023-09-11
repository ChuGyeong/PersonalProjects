import React, { memo, useState } from 'react';
import { BookForm } from '../styled/bookStyle';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addBook, changeInput } from '../store/modules/bookSlice';

const Addbook = memo(() => {
   const { text } = useSelector(state => state.book);
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const showHome = () => {
      navigate('/');
   };

   const onSubmit = e => {
      e.preventDefault();
      if (!text.title.trim() || !text.genre.trim() || !text.author.trim() || !text.bookcode.trim()) return;
      dispatch(addBook(text));
      navigate('/');
   };

   return (
      <BookForm>
         <h3>추가</h3>
         <form className="book-form" onSubmit={onSubmit}>
            <p>
               <label>제목</label>
               <input
                  type="text"
                  name="title"
                  placeholder="북 제목 입력 (개미)"
                  onChange={e => dispatch(changeInput({ name: e.target.name, value: e.target.value }))}
                  value={text.title}
               />
            </p>
            <p>
               <label>장르</label>
               <input
                  type="text"
                  name="genre"
                  placeholder="북 장르 입력 (소설)"
                  onChange={e => dispatch(changeInput({ name: e.target.name, value: e.target.value }))}
                  value={text.genre}
               />
            </p>
            <p>
               <label>저자</label>
               <input
                  type="text"
                  name="author"
                  placeholder="저자 입력 (임수정)"
                  onChange={e => dispatch(changeInput({ name: e.target.name, value: e.target.value }))}
                  value={text.author}
               />
            </p>
            <p>
               <label>책 코드</label>
               <input
                  type="text"
                  name="bookcode"
                  placeholder="책 코드 입력 (00001)"
                  onChange={e => dispatch(changeInput({ name: e.target.name, value: e.target.value }))}
                  value={text.bookcode}
               />
            </p>
            <div className="btn-wrap">
               <button type="submit">추가</button>
               <button onClick={showHome}>취소</button>
            </div>
         </form>
      </BookForm>
   );
});

export default Addbook;

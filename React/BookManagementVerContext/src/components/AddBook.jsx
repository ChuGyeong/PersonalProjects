import React, { memo, useState } from 'react';
import { BookForm } from '../styled/bookStyle';
import { useBook } from '../context/BookContext';
import { useNavigate } from 'react-router-dom';

const Addbook = memo(() => {
   const { onAdd } = useBook();
   const [text, setText] = useState({ title: '', genre: '', author: '', bookcode: '' });
   const navigate = useNavigate();

   const showHome = () => {
      navigate('/');
   };

   const changeInput = e => {
      const { name, value } = e.target;
      setText({ ...text, [name]: value });
      console.log(text);
   };

   const onSubmit = e => {
      e.preventDefault();
      if (!text.title.trim() || !text.genre.trim() || !text.author.trim() || !text.bookcode.trim()) return;
      onAdd(text);
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
                  onChange={changeInput}
                  value={text.title}
               />
            </p>
            <p>
               <label>장르</label>
               <input
                  type="text"
                  name="genre"
                  placeholder="북 장르 입력 (소설)"
                  onChange={changeInput}
                  value={text.genre}
               />
            </p>
            <p>
               <label>저자</label>
               <input
                  type="text"
                  name="author"
                  placeholder="저자 입력 (임수정)"
                  onChange={changeInput}
                  value={text.author}
               />
            </p>
            <p>
               <label>책 코드</label>
               <input
                  type="text"
                  name="bookcode"
                  placeholder="책 코드 입력 (00001)"
                  onChange={changeInput}
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

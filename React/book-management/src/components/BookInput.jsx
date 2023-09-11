import React, { useState } from 'react';

const BookInput = ({ onAdd, book, setBook }) => {
   const { title, author, bookcode } = book;

   const changeInput = e => {
      const { name, value } = e.target;
      setBook({ ...book, [name]: value });
   };

   const onSubmit = e => {
      e.preventDefault();
      onAdd(book);
      setBook({ title: '', author: '', bookcode: '' });
   };

   return (
      <div className="book-input">
         <form className="book-form" onSubmit={onSubmit}>
            <p>
               <label>장르</label>
               <input type="text" name="title" value={title} placeholder="북 장르입력 (소설)" onChange={changeInput} />
            </p>
            <p>
               <label>저자</label>
               <input
                  type="text"
                  name="author"
                  value={author}
                  placeholder="저자 입력 (임수정)"
                  onChange={changeInput}
               />
            </p>
            <p>
               <label>책 코드</label>
               <input
                  type="text"
                  name="bookcode"
                  value={bookcode}
                  placeholder="책 코드 입력 (00001)"
                  onChange={changeInput}
               />
            </p>
            <button type="submit">추가</button>
         </form>
      </div>
   );
};

export default BookInput;

import React, { memo, useEffect, useState } from 'react';
import { BookForm } from '../styled/bookStyle';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { changeInput, editBook } from '../store/modules/bookSlice';

const EditBook = memo(() => {
   const { bookData } = useSelector(state => state.book);
   const dispatch = useDispatch();

   const navigate = useNavigate();
   const showHome = () => {
      navigate('/');
   };

   const { editId } = useParams();
   const [current, setCurrent] = useState({ id: '', title: '', genre: '', author: '', bookcode: '' });

   useEffect(() => {
      const currentItem = bookData.find(item => item.id === Number(editId)) || {};
      setCurrent(currentItem);
   }, [bookData, editId]);

   const onSubmit = e => {
      e.preventDefault();
      if (!current.title.trim() || !current.genre.trim() || !current.author.trim() || !current.bookcode.trim()) return;
      dispatch(editBook(current));
      navigate('/');
   };

   return (
      <BookForm>
         <h3>수정</h3>
         <form className="book-form" onSubmit={onSubmit}>
            <p>
               <label>제목</label>
               <input
                  type="text"
                  name="title"
                  placeholder="북 제목 입력 (개미)"
                  onChange={e => setCurrent({ ...current, title: e.target.value })}
                  value={current.title}
               />
            </p>
            <p>
               <label>장르</label>
               <input
                  type="text"
                  name="genre"
                  placeholder="북 장르 입력 (소설)"
                  onChange={e => setCurrent({ ...current, genre: e.target.value })}
                  value={current.genre}
               />
            </p>
            <p>
               <label>저자</label>
               <input
                  type="text"
                  name="author"
                  placeholder="저자 입력 (임수정)"
                  onChange={e => setCurrent({ ...current, author: e.target.value })}
                  value={current.author}
               />
            </p>
            <p>
               <label>책 코드</label>
               <input
                  type="text"
                  name="bookcode"
                  placeholder="책 코드 입력 (00001)"
                  onChange={e => setCurrent({ ...current, bookcode: e.target.value })}
                  value={current.bookcode}
               />
            </p>
            <div className="btn-wrap">
               <button type="submit">수정</button>
               <button onClick={showHome}>취소</button>
            </div>
         </form>
      </BookForm>
   );
});

export default EditBook;

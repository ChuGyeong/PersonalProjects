import React, { useEffect, useRef, useState } from 'react';
import BookInput from './BookInput';
import BookList from './BookList';
import './style.css';
import Show from './Show';

const Mainbook = () => {
   const [data, setData] = useState(JSON.parse(localStorage.getItem('data')) || []);
   const no = useRef(data.length);
   const [book, setBook] = useState({ title: '', author: '', bookcode: '' });
   const [isEdit, setIsEdit] = useState(false);
   const [isMsg, setIsMsg] = useState('');
   const [isShow, setIsShow] = useState(false);

   //  추가
   const onAdd = book => {
      if (!isEdit) {
         book.id = no.current++;
         setData([...data, book]);
         setIsMsg('추가');
      } else {
         setData(data.map(item => (item.id === book.id ? book : item)));
         setIsEdit(false);
         setIsMsg('수정');
      }
   };
   //  삭제
   const onDel = id => {
      setData(data.filter(item => item.id !== id));
      setIsMsg('삭제');
   };

   //  수정
   const onEdit = item => {
      setBook(item);
      setIsEdit(true);
   };

   useEffect(() => {
      localStorage.setItem('data', JSON.stringify(data));
      const timer = setTimeout(() => {
         setIsShow(false);
      }, 2000);
      return () => {
         setIsShow(true);
         clearTimeout(timer);
      };
   }, [data]);

   return (
      <div className="main-book">
         <h2>북카페 도서관리</h2>
         <div className="inner">
            <BookInput onAdd={onAdd} book={book} setBook={setBook} />
            <BookList data={data} onDel={onDel} onEdit={onEdit} />
         </div>
         {isShow && <Show isMsg={isMsg} />}
      </div>
   );
};

export default Mainbook;

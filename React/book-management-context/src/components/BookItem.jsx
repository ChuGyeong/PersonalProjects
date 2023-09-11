import React, { memo } from 'react';
import { useBook } from '../context/BookContext';
import { useNavigate } from 'react-router-dom';

const BookItem = memo(({ item }) => {
   const { id, title, genre, author, bookcode } = item;
   const { onDel } = useBook();
   const navigate = useNavigate();

   const showEdit = () => {
      navigate(`/edit/${id}`);
   };

   return (
      <tr>
         <td>{title}</td>
         <td>{genre}</td>
         <td>{author}</td>
         <td>{bookcode}</td>
         <td>
            <button onClick={showEdit}>수정</button>
            <button onClick={() => onDel(id)}>삭제</button>
         </td>
      </tr>
   );
});

export default BookItem;

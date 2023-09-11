import React, { memo } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { delBook } from '../store/modules/bookSlice';

const BookItem = memo(({ item }) => {
   const { id, title, genre, author, bookcode } = item;
   const navigate = useNavigate();
   const showEdit = () => {
      navigate(`/edit/${id}`);
   };
   const dispatch = useDispatch();

   return (
      <tr>
         <td>{title}</td>
         <td>{genre}</td>
         <td>{author}</td>
         <td>{bookcode}</td>
         <td>
            <button onClick={showEdit}>수정</button>
            <button onClick={() => dispatch(delBook(id))}>삭제</button>
         </td>
      </tr>
   );
});

export default BookItem;

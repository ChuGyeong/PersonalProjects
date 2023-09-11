import React from 'react';

const BookItem = ({ item, onDel, onEdit }) => {
   const { id, title, author, bookcode } = item;
   return (
      <tr>
         <td>{title}</td>
         <td>{author}</td>
         <td>{bookcode}</td>
         <td>
            <button className="edit" onClick={() => onEdit(item)}>
               수정
            </button>
            <button
               className="delete"
               onClick={() => {
                  onDel(id);
               }}>
               삭제
            </button>
         </td>
      </tr>
   );
};

export default BookItem;

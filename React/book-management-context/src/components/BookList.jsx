import React, { memo } from 'react';
import BookItem from './BookItem';
import { useBook } from '../context/BookContext';

const BookList = memo(() => {
   const { data } = useBook();

   return (
      <>
         {data.length > 0 && (
            <div className="book-list">
               <h3>도서 관리 시스템</h3>
               <table className="book-table">
                  <colgroup>
                     <col className="title" />
                     <col className="genre" />
                     <col className="author" />
                     <col className="bookcode" />
                     <col className="del" />
                  </colgroup>
                  <thead>
                     <tr>
                        <th>제목</th>
                        <th>장르</th>
                        <th>저자</th>
                        <th>코드</th>
                        <th>관리</th>
                     </tr>
                  </thead>
                  <tbody className="book-tbody">
                     {data.map(item => (
                        <BookItem item={item} key={item.id} />
                     ))}
                  </tbody>
               </table>
            </div>
         )}
      </>
   );
});

export default BookList;

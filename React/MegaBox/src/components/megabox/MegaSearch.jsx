import React, { memo, useState } from 'react';
import { MegaSearchForm } from '../styled/MegaStyle';

const MegaSearch = memo(({ onSearch }) => {
   const [text, setText] = useState('');
   const changeInput = e => {
      const { value } = e.target;
      setText(value);
   };
   const onSubmit = e => {
      e.preventDefault();
      onSearch(text);
      setText('');
   };

   return (
      <MegaSearchForm onSubmit={onSubmit}>
         <input type="text" placeholder="영화 제목을 입력하세요" onChange={changeInput} value={text} />
      </MegaSearchForm>
   );
});

export default MegaSearch;

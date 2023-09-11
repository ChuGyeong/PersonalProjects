import { useRef, useState } from 'react';
import styled from 'styled-components';

const GallerySearchForm = styled.form`
   text-align: center;
   margin-top: 100px;

   input {
      width: 700px;
      height: 50px;
      padding: 0;
      border: 1px solid #999;
      text-indent: 30px;
      margin-bottom: 10px;
   }
   button {
      margin-left: 20px;
      height: 50px;
      width: 100px;
      border: none;
      padding: 0;
      border-radius: 30px;
      cursor: pointer;
   }
`;

const GallerySearchHistory = styled.div`
   padding: 20px 0;
   box-sizing: border-box;
   margin-bottom: 70px;
   span {
      margin-left: 10px;
      background: lightgray;
      color: #fff;
      font-size: 14px;
   }
   span button {
      border: none;
      cursor: pointer;
      background: transparent;
      margin-left: 3px;
   }
   span em {
      cursor: pointer;
      background: rgba(0, 0, 0, 0.2);
      color: #fff;
      padding: 0 5px;
      margin-left: 5px;
   }
`;

const GallerySearch = ({ setText }) => {
   const [tag, setTag] = useState('');
   const [searchText, setSearchText] = useState('');
   const [searchData, setSearchData] = useState([{ id: '', searchText: '' }]);
   const searchNo = useRef(1);

   const changeInput = e => {
      const { value } = e.target;
      setTag(value);
      setSearchText(value);
   };

   const onSearch = e => {
      e.preventDefault();
      setText(tag);
      setTag('');
      setSearchData([...searchData, { id: searchNo.current++, searchText }]);
   };

   const onSearchDel = id => {
      setSearchData(searchData.filter(item => item.id !== id));
   };

   const onSearchClick = SearchItem => {
      setText(SearchItem);
   };

   return (
      <>
         <GallerySearchForm type="submit" onSubmit={onSearch}>
            <input type="text" onChange={changeInput} value={tag} />
            <button type="submit">검색</button>
         </GallerySearchForm>
         <GallerySearchHistory>
            <div>
               검색기록
               {searchData &&
                  searchData.map(
                     item =>
                        item.searchText !== '' && (
                           <span key={item.id}>
                              <em onClick={() => onSearchClick(item.searchText)}>{item.searchText}</em>
                              <button onClick={() => onSearchDel(item.id)}>X</button>
                           </span>
                        ),
                  )}
            </div>
         </GallerySearchHistory>
      </>
   );
};

export default GallerySearch;

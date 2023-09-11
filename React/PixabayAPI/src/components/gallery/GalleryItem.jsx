import styled from 'styled-components';

const GalleryItemBox = styled.article`
   padding: 10px;
   border: 1px solid #efefef;
   margin-bottom: 10px;
   ul li {
      font-weight: 700;
   }
   ul li span {
      display: inline-block;
      width: 60px;
      font-weight: normal;
   }
   img {
      width: 100%;
   }
   p {
      margin-top: 5px;
   }
   p span {
      background: lightgray;
      color: #fff;
      border-radius: 10px;
      padding: 2px 10px;
      margin-right: 5px;
      font-size: 14px;
   }
`;

const GalleryItem = ({ item }) => {
   const { downloads, views, largeImageURL, likes, tags } = item;
   return (
      <GalleryItemBox>
         <img src={largeImageURL} alt="" />
         <h2></h2>
         <ul>
            <li>
               <span>조회수</span> {views}
            </li>
            <li>
               <span>다운로드</span> {downloads}
            </li>
            <li>
               <span>좋아요</span> {likes}
            </li>
         </ul>
         <p>
            {tags.split(',').map((item, idx) => (
               <span key={idx}>#{item.trim('')}</span>
            ))}
         </p>
      </GalleryItemBox>
   );
};

export default GalleryItem;

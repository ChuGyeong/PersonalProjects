import React, { useEffect, useRef, useState } from 'react';
import GallerySearch from './GallerySearch';
import GalleryList from './GalleryList';
import axios from 'axios';
import { Container } from '../styled/galleryStyle';

const Gallery = () => {
   const [data, setData] = useState([]);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(null);
   const [text, setText] = useState('');

   useEffect(() => {
      const API_KEY = '36875434-03fb21c1d8110874b61dda5a3';
      const url = `https://pixabay.com/api/?key=${API_KEY}&q=${text}&image_type=photo`;
      axios
         .get(url)
         .then(res => {
            setData(res.data.hits);
            setLoading(true);
            setError(null);
         })
         .catch(error => {
            setData([]);
            setLoading(false);
            setError('api 주소를 확인하세요');
         });
   }, [text]);

   return (
      <Container width="1400px">
         <GallerySearch setText={setText} />
         <GalleryList data={data} />
      </Container>
   );
};
export default Gallery;

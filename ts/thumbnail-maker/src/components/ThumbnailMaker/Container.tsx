import React, { memo, useState } from 'react';
import { MainContainer } from '../styled/ThumbnailStyle';

const Container = memo(() => {
   type Title = {
      main: string;
      sub: string;
      category: string;
   };
   const [title, setTitle] = useState<Title>({
      main: '제목을 입력하세요',
      sub: '부제목을 입력하세요',
      category: '분류를 입력하세요',
   });

   const [bg, setBg] = useState('lightGray');

   function randomColor() {
      return (
         '#' +
         Array.from({ length: 3 }, () =>
            Math.floor(Math.random() * 50 + 150)
               .toString(16)
               .padStart(2, '0'),
         ).join('')
      );
   }
   function randomGradient() {
      const color1 = randomColor();
      const color2 = randomColor();
      return `linear-gradient(${color1}, ${color2})`;
   }

   const [fontShadow, setFontShadow] = useState('none');
   const [fontColor, setFontColor] = useState('#000');

   return (
      <MainContainer>
         <section>
            <div className="inner">
               <div className="preview" style={{ background: bg }}>
                  <ul style={{ color: fontColor }}>
                     <li style={{ textShadow: fontShadow }}>{title.main}</li>
                     <li style={{ textShadow: fontShadow }}>{title.sub}</li>
                     <li style={{ textShadow: fontShadow }}>{title.category}</li>
                  </ul>
               </div>
               <div className="contents">
                  <div className="text-inputs">
                     <input
                        type="text"
                        placeholder="제목을 입력하세요"
                        value={title.main}
                        onChange={e => setTitle({ ...title, main: e.target.value })}
                     />
                     <input
                        type="text"
                        placeholder="부제목을 입력하세요"
                        value={title.sub}
                        onChange={e => setTitle({ ...title, sub: e.target.value })}
                     />
                     <input
                        type="text"
                        placeholder="분류를 입력하세요"
                        value={title.category}
                        onChange={e => setTitle({ ...title, category: e.target.value })}
                     />
                  </div>
                  <div className="bg options">
                     <span>배경</span>
                     <div className="btns">
                        <button onClick={() => setBg(randomGradient())}>랜덤 그라디언트</button>
                        <button onClick={() => setBg(randomColor())}>랜덤 단색</button>
                        <button>이미지 URL</button>
                     </div>
                  </div>
                  {/* <div className="thumbnail options">
                     <span>썸네일 구성 요소</span>
                     <div className="btns">
                        <button>제목, 부제목, 분류</button>
                        <button>제목, 분류</button>
                        <button>제목만</button>
                     </div>
                  </div> */}
                  <div className="text options">
                     <span>텍스트 스타일</span>
                     <div className="btns">
                        <button
                           onClick={() =>
                              fontShadow === 'none' ? setFontShadow('2px 2px 2px gray') : setFontShadow('none')
                           }>
                           그림자 효과
                        </button>
                        <button onClick={() => (fontColor === '#000' ? setFontColor('#fff') : setFontColor('#000'))}>
                           글자색 반전
                        </button>
                        <button>제목 크기 작게</button>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </MainContainer>
   );
});

export default Container;

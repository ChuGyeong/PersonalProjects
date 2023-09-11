import React from 'react';

const Show = ({ isMsg }) => {
   return <div className={`show ${isMsg !== '삭제' ? 'on' : 'off'}`}>값이 {isMsg} 되었습니다.</div>;
};

export default Show;

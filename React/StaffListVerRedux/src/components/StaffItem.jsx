import React, { memo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { delPeople, onError, toggleChk } from '../store/modules/staffSlice';

const StaffItem = memo(({ item }) => {
   const { name, job, tel, imgUrl, isChk, id, isError } = item;
   const dispatch = useDispatch();

   const { authed } = useSelector(state => state.user);

   return (
      <li>
         <div className="img-area">
            <img src={!isError ? imgUrl : './images/img.jpg'} alt="" onError={() => dispatch(onError(id))} />
         </div>
         <div className="text-area">
            <p>
               <span>이름</span>:<span>{name}</span>
            </p>
            <p>
               <span>직업</span>:<span>{job}</span>
            </p>
            <p>
               <span>연락처</span>:<span>{tel}</span>
            </p>
         </div>
         {authed && (
            <div className="btn-area">
               <button onClick={() => dispatch(toggleChk(id))}>
                  {isChk ? <i className="xi-heart"></i> : <i className="xi-heart-o"></i>}
               </button>
               <button onClick={() => dispatch(delPeople(id))}>
                  <i className="xi-run"></i>
               </button>
            </div>
         )}
      </li>
   );
});

export default StaffItem;

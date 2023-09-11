import React, { memo } from 'react';
import { BookForm } from '../styled/bookStyle';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../store/modules/AuthSlice';

const Logout = memo(() => {
   const navigate = useNavigate();
   const showHome = () => {
      navigate('/');
   };
   const dispatch = useDispatch();

   return (
      <BookForm>
         <h3>로그아웃 하시겠습니까?</h3>
         <div className="btn-wrap">
            <button
               onClick={() => {
                  dispatch(logout());
                  showHome();
               }}>
               확인
            </button>
            <button onClick={showHome}>취소</button>
         </div>
      </BookForm>
   );
});

export default Logout;

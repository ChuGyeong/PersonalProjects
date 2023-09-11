import React, { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../store/modules/authSlice';

const Logout = memo(() => {
   const navigate = useNavigate();
   const showHome = () => {
      navigate('/');
   };
   const dispatch = useDispatch();

   return (
      <>
         <h2>로그아웃</h2>
         <div className="form-area">
            <strong>로그아웃 하시겠습니까?</strong>
            <div className="btn-area">
               <button
                  onClick={() => {
                     dispatch(logout());
                     showHome();
                  }}>
                  확인
               </button>
               <button onClick={showHome}>취소</button>
            </div>
         </div>
      </>
   );
});

export default Logout;

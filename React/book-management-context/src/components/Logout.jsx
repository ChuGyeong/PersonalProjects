import React, { memo } from 'react';
import { BookForm } from '../styled/bookStyle';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Logout = memo(() => {
   const navigate = useNavigate();
   const showHome = () => {
      navigate('/');
   };

   const { logout, user } = useAuth();

   return (
      <BookForm>
         <h3>로그아웃 하시겠습니까?</h3>
         <div className="btn-wrap">
            <button onClick={logout}>확인</button>
            <button onClick={showHome}>취소</button>
         </div>
      </BookForm>
   );
});

export default Logout;

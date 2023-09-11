import React, { memo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login, loginInput } from '../store/modules/authSlice';

const Login = memo(() => {
   const onSubmit = e => {
      e.preventDefault();
      if (userId.password === '1234') {
         dispatch(login(userId));
         navigate('/');
      }
   };

   const { userId } = useSelector(state => state.user);
   const dispatch = useDispatch();

   const navigate = useNavigate();
   const showHome = () => {
      navigate('/');
   };

   return (
      <>
         <h2>Login</h2>
         <div className="form-area">
            <form onSubmit={onSubmit}>
               <p>
                  <label>이메일</label>
                  <input
                     type="email"
                     name="email"
                     placeholder="이메일 입력"
                     onChange={e => dispatch(loginInput({ name: e.target.name, value: e.target.value }))}
                     value={userId.email}
                  />
               </p>
               <p>
                  <label>비밀번호</label>
                  <input
                     type="password"
                     name="password"
                     placeholder="비밀번호 입력 (1234)"
                     onChange={e => dispatch(loginInput({ name: e.target.name, value: e.target.value }))}
                     value={userId.password}
                  />
               </p>
               <div className="btn-area">
                  <button type="submit">로그인</button>
                  <button onClick={showHome}>취소</button>
               </div>
            </form>
         </div>
      </>
   );
});

export default Login;

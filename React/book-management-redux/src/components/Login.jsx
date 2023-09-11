import React, { memo, useEffect } from 'react';
import { BookForm } from '../styled/bookStyle';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginInput, login } from '../store/modules/AuthSlice';

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
      <BookForm>
         <h3>로그인</h3>
         <form className="book-form" onSubmit={onSubmit}>
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
            <div className="btn-wrap">
               <button type="submit">로그인</button>
               <button onClick={showHome}>취소</button>
            </div>
         </form>
      </BookForm>
   );
});

export default Login;

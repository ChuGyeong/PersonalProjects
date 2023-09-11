import React, { memo, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { BookForm } from '../styled/bookStyle';
import { useNavigate } from 'react-router-dom';

const Login = memo(() => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const { login, authed } = useAuth();

   const onSubmit = e => {
      e.preventDefault();
      login(email, password);
   };

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
               <input type="email" placeholder="이메일 입력" value={email} onChange={e => setEmail(e.target.value)} />
            </p>
            <p>
               <label>비밀번호</label>
               <input
                  type="password"
                  placeholder="비밀번호 입력 (1234)"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
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

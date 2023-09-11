import React, { memo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addPeople, changeInput } from '../store/modules/staffSlice';

const AddStaff = memo(() => {
   const { text } = useSelector(state => state.staff);
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const showHome = () => {
      navigate('/');
   };

   const onSubmit = e => {
      e.preventDefault();
      if (!text.name.trim() || !text.job.trim() || !text.tel.trim() || !text.imgUrl.trim()) return;
      dispatch(addPeople(text));
      navigate('/');
   };

   const [urlShow, setUrlShow] = useState(false);

   return (
      <>
         <h2>Add</h2>
         <div className="form-area">
            <button className="imgPlus" onClick={() => setUrlShow(!urlShow)}>
               {urlShow ? <i className="xi-close"></i> : <i className="xi-plus"></i>}
            </button>
            <div className={`imgUrl-area ${urlShow ? 'on' : ''}`}>
               <ul>
                  <li>
                     <img src="https://i.pinimg.com/564x/05/db/e2/05dbe251f8d7b7b05cd3c130233220ce.jpg" alt="" />
                     <span>https://i.pinimg.com/564x/05/db/e2/05dbe251f8d7b7b05cd3c130233220ce.jpg</span>
                  </li>
                  <li>
                     <img src="https://i.pinimg.com/564x/65/86/ed/6586ed65e8de9e47684c692e9dc6744b.jpg" alt="" />
                     <span>https://i.pinimg.com/564x/65/86/ed/6586ed65e8de9e47684c692e9dc6744b.jpg</span>
                  </li>
                  <li>
                     <img src="https://i.pinimg.com/564x/91/32/15/913215f3e5662f0ad0aeda37c17477a1.jpg" alt="" />
                     <span>https://i.pinimg.com/564x/91/32/15/913215f3e5662f0ad0aeda37c17477a1.jpg</span>
                  </li>
                  <li>
                     <img src="https://i.pinimg.com/564x/88/fd/5b/88fd5bbccc180152c81ccaedc9c72d02.jpg" alt="" />
                     <span>https://i.pinimg.com/564x/88/fd/5b/88fd5bbccc180152c81ccaedc9c72d02.jpg</span>
                  </li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
               </ul>
            </div>
            <form onSubmit={onSubmit}>
               <p>
                  <label>이름</label>
                  <input
                     type="text"
                     name="name"
                     placeholder="이름 입력 (홍길동)"
                     value={text.name}
                     onChange={e => dispatch(changeInput({ name: e.target.name, value: e.target.value }))}
                  />
               </p>
               <p>
                  <label>직업</label>
                  <input
                     type="text"
                     name="job"
                     placeholder="직업 입력 (데이터베이스)"
                     value={text.job}
                     onChange={e => dispatch(changeInput({ name: e.target.name, value: e.target.value }))}
                  />
               </p>
               <p>
                  <label>연락처</label>
                  <input
                     type="text"
                     name="tel"
                     placeholder="전화번호 입력 (010-1234-5678)"
                     value={text.tel}
                     onChange={e => dispatch(changeInput({ name: e.target.name, value: e.target.value }))}
                  />
               </p>
               <p>
                  <label>사진</label>
                  <input
                     type="text"
                     name="imgUrl"
                     placeholder="이미지 주소 입력 (https://i.pinimg.com/564x/1...690.jpg)"
                     value={text.imgUrl}
                     onChange={e => dispatch(changeInput({ name: e.target.name, value: e.target.value }))}
                  />
               </p>
               <div className="btn-area">
                  <button type="submit">추가</button>
                  <button onClick={showHome}>취소</button>
               </div>
            </form>
         </div>
      </>
   );
});

export default AddStaff;

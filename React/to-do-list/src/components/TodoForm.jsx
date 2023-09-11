import { useRef, useState } from 'react';
import './TodoForm.css';

const TodoForm = ({ onAdd }) => {
   const [text, setText] = useState('');
   const changeInput = e => {
      const { value } = e.target;
      setText(value);
   };

   const textRef = useRef();
   const onSubmit = e => {
      e.preventDefault();
      if (!text) return;
      onAdd(text);
      setText('');
      textRef.current.focus();
   };

   return (
      <form className="TodoForm" onSubmit={onSubmit}>
         <input
            type="text"
            placeholder="할일을 입력하세요"
            name="text"
            value={text}
            ref={textRef}
            onChange={changeInput}
         />
         <button type="submit">추가</button>
      </form>
   );
};

export default TodoForm;

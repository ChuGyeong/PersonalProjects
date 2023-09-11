import React, { useRef, useState } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import './Todos.css';
import todoData from '../assets/data/todoData.jsx';

const Todos = () => {
   const [data, setData] = useState(todoData);

   // 아이디
   const no = useRef(data.length + 1);
   // 리스트에 추가
   const onAdd = text => {
      setData([...data, { id: no.current++, text, isChk: false }]);
   };
   // 삭제
   const onDel = id => {
      setData(data.filter(item => item.id !== id));
   };
   // 변경, 수정
   const onChk = id => {
      setData(data.map(item => (item.id === id ? { ...item, isChk: !item.isChk } : item)));
   };

   return (
      <div className="Todos">
         <h1>TodoList</h1>
         <TodoForm onAdd={onAdd} />
         <TodoList data={data} onDel={onDel} onChk={onChk} />
      </div>
   );
};

export default Todos;

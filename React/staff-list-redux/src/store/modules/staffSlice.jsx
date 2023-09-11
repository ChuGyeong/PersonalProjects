import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   isChk: false,
   isError: false,
   text: { name: '', job: '', tel: '', imgUrl: '' },
   staffData: localStorage.getItem('staffData')
      ? JSON.parse(localStorage.getItem('staffData'))
      : [
           {
              id: 1,
              name: '마동석',
              job: '웹퍼블리셔',
              tel: '010-0000-0000',
              isChk: false,
              isError: false,
              imgUrl: 'https://i.pinimg.com/736x/ed/25/48/ed2548ff0fb397fbc1b13182e29fd690.jpg',
           },
           {
              id: 2,
              name: '황정민',
              job: '프론트엔드',
              tel: '010-1111-1111',
              isChk: false,
              isError: false,
              imgUrl: 'https://i.pinimg.com/564x/24/10/d1/2410d1384c9cd016dd31b965422955f5.jpg',
           },
           {
              id: 3,
              name: '이정재',
              job: '풀스택',
              tel: '010-2222-2222',
              isChk: false,
              isError: false,
              imgUrl: 'https://i.pinimg.com/736x/9e/9d/df/9e9ddf01c49f7c94a6732258f536c029.jpg',
           },
           {
              id: 4,
              name: '최민식',
              job: '데이터베이스',
              tel: '010-7777-7777',
              isChk: false,
              isError: false,
              imgUrl: 'https://i.pinimg.com/736x/cc/be/78/ccbe787cf34db6440aebd4c79c679b57.jpg',
           },
           {
              id: 5,
              name: '하정우',
              job: '웹디자이너',
              tel: '010-8888-8888',
              isChk: false,
              isError: false,
              imgUrl: 'https://i.pinimg.com/736x/1d/87/f4/1d87f4af877b9d55597ec3da9832650d.jpg',
           },
        ],
};

let userNum = localStorage.getItem('userNum') ? JSON.parse(localStorage.getItem('userNum')) : 6;
export const staffSlice = createSlice({
   name: 'staff',
   initialState,
   reducers: {
      changeInput(state, action) {
         const { name, value } = action.payload;
         state.text = { ...state.text, [name]: value };
      },
      addPeople(state, action) {
         state.staffData = [
            ...state.staffData,
            {
               id: userNum++,
               name: action.payload.name,
               job: action.payload.job,
               tel: action.payload.tel,
               imgUrl: action.payload.imgUrl,
            },
         ];
         localStorage.setItem('staffData', JSON.stringify(state.staffData));
         localStorage.setItem('userNum', userNum);
         state.text = {};
      },
      delPeople(state, action) {
         state.staffData = state.staffData.filter(item => item.id !== action.payload);
         localStorage.setItem('staffData', JSON.stringify(state.staffData));
      },
      toggleChk(state, action) {
         state.staffData = state.staffData.map(item =>
            item.id === action.payload ? { ...item, isChk: !item.isChk } : item,
         );
         localStorage.setItem('staffData', JSON.stringify(state.staffData));
      },
      onError(state, action) {
         state.staffData = state.staffData.map(item =>
            item.id === action.payload ? { ...item, isError: true } : item,
         );
      },
   },
});

export const { addPeople, delPeople, toggleChk, toggleList, changeInput, onError } = staffSlice.actions;
export default staffSlice.reducer;

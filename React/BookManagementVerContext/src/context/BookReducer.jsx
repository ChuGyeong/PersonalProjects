export const BookReducer = (state, action) => {
   switch (action.type) {
      case 'ADD':
         return {
            ...state,
            data: [
               ...state.data,
               {
                  id: action.id,
                  title: action.text.title,
                  genre: action.text.genre,
                  author: action.text.author,
                  bookcode: action.text.bookcode,
               },
            ],
            text: '',
         };
      case 'CHANGE_INPUT':
         return {
            ...state,
            text: action.payload.text,
         };
      case 'EDIT':
         return { ...state, data: state.data.map(item => (item.id === action.current.id ? action.current : item)) };
      case 'TOGGLE':
         return {
            ...state,
            data: state.data.map(item => (item.id === action.payload.id ? { ...item, isChk: !item.isChk } : item)),
         };
      case 'DEL':
         return {
            ...state,
            data: state.data.filter(item => item.id !== action.id),
         };
      default:
         return state;
   }
};

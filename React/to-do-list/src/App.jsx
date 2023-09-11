import React, { memo } from 'react';
import Todos from './components/Todos';
import './assets/css/reset.css';

const App = memo(() => {
   return (
      <div>
         <Todos />
      </div>
   );
});

export default App;

import React, { memo } from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import GlobalStyle from './styled/Global';
import AddStaff from './components/AddStaff';
import './styled/style.scss';
import Login from './components/Login';
import Logout from './components/Logout';

const App = memo(() => {
   return (
      <>
         <GlobalStyle />
         <Router>
            <Header />
            <div className="container">
               <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/add" element={<AddStaff />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/logout" element={<Logout />} />
               </Routes>
            </div>
         </Router>
      </>
   );
});

export default App;

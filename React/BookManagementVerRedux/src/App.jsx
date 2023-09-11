import React, { memo } from 'react';
import GlobalStyle from './styled/Global';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Addbook from './components/AddBook';
import EditBook from './components/EditBook';
import Login from './components/Login';
import Logout from './components/Logout';

const App = memo(() => {
   return (
      <>
         <GlobalStyle />
         <Router>
            <Header />
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/add" element={<Addbook />} />
               <Route path="/login" element={<Login />} />
               <Route path="/logout" element={<Logout />} />
               <Route path="/edit">
                  <Route path=":editId" element={<EditBook />} />
               </Route>
            </Routes>
            <Footer />
         </Router>
      </>
   );
});

export default App;

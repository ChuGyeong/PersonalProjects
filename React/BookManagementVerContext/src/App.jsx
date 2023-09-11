import React from 'react';
import GlobalStyle from './styled/Global';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Addbook from './components/Addbook';
import EditBook from './components/EditBook';
import Login from './components/Login';
import Logout from './components/Logout';
import Header from './components/Header';
import Footer from './components/Footer';
import BookProvider from './context/BookContext';
import { AuthProvider } from './context/AuthContext';

const AppProvider = ({ contexts, children }) =>
   contexts.reduce(
      (prev, context) =>
         React.createElement(context, {
            children: prev,
         }),
      children,
   );

const App = () => {
   return (
      <>
         <GlobalStyle />
         <Router>
            <AppProvider contexts={[BookProvider, AuthProvider]}>
               <Header />
               <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/logout" element={<Logout />} />
                  <Route path="/add" element={<Addbook />} />
                  <Route path="/edit">
                     <Route path=":editId" element={<EditBook />} />
                  </Route>
               </Routes>
               <Footer />
            </AppProvider>
         </Router>
      </>
   );
};

export default App;

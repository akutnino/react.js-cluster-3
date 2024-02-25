// import logo from './logo.svg';
// import './App.css';
import React, { useState } from 'react';
import Login from './component/Login/Login';
import Home from './component/Home/Home';
import MainHeader from './component/MainHeader/MainHeader';

function App() {
  const [isLoggedIn, updateIsLoggedIn] = useState(false);

  const loginHandler = (email, password) => {
    updateIsLoggedIn(true);
  };

  const logoutHandler = () => {
    updateIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;

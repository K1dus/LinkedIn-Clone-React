import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { login, logout, selectUser } from './features/userSlice';
import Feed from './Feed';
import Header from "./Header";
import Sidebar from './Sidebar';
import Login from './Login';
import { auth } from './firebase';
import Widgets from './Widgets';

// Cloned by: Kidus Efrem
// Email: kidus@protonmail.com
// Phone: +251917001417
// GitHub: https://www.github.com/k1dus
// LinkedIn: https://www.linkedin.com/in/kidusefrem/

function App() {
const user = useSelector(selectUser);
const dispatch = useDispatch();

useEffect(() => {
  auth.onAuthStateChanged((userAuth) => {
    if (userAuth) {
      //user is logged in
      dispatch(
        login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoUrl,
  })

      );
    } else {
      //user is logged out
      dispatch(logout());
    }
  });
}, []);

  return (
    <div className="app">
      <Header />

     {!user ? (<Login /> ) : (
      <div className="app__body">
        <Sidebar />
        <Feed />
        <Widgets />
      </div>
      )}

    </div>
  );
}

export default App;

import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom"
import LoginScreen from './screens/LoginScreen';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';


function App() {

  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(()=>{

    const unsubscribe = onAuthStateChanged(auth,

      (userAuth) => {
        if(userAuth){
          dispatch(login({
            uid : userAuth.uid,
            email : userAuth.email, 
          }));
        }else{
          dispatch(logout);
        }
      });

    return unsubscribe;

  },[]);

  return (
    <div className="app">
      <Router>
        {! user ? <LoginScreen/> :(          
          <Routes>
            <Route path='/' element={<HomeScreen />} />
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;

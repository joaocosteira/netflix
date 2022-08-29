import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';

import {
  Route,
  Routes,
  useNavigate,
} from "react-router-dom"
import LoginScreen from './screens/LoginScreen';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import ProfileScreen from './screens/ProfileScreen';


function App() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
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
          dispatch(logout());
          navigate('/');
        }
      });

    return unsubscribe;

  },[dispatch,navigate]);

  return (
    <div className="app">
      
        {! user ? <LoginScreen/> :(          
          <Routes>
            <Route path='/' element={<HomeScreen />} />
            <Route path='/profile' element={<ProfileScreen />} />
          </Routes>
        )}
    </div>
  );
}

export default App;

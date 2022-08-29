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


function App() {


  const user = null;

  useEffect(()=>{
    onAuthStateChanged(auth, (userAuth) => {
      if(userAuth){
        console.log(userAuth)
      }else{
        
      }

    })
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

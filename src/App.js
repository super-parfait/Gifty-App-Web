import './App.css';
import React, { useState } from "react";
// import Navbar from './components/Navbar/Navbar';
// import Header from './components/Header/Header';
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from './Pages/AuthPage/Login/Login';
import Register from './Pages/AuthPage/Register/Register';
import { hasAuthenticated } from './services/AuthApi';
import AuthenticatedRoute from "./components/AuthComponents/AuthenticatedRoute";
import Profile from './Pages/AuthPage/Profile';
import Auth from "./contexts/Auth";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(hasAuthenticated());
  return (
    <Auth.Provider value={{isAuthenticated, setIsAuthenticated}} >
       <BrowserRouter>
         <div className="container-fluid">
          <Routes>
             <Route exact  path="/" element={<Home/>} />
             <Route exact  path="/login" element={ <Login/> } />
             <Route exact  path="/register" element={ <Register/> } />
              <Route exact  path='/profile' element={
                  <AuthenticatedRoute>
                    <Profile/>
                  </AuthenticatedRoute>
                } 
              />
           </Routes>
         </div>
       </BrowserRouter>
      </Auth.Provider>
  );
}

export default App;

import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from './contexts/Auth';
import { useState } from 'react';
import { hasAuthenticated } from './services/AuthApi';
import Accueil from './Pages/AuthPage/HomeLog/Accueil';
import Login from './Pages/AuthPage/Login/Login'
import Register from './Pages/AuthPage/Register/Register'
import AuthenticatedRoute from './components/AuthComponents/AuthenticatedRoute';
import Profile from './Pages/AuthPage/Profile';
import ResetPassword from './Pages/AuthPage/ForgotPassword/ForgotPassword'
import Settings from './Pages/AuthPage/Settings/Settings';



function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(hasAuthenticated());

  console.log(isAuthenticated)
  
  return (
    <Auth.Provider value={{isAuthenticated, setIsAuthenticated}} >
       <BrowserRouter>
        <Header /> 
         <div className="container-fluid">
          <Routes>
             <Route exact  path="/" element={<Accueil/>} />
             <Route exact  path="/login" element={ <Login/> } />
             <Route exact  path="/register" element={ <Register/> } />
            <Route exact  path='/accueil' element={
                <AuthenticatedRoute>
                  <Accueil/>
                </AuthenticatedRoute>
              } 
            />
            <Route exact  path='/profile' element={
                <AuthenticatedRoute>
                  <Profile/>
                </AuthenticatedRoute>
              } 
            />
            <Route exact  path='/reset-password' element={
                <AuthenticatedRoute>
                  <ResetPassword/>
                </AuthenticatedRoute>
              } 
            />
            <Route exact  path='/parametres' element={
                <AuthenticatedRoute>
                  <Settings/>
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

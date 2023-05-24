import './App.css';
import Header from './common/header/Header'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from './contexts/Auth';
import { useState } from 'react';
import { hasAuthenticated } from './services/AuthApi';
// import Accueil from './Pages/AuthPage/HomeLog/Accueil;

import Login from './Pages/AuthPage/Login/Login'
import Register from './Pages/AuthPage/Register/Register'
import AuthenticatedRoute from './components/AuthComponents/AuthenticatedRoute';
import Profile from './Pages/AuthPage/Profile';
import ResetPassword from './Pages/AuthPage/ForgotPassword/ForgotPassword'
import Settings from './Pages/AuthPage/Settings/Settings';

// Ajout
import Pages from "./Pages/Pages"
import Data from "./components/Data"
import Cart from "./common/Cart/Cart"
import Sdata from "./components/shop/Sdata"

//



function App() {

  // Ajout 

  const { productItems } = Data
  const { shopItems } = Sdata

  const [CartItem, setCartItem] = useState([])

    //Step 
    const addToCart = (product) => {
      const productExit = CartItem.find((item) => item.id === product.id)

      if (productExit) {
        setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty + 1 } : item)))
      } else {

        setCartItem([...CartItem, { ...product, qty: 1 }])
      }
    }
  
    // Step
    const decreaseQty = (product) => {

      const productExit = CartItem.find((item) => item.id === product.id)
  
      
      if (productExit.qty === 1) {
        setCartItem(CartItem.filter((item) => item.id !== product.id))
      } else {
        
        setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item)))
      }
    }

  //



  const [isAuthenticated, setIsAuthenticated] = useState(hasAuthenticated());

  console.log(isAuthenticated)
  
  return (
    <Auth.Provider value={{isAuthenticated, setIsAuthenticated}} >
       <BrowserRouter>
       <Header CartItem={CartItem} />
         <div className="container-fluid">
          <Routes>
          <Route path='/' element={<Pages productItems={productItems} addToCart={addToCart} shopItems={shopItems} />} />
          <Route path='/cart' element={<Cart CartItem={CartItem} addToCart={addToCart} decreaseQty={decreaseQty} />} />


             {/* <Route exact  path="/" element={<Accueil/>} /> */}
             <Route exact  path="/login" element={ <Login/> } />
             <Route exact  path="/register" element={ <Register/> } />
            <Route exact  path='/accueil' element={
                <AuthenticatedRoute>
                  <Pages/>
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

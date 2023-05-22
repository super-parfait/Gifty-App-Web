import React from 'react';
import ReactDOM from 'react-dom/client';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
// import Home from "./Pages/Home/Home";
// import Login from './Pages/AuthPage/Login/Login';
// import Register from './Pages/AuthPage/Register/Register';
// import ForgotPassword from './Pages/AuthPage/ForgotPassword/ForgotPassword';
// import ResetPassword from './Pages/AuthPage/ResetPassword/ResetPassword';
// import OtpPassword from './Pages/AuthPage/OtpPassword/OtpPassword';




// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <App />);


// export default function App(){
//   return (
//     <BrowserRouter>
//       <Routes>
//             <Route path='/' index element={<Home/>} />
//             <Route path='login' element={<Login/>} />
//             <Route path='signUp' element={<Register/>} />
//             <Route path='ForgotPwd' element={<ForgotPassword/>} />
//             <Route path='ResetPwd' element={<ResetPassword/>} />
//             <Route path='OtpPwd' element={<OtpPassword/>} />        
//       </Routes>
//     </BrowserRouter>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render( <App />);

import * as React from 'react';
import { Outlet, Link } from "react-router-dom";
// import Login from "../../../Pages/AuthPage/Login/Login";
import { TiChevronLeft } from "react-icons/ti";

export default function ForgotPassword() {
    return ( <>
        <div className='bg-white px-10 py-3 rounded-3xl border-2 border-gray-200'><br />
            <h1 className='text-5xl font-extrabold text-red-500'>Gifty</h1>
            <p className='font-normal text-lg text-gray-400 mt-4'>Veuillez entrer le numéro de téléphone que vous avez utilisé<br /> pour créer votre compte,
            et nous vous enverrons un code <br />pour réinitialiser votre mot de passe.</p><br />
            <div className='mt-3'>
                <div>
                    <label className='text-lg font-medium'>Numéro de téléphone</label>
                    <input 
                        className='w-full py-3 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 hover:border-red-500 hover:shadow-md'
                        placeholder='Entrer votre Numéro de téléphone'
                    />
                </div>
                <div className='mt-8 flex flex-col gap-y-4'>
                    <button className='active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out py-3 transition-all rounded-xl bg-red-500 text-white text-lg font-bold'>Envoyer</button>
                </div><br/>
                <div className='flex justify-center items-center'>
                    <Link to="/login">
                        <span className='text-red-500'><TiChevronLeft size={40} /></span>                        
                    </Link>
                </div>
                
            </div>
        </div>
        <Outlet />
        </>
    )
}


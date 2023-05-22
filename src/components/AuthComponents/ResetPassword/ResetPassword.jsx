import * as React from 'react';
import { Link, Outlet } from "react-router-dom";
import { TiChevronLeft } from 'react-icons/ti';
import { BiChevronLeftCircle } from 'react-icons/bi';
// import OtpPassword from "../../../Pages/AuthPage/OtpPassword/OtpPassword";

export default function ForgotPassword() {
    return (<>
        <div className='bg-white px-10 py-3 rounded-3xl border-2 border-gray-200'><br />
            <h1 className='text-5xl font-extrabold text-red-500'>Gifty</h1>
            <p className='font-normal text-lg text-gray-400 mt-4'>Veuillez renseigner les champs afin de créer votre <br /> nouveau mot de passe.</p><br />
            <div className='mt-3'>
                <div className='mb-3'>
                    <label  className='text-lg font-medium'>Nouveau Mot de passe</label><br/>
                    <input 
                        className='w-full py-3 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 hover:border-red-500 hover:shadow-md'
                        placeholder='Entrer votre nouveau Mot de passe'
                        type='password'
                    /> 
                </div><br />
                <div className='mb-3'>
                    <label  className='text-lg font-medium'>Confirmer Mot de passe</label>
                    <input 
                         className='w-full py-3 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 hover:border-red-500 hover:shadow-md'
                        placeholder='Confirmer votre Mot de passe'
                        type='password'
                    /> 
                </div>
                <div className='mt-8 flex flex-col gap-y-4'>
                    <button className='active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out py-3 transition-all rounded-xl bg-red-500 text-white text-lg font-bold'>Envoyer</button>
                </div><br />
                <div className='flex justify-center items-center'>
                    <Link to="/login">
                        <span className='text-red-500'>
                            <TiChevronLeft size={40} />
                            <BiChevronLeftCircle />
                        </span>                        
                    </Link>
                </div>             
            </div>
            
            
        </div>
        <Outlet />
        </>
    )
}

// w-full border-2 border-gray-200 rounded-xl p-4 mt-1 bg-transparent
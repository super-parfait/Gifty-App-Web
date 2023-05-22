import React, { useEffect, useContext, useState } from 'react';
import { Link, Outlet, useNavigate } from "react-router-dom";
import Auth from "../../../contexts/Auth";
import { register } from "../../../services/AuthApi";


export default function Register() {

    const navigate = useNavigate()
    // Je verifie si l'user est authentifié
    const { isAuthenticated, setIsAuthenticated } = useContext(Auth);

    const [user, setUser] = useState({
        full_name: "",
        email:"",
        telephone: "",
        password: "", 
        confirm_password:""
    })

    // La fonction qui se charge de donner les changements dans les champs
    const handleChange = ({currentTarget}) => {
        const { name, value } = currentTarget;
    
        setUser({...user, [name]: value})
    }

    // La fonction qui s'execute apres avoir valider le formulaire
    const handleRegister = async event => {
        event.preventDefault();

        // console.log(user)
        try {
            const response = await register(user);

            console.log(response)
            setIsAuthenticated(response);
            navigate('/profile');
        } catch ({response}) {
            console.log(response);
        }
    }

    // Les differentes actions qui sont faites lors du chargement de ma page 
    useEffect(() => {
        if (isAuthenticated) {
            navigate('/profile');
        }
        }, [navigate, isAuthenticated]);

    return ( 
        <>
            <form onSubmit={handleRegister}>

                <div className='bg-white px-10 py-3 rounded-3xl border-2 border-gray-200 overflow'><br/>
                    <h1 className='text-5xl font-extrabold text-red-500'>Gifty</h1>
                    
                    <h1 className='font-normal text-lg text-gray-400 mt-3'>Bienvenu(e), veuillez svp renseigner vos différentes informations.</h1> <br /><br />   
                    
                    <div className='-mt-5'>
                    
                        <div className='mb-3'>
                            <label className='text-lg font-medium'>Nom & Prénoms</label>
                            <input 
                                className='w-full py-3 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 hover:border-red-500 hover:shadow-md'
                                placeholder='Entrer votre Nom & Prénoms'
                                name='full_name' onChange={handleChange}
                            />
                        </div><br />
                        {/* Le champs de l'adresse mail */}
                        <div className='mb-3'>
                            <label className='text-lg font-medium'>Email</label>
                            <input 
                                className='w-full py-3 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 hover:border-red-500 hover:shadow-md'
                                placeholder='Entrer votre adresse email'
                                name='email' onChange={handleChange}
                            />
                        </div><br />
                        {/* Le champs de téléphone  */}
                        <div className='mb-3'>
                            <label className='text-lg font-medium'>Numéro de téléphone</label>
                            <input 
                                className='w-full py-3 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 hover:border-red-500 hover:shadow-md'
                                placeholder='Entrer votre Numéro de téléphone'
                                name='telephone' onChange={handleChange}
                            />
                        </div><br />
                        {/* Le champs de mot de passe */}
                        <div className='mb-3'>
                            <label  className='text-lg font-medium'>Mot de passe</label>
                            <input 
                                className='w-full py-3 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 hover:border-red-500 hover:shadow-md'
                                placeholder='Entrer votre Mot de passe'
                                type='password'
                                name='password' onChange={handleChange}
                            /> 
                        </div><br />
                        {/* La confirmation du mot de passe */}
                        <div className='mb-3'>
                            <label  className='text-lg font-medium'>Confirmer Mot de passe</label>
                            <input 
                                className='w-full py-3 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 hover:border-red-500 hover:shadow-md'
                                placeholder='Confirmer votre Mot de passe'
                                type='password'
                                name='confirm_password' onChange={handleChange}
                                
                            /> 
                        </div>
                        {/* Le champs du button */}
                        <div className='mt-8 flex flex-col gap-y-4'>
                            <button type='submit' className='active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out py-3 transition-all rounded-xl bg-red-500 text-white text-lg font-bold'>S'inscrire</button>
                        </div>
                        <div className='mt-8 flex justify-center items-center'>
                        <p className='font-medium text-base'>Déjà un compte ?
                            <Link to="/login">
                                <span className='text-red-400 text-base font-medium ml-2'>Se connecter</span>
                            </Link>
                        </p>
                        </div>
                    </div>
                    
                </div>
            <Outlet />
            </form>

        </>
    )
}


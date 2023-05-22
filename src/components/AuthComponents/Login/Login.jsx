import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
import Auth from "../../../contexts/Auth";
import { login } from "../../../services/AuthApi";

export default function Login() {
    const navigate = useNavigate()
    // Je verifie si l'user est authentifié
    const { isAuthenticated, setIsAuthenticated } = useContext(Auth);

    const [user, setUser] = useState({
      telephone: "",
      password: ""
    })


    // La fonction qui se charge de donner les changements dans les champs
    const handleChange = ({currentTarget}) => {
        const { name, value } = currentTarget;
    
        setUser({...user, [name]: value})
    }

    // La fonction qui s'execute apres avoir valider le formulaire
    const handleSubmit = async event => {
        event.preventDefault();

        try {
            
          const response = await login(user);

          console.log(response)
          setIsAuthenticated(response);
          navigate('/accueil');
        } catch ({error}) {
          console.log(error);
        }
    }

    // Les differentes actions qui sont faites lors du chargement de ma page 
    useEffect(() => {
        if (isAuthenticated) {
            navigate('/accueil');
        }
      }, [navigate, isAuthenticated]);


    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className='bg-white px-10 py-3 rounded-3xl border-2 border-gray-200'><br />
                    <h1 className='text-5xl font-black text-red-500'>Gifty</h1>
                    <p className='font-normal text-lg text-gray-400 mt-4'>Bienvenu(e), veuillez svp renseigner vos différentes informations.</p><br />
                    <div className='mt-3'>
                        <div className='mb-3'>
                            <label className='text-lg font-medium'>Numéro de téléphone</label>
                            <input
                                name="telephone" className='w-full py-3 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 hover:border-red-500 hover:shadow-md' placeholder='Entrer votre Numéro de téléphone' onChange={handleChange}

                            />
                        </div><br />
                        <div className='mb-3'>
                            <label  className='text-lg font-medium'>Mot de passe</label>
                            <input 
                                name="password" className='w-full py-3 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 hover:border-red-500 hover:shadow-md' placeholder='Entrer votre Mot de passe' type='password' onChange={handleChange}
                            /> 
                        </div>
                                    
                        <div className='mt-8 flex justify-between items-center'>
                            <div>
                                <input
                                    type='checkbox'
                                    id='remember'
                                    className='rounded-e-full accent-red-500'
                                />
                                <label className='ml-2 font-medium text-base' for='remember'>Se souvenir de moi</label>
                            </div>
                            <p className='font-medium text-base text-red-400'>
                                <Link to="/ForgotPwd"> 
                                    <span className='font-medium text-base text-red-400'>
                                        Mot de passe oublié ?
                                    </span>
                                </Link>
                            </p>
                        </div>
                        <div className='mt-8 flex flex-col gap-y-4'>
                            <button type="submit" className='active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out py-3 px-6 transition-all rounded-xl bg-red-500 text-white text-lg font-bold' >Se connecter</button>
                        </div>
                        <div className='mt-8 flex justify-center items-center'>
                            <p className='font-medium text-base'>Pas de compte ?
                                <Link to="/register">
                                    <span className='text-red-400 text-base font-medium ml-2'>S'inscrire</span>
                                </Link>
                            </p>  
                        </div><br />
                    </div>
                </div> 
            <Outlet /> 
            </form>
        </>   
    )
}


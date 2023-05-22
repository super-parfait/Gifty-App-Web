import React from "react";

export default function Password () {

    return (
        <div className="flex flex-col"><br />
            <div className="flex flex-row gap-3">
            <div>
             <label className='text-sm text-gray-500'>Ancien Mot de Passe</label>
             <input 
             type="text"
                className='w-full py-3 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 hover:border-red-500 hover:shadow-md text-xs'
                placeholder='Entrer votre Ancien Mot de Passe'                      
             />
            </div>
            <div>
             <label className='text-sm text-gray-500'>Nouveau Mot de Passe</label>
             <input 
             type="text"
                className='w-full py-3 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 hover:border-red-500 hover:shadow-md text-xs'
                placeholder='Entrer votre Nouveau Mot de Passe'                      
             />
            </div> 
            
            
            </div>
            <br />
            <div className="flex flex-row gap-3">
            <div>
             <label className='text-sm text-gray-500'>Confirmer Mot de Passe</label>
             <input 
             type="text"
                className='w-full py-3 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 hover:border-red-500 hover:shadow-md text-xs'
                placeholder='Confirmer votre Nouveau Mot de Passe'                      
             />
            </div>
           
            
            </div>
            <div className='mt-8 flex flex-col gap-y-4'>
                    <button className='active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out py-3 px-6 transition-all rounded-xl bg-red-500 text-white text-xs font-bold' >Valider</button>
            </div>
        </div>
       
    )
}
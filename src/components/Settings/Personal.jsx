import React from "react";


export default function Personal () {

    return (
        <div className="flex flex-col"><br />
            <div className="flex flex-row gap-3">
            <div>
             <label className='text-sm text-gray-500'>Nom & Prénoms</label>
             <input 
             type="text"
                className='w-full py-3 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 hover:border-red-500 hover:shadow-md text-xs'
                placeholder='Entrer votre Nom et Prénoms'                      
             />
            </div>
            <div>
             <label className='text-sm text-gray-500'>Email</label>
             <input 
             type="text"
                className='w-full py-3 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 hover:border-red-500 hover:shadow-md text-xs'
                placeholder='John Doe'                      
             />
            </div> 
            <div>
             <label className='text-sm text-gray-500'>Localisation</label>
             <input 
             type="text"
                className='w-full py-3 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 hover:border-red-500 hover:shadow-md text-xs'
                placeholder='Enter votre localisation'                      
             />
            </div>
            
            </div>
            <br />
            <div className="flex flex-row gap-3">
            <div>
             <label className='text-sm text-gray-500'>Date d'Anniversaire</label>
             <input
             type="date" 
                className='w-full py-3 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 hover:border-red-500 hover:shadow-md'
                placeholder='01/01/2023'                      
             />
            </div>
            <div>
             <label className='text-sm text-gray-500'>Ajouter des événments</label>
             <input
             type="date" 
                className='w-full py-3 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 hover:border-red-500 hover:shadow-md '
                placeholder='01/01/2023'                      
             />
            </div> 
            
            
            </div>
            <div className='mt-8 flex flex-col gap-y-4'>
                    <button className='active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out py-3 px-6 transition-all rounded-xl bg-red-500 text-white text-xs font-bold' >Valider</button>
            </div>
        </div>
        
        
    )
}
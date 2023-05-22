import React from 'react';

export default function Profile() {
    return (
        <>
          <div className="flex flex-col"><br />
            <div className="flex flex-row gap-3">
            <div>
             <label className='text-sm text-gray-500'>Nom & Prénoms</label>
             <input 
             type="text"
                className='w-full py-3 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 hover:border-red-500 hover:shadow-md text-xs'
                placeholder='John Doe'
                disabled                      
             />
            </div>
            <div>
             <label className='text-sm text-gray-500'>Email</label>
             <input 
             type="text"
                className='w-full py-3 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 hover:border-red-500 hover:shadow-md text-xs'
                placeholder='JohnDoe@gmail.com' 
                disabled                     
             />
            </div> 
            <div>
             <label className='text-sm text-gray-500'>Localisation</label>
             <input 
             type="text"
                className='w-full py-3 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 hover:border-red-500 hover:shadow-md text-xs'
                placeholder='Angré 8e Tranche' 
                disabled                     
             />
            </div>
            
            </div>
            <br />
            <div className="flex flex-row gap-3">
            <div>
             <label className='text-sm text-gray-500'>Date d'Anniversaire</label>
             <input
             type="text" 
                className='w-full py-3 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 hover:border-red-500 hover:shadow-md'
                placeholder='01/01/2023' 
                
                disabled                     
             />
            </div>
            <div>
             <label className='text-sm text-gray-500'>Ajouter des événments</label>
             <input
             type="text" 
                className='w-full py-3 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 hover:border-red-500 hover:shadow-md'
                placeholder='01/02/2023' 
                disabled                     
             />
            </div>
             
           
            
            </div>
        </div>
        </>
    )
}
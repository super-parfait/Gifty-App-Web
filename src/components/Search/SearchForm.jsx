import React from 'react';
import { ImSearch } from 'react-icons/im';


export default function SearchForm() {
  return (
  <form className='flex justify-between items-center max-w-[700px] mx-auto w-full border p-1 rounded-md text-black bg-gray-100/90'>
    <div>
      <input className='bg-transparent w-[300px] sm:w-[400px] font-[Poppins] focus:outline-none' type='text'placeholder='Rechercher un cadeau par thème'/>
    </div>
    <div>
      <button>
        <ImSearch size={20} className='icon' style={{color: '#ffffff'}}  />
      </button>
    </div>
  </form>
  )
}

// import React from 'react';

// export default function SearchForm() {

//   return
  
// }
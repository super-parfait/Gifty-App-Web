import React from 'react';
import Vid from '../../assets/animation/4.mp4';
import SearchForm from '../Search/SearchForm';


const Header = () => {
  return (
    <div className='w-full h-screen relative'>
      <video
        className='w-full max-h-full object-cover'
        src={Vid}
        autoPlay
        loop
        muted
      />
      <div className='absolute w-full h-full top-0 left-0 bg-gray-900/30'></div>
      <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4'>
        
        <h1> </h1>
        <h2> </h2>
        <SearchForm />
      </div>
    </div>
  );
};

export default Header;

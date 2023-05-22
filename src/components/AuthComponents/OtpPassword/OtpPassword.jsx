
import React, { useEffect, useState } from 'react';
import { Link, Outlet } from "react-router-dom";
import { TiChevronLeft } from "react-icons/ti";
// import { FaChevronLeftCircle } from 'react-icons/fa';

export default function OtpResetPassword() {
    const [otp, setOtp] = React.useState(new Array(5).fill(""));
     const handleChange= (el, index) => 
     {
        if(isNaN(el.value)) 
        {
            return false
        } 

        setOtp([...otp.map((data, i) => (i  === index ? el.value : data))])

        if(el.nextSibling)
        {
            el.nextSibling.focus()
        }
     }

     const [minutes, setMinutes] = useState(1);
     const [seconds, setSeconds] = useState(0);
   
     useEffect(() => {
       const interval = setInterval(() => {
         if (seconds > 0) {
           setSeconds(seconds - 1);
         }
   
         if (seconds === 0) {
           if (minutes === 0) {
             clearInterval(interval);
           } else {
             setSeconds(59);
             setMinutes(minutes - 1);
           }
         }
       }, 1000);
   
       return () => {
         clearInterval(interval);
       };
     }, [seconds]);
   
     const resendOTP = () => {
       setMinutes(1);
       setSeconds(0);
     };
     


    return (<>
        <div className='bg-white px-10 py-3 rounded-3xl border-2 border-gray-200'><br />
            <h1 className='text-5xl font-extrabold text-red-500'>Gifty</h1>
            <p className='font-normal text-lg text-gray-400 mt-4'>Veuillez entrer le code reçu par SMS</p>
            <div className='mt-3'>
                <div id="otp" class="flex flex-row justify-center text-center px-2 mt-5">
                    {otp.map((data, i) => {
                        return (
                            <input className="m-5 h-20 w-12 text-center form-control border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 hover:border-red-500 hover:shadow-md" 
                                type="text" 
                                id="first" 
                                maxLength={1}
                                key={i}
                                value={data}
                                onChange={e => handleChange(e.target, i)}
                                onFocus={e => e.target.select()}
                            />
                        );
                    })}
                </div>

                <div className="flex items-center justify-between my-6">
                    {seconds > 0 || minutes > 0 ? (
                        <p className='text-sm font-meduim text-black'>
                        
                        Expiration du code dans : {" "}
                        <span className='text-red-500'> 
                            {minutes < 10 ? `0${minutes}` : minutes}:
                            {seconds < 10 ? `0${seconds}` : seconds}
                        </span>  
                        </p>
                    ) : (
                        <p className='text-sm font-meduim text-black'>Vous n'aviez pas reçu de code ?</p>
                    )}

                    <span
                        className="border-none cursor-pointer font-medium text-base text-red-400"
                        disabled={seconds > 0 || minutes > 0}
                        style={{
                        color: seconds > 0 || minutes > 0 ? "#CBD5E0" : "#EF4444",
                        }}
                        onClick={resendOTP}
                    >
                        Renvoyez
                    </span>
                </div>

                <div className='mt-8 flex flex-col gap-y-4'>
                    <button className='active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out py-3 transition-all rounded-xl bg-red-500 text-white text-lg font-bold'>Envoyer</button>
                </div>
                <br />
                <div className='flex justify-center items-center'>
                    <Link to="/login">
                        <span className='text-red-400'><TiChevronLeft size={40}/></span>                        
                    </Link>
                </div>
            </div>
        </div><Outlet />
        </>
    );
}


// import React, { useState } from 'react';
// import AuthCode from 'react-auth-code-input';

// const App = () => {
//   const [result, setResult] = useState();
//   const handleOnChange = (res: string) => {
//     setResult(res);
//   };

//   return <AuthCode allowedCharacters='numeric' onChange={handleOnChange} />;
// };

// export default App;
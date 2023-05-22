import React, { useState, useContext } from "react";
import {Link} from 'react-router-dom';
// import { AiFillSetting } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { FaUserCircle } from 'react-icons/fa';
// import { HiOutlineClipboard, HiOutlineLogout, HiOutlineUserCircle } from 'react-icons/hi';
import { HiOutlineClipboard, HiOutlineLogout } from 'react-icons/hi';
import Auth from "../../contexts/Auth";
import {logout} from "../../services/AuthApi"
// import Imguser from '../../assets/img/1.png'
const User = () => {


    const { isAuthenticated, setIsAuthenticated } = useContext(Auth);

    const handleLogout = () => {
      logout();
      setIsAuthenticated(false);
    }
    
    // const user = false
    
    const [ profileOpen, setProfileOpen ] =useState(false)
    
    const close = () => {

        setProfileOpen(null)
    }


    return (
        <>
            <div className="profile"> 
                {isAuthenticated ? (
                    <>
                        <button className="img" onClick={() => setProfileOpen(!profileOpen ) }>
                            <FaUserCircle size={30} className="text-black"/>
                            {/* <img src="../../assets/img/utilisateur-du-cercle.svg" alt="Imguser"/> */}
                           {/* <ImgUser size={25} className="text-black"/> */}
                        </button>

                        { profileOpen && ( <div className="openProfile boxItems" onClick={close}>
                            <div className="image">
                                <div className="img">
                                <FaUserCircle size={40} className="text-black"/>
                                {/* <ImgUser size={25} className="text-black"/> */}
                                </div>
                                <div className="ml-2">
                                    
                                        <h4 className="font-bold text-black uppercase ">John Doe</h4>
                                        <label htmlFor="phoneNumber ">0501969645</label>
                                    
                                </div>
                            </div><hr />
                            <button className="box">
                                {/* <BsGear className="icon" size={28}/> */}
                                <IoSettingsOutline className="icon" size={28}/>
                                <h4 className="font-bold text-black">Mon Compte</h4>
                            </button>
                            <button className="box">
                                <HiOutlineClipboard className="icon" size={28}/>
                                <h4 className="font-bold text-black">Mes Commandes</h4>
                            </button>
                            <button className="box"  onClick={handleLogout}>
                                <HiOutlineLogout className="icon" size={28}/>
                                <h4 className="text-red-400">Deconnexion</h4>
                            </button>
                        </div>
                        )}
                    </>
                ) : (

                    <Link to="/login" >  
                        <button className="font-bold text-black" > Se connecter </button>
                    </Link>
                     
                )}
            </div>
        </>
    )
}

export default User
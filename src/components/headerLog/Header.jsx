import React from "react";
import './header.css'

// import Header from '../../components/headerLog/Header';
// import SearchForm from '../../components/Search/SearchForm'
import Card from '../Header/Card'
import User from '../Header/User'
// import { AiOutlineSearch } from "react-icons/ai";

const Header = () => {
    window.addEventListener("scroll", function() {
        const header = this.document.querySelector(".header")
        header.classList.toggle("active", this.window.scrollY > 100)
    })
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })

    return (
        <>
            <header className="header">
                <div className="scontainer flex">
                    <div className="logo">
                        <h2 className="text-red-500 font-bold">GIFTY</h2>
                    </div>
                    {/* <div className="search flex">
                        
                        <AiOutlineSearch />  
                        <input type="text" placeholder="Rechercher"/>
                    </div> */}
                    <div className="account flexCenter">
                        <Card />
                        <User />
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
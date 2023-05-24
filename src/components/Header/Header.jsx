// import React from 'react';


// import "./Header.css"
// import Search from "./Search"
// // import Vid from '../../assets/animation/4.mp4';
// // import SearchForm from '../Search/SearchForm';

// import Card from './Card'
// import User from './User'
// // import { AiOutlineSearch } from "react-icons/ai";

// const Header = ( { CartItem }) => {

//     window.addEventListener("scroll", function() {
//         const header = this.document.querySelector(".header")
//         header.classList.toggle("active", this.window.scrollY > 100)
//     })
//     window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })

//     return (
//         <>
//           <Search CartItem={CartItem} />
//           {/* <Navbar /> */}
//         </>
//       )
// }

// export default Header

import React from "react"
import "./Header.css"
import Search from "./Search"
// import Navbar from "./Navbar"

const Header = ({ CartItem }) => {
  return (
    <>
      <Search CartItem={CartItem} />
      {/* <Navbar /> */}
    </>
  )
}

export default Header

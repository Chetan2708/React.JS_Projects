import React from 'react'
import { Link } from 'react-router-dom'
import {FiShoppingBag} from "react-icons/fi"
import { useSelector} from "react-redux";
import { FaAmazon } from 'react-icons/fa'
const Header = () => {
  const { cartitems } = useSelector((state) => state.Cart);
  return (
      <nav>
        <h2>
        <Link to={"/"}><FaAmazon/></Link>
        </h2>
        <div>
          <Link to={"/"}>Home</Link>
          <Link to={"/cart"}>
          <FiShoppingBag/><p>{cartitems.length}</p>
         </Link> 
        </div>
      </nav>
  )
}

export default Header
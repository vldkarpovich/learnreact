import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import '../../../styles/App.css'
import { BasketContext } from '../../../context';

const Navbar = () => {

  const {countBasket, setCountBasket} = useContext(BasketContext);

  return (
    <div className="navbar">
        <div className="navbar__links">
          <Link to="/about">About web saits</Link>
          <Link to="/posts">Posts</Link>
          <Link to="/basket">Basket {countBasket}</Link>
        </div>
    </div>
  )
}

export default Navbar
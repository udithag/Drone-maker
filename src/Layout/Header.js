
import React from "react";
import CartButton from "./CartButton";
import classes from "./Header.module.css";

const Header = (props)=>{


 return (
   <header className = {classes.header}>
     <h2>Drone Maker</h2>
     <CartButton onClick = {props.onShowCart}/>
   </header>
 );

}

export default Header;
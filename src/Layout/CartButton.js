import { useContext } from "react";
import CartContext from "../Store/cart-context";
import CartIcon from "./CartIcon";
import classes from "./CartButton.module.css";



const CartButton =(props)=>{
    const cartCtx = useContext(CartContext);

       console.log(cartCtx.components);

   return <button className={classes.button} onClick={props.onClick}>
       <span className={classes.icon}>
       <CartIcon/>
       </span>
       <span> Cart</span>
       <span className={classes["total-amount"]}>{cartCtx.totalAmount}</span>
      
       </button>

};

export default CartButton;
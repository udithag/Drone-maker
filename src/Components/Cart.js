import React,{useContext}from "react";
import Modal from "../UI/Modal";
import CartContext from "../Store/cart-context";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";



const Cart = (props) => {

  const cartCtx = useContext(CartContext);
  //console.log("ran");
  //console.log(cartCtx.components);
  //console.log(cartCtx.totalAmount);

  const addItemToCartHandler = (item)=> {
    // console.log(item);
     cartCtx.addItem(item);
  }

  const removeItemsFromCartHandler =(item)=> {

   //console.log(item);
   cartCtx.removeItem(item);
  }

  const itemList = cartCtx.components.map((component) => {
    return (
      <CartItem
        id={component.id}
        key={component.key}
        name={component.name}
        price={component.price}
        quantity={component.quantity}
        weight={component.weight}
        addItemToCart = {addItemToCartHandler}
        removeItemFromCart = {removeItemsFromCartHandler}
      />
    );
  });

  
 

return (
    <Modal onClose = {props.onClose}>
      <ul className={classes.itemlist}>
        {itemList}
      </ul>
      <div>
      <div className={classes["total-price"]}> 
        <div> Total Price </div>
        <div>{`$${cartCtx.totalPrice}`}</div>
      </div>
      <div className={classes.buttons}> 
        <button className={classes.order}>Order</button>
        <button className={classes.close} onClick={props.onClose}>Close</button>
      </div>
      </div>
    </Modal>
);

}

export default Cart;
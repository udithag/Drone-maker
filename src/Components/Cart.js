import React,{useContext}from "react";
import Modal from "../UI/Modal";
import CartContext from "../Store/cart-context";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";



const Cart = (props) => {

  const cartCtx = useContext(CartContext);
  console.log("ran");
  console.log(cartCtx.components);
  console.log(cartCtx.totalAmount);

  const itemList = cartCtx.components.map((component) => {
    return (
      <CartItem
        id={component.id}
        key={component.key}
        name={component.name}
        price={component.price}
        quantity={component.quantity}
      />
    );
  });

return (
    <Modal onClose = {props.onClose}>
      <ul className={classes.itemlist}>
        {itemList}
      </ul>
      <div>
      <p> {cartCtx.components.length}</p>
      <p> {cartCtx.totalAmount}</p>
      </div>
    </Modal>
);

}

export default Cart;
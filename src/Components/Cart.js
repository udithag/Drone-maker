import React,{useContext}from "react";
import Modal from "../UI/Modal";
import CartContext from "../Store/cart-context";



const Cart = (props) => {

  const cartCtx = useContext(CartContext);
  console.log("ran");
  //console.log(cartCtx.components);
  console.log(cartCtx.totalAmount);
return (
    <Modal onClose = {props.onClose}>
      <p>fsdfsfsdjgsdjkgdfkfbn</p>
      <p>sdjasfjjfsjfjsfjfjjfjj</p>
      <p> {cartCtx.components.length}</p>
      <p> {cartCtx.totalAmount}</p>
    
    </Modal>
);

}

export default Cart;
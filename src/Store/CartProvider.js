import { useState} from "react";
import CartContext from "./cart-context";



//const itemsArray = [];


const CartProvider = (props) => {
    const [totalAmountInCart, setTotalAmountInCart] = useState(0);
    const [updatedItemsArray, setUpdatedItemsArray] = useState([]);
 
  
  const addItemsToCartHandler = (item) => {
    const itemsArray = [...updatedItemsArray];
   if (itemsArray.length > 0) {
     let idExist = false;

     for (let i = 0; i < itemsArray.length; i++) {
       if (item.id === itemsArray[i].id) {
         itemsArray[i].quantity = itemsArray[i].quantity + item.quantity;
         idExist = true;
       }
     }
     if (idExist === false) {
       itemsArray.push(item);
     }
   }

   if (itemsArray.length === 0) {
     itemsArray.push(item);
   }

   let totalItemsAmount = 0;

   if (itemsArray.length > 0) {
     itemsArray.forEach((item) => {
       return (totalItemsAmount = totalItemsAmount + item.quantity);
     });
   } else {
     totalItemsAmount = 0;
   }

   setTotalAmountInCart(totalItemsAmount);
   setUpdatedItemsArray(itemsArray);
   //console.log(updatedItemsArray);
 };
 

  

const cartContext ={

    components:updatedItemsArray,
    totalAmount: totalAmountInCart,
    addItem:addItemsToCartHandler
}

return <CartContext.Provider value ={cartContext}>
          {props.children}
       </CartContext.Provider>
}

export default CartProvider;



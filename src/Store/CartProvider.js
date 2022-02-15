import { useState} from "react";
import CartContext from "./cart-context";



//const itemsArray = [];


const CartProvider = (props) => {
    const [totalAmountInCart, setTotalAmountInCart] = useState(0);
    const [updatedItemsArray, setUpdatedItemsArray] = useState([]);
     
    let totalPrice=0;
    updatedItemsArray.forEach(item => {

      totalPrice = totalPrice + item.quantity*item.price
    });

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
 
 const removeItemsFromCartHandler = (item) => {

     // console.log(item); 
      const itemsArray = [...updatedItemsArray];
      let  filteredItemsArray=[];

      for (let i = 0; i < itemsArray.length; i++) {

        if (item.id === itemsArray[i].id && itemsArray[i].quantity===1){
          filteredItemsArray = itemsArray.filter((item)=> item.id !== itemsArray[i].id);
        }

        if (item.id === itemsArray[i].id && itemsArray[i].quantity > 1) {
          itemsArray[i].quantity = itemsArray[i].quantity -1;
          filteredItemsArray =[...itemsArray];
        }
      }

      let totalItemsAmount = 0;

      if (filteredItemsArray.length > 0) {
        filteredItemsArray.forEach((item) => {
          return (totalItemsAmount = totalItemsAmount + item.quantity);
        });
      } else {
        totalItemsAmount = 0;
      }
      setTotalAmountInCart(totalItemsAmount);
      setUpdatedItemsArray(filteredItemsArray);
      
 }
  

const cartContext ={

    components:updatedItemsArray,
    totalAmount: totalAmountInCart,
    totalPrice: totalPrice,
    addItem:addItemsToCartHandler,
    removeItem: removeItemsFromCartHandler
}

return <CartContext.Provider value ={cartContext}>
          {props.children}
       </CartContext.Provider>
}

export default CartProvider;



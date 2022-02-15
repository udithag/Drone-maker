import React from "react";

const CartContext=React.createContext({
    components:[],
    totalAmount: 0,
    addItem:  (item)=>{},
    removeItem: (item) =>{}

});

export default CartContext;
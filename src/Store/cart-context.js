import React from "react";

const CartContext=React.createContext({
    components:[],
    totalAmount: 0,
    addItem:  (item)=>{},
    removeItem: (id) =>{}

});

export default CartContext;
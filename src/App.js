import {useState} from "react";
import Cart from "./Components/Cart";
import Electronics from "./Layout/Electronics";
import Header from "./Layout/Header";
import CartProvider from "./Store/CartProvider";

function App() {

  const[cartIsShown,setCartIsShown]=useState(false);

  const showCartHandler =() => {

    setCartIsShown(true);
  };

  const hideCartHandler =() =>{

    setCartIsShown(false);
  }

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose ={hideCartHandler}/>}
      <Header onShowCart = {showCartHandler}/>
      <div>
      <Electronics/>
      </div>
    </CartProvider>
  );
}

export default App;

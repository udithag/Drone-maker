import React, {useRef,useContext} from "react";
import classes from "./ElectronicItem.module.css";
import CartContext from "../../Store/cart-context";



const ElectronicItem = (props) => {
    const cartCtx = useContext(CartContext);
    const useInputRef = useRef();

    

    const submitHandler = (event)=> {
        event.preventDefault();
        const amount = useInputRef.current.value;
        // itemsArray.push({id: props.id, quantiy: +amount});
        cartCtx.addItem({id: props.id, quantity: +amount, name: props.name, key: props.id, price: props.price, weight: props.weight});
        // console.log(itemsArray);
        useInputRef.current.value = 1;
      
    }

return <li className={classes.item}>
          <div>
            <div className={classes.name}> {props.name}</div> 
            <div className={classes.description} > {props.description} </div>
            <div className={classes.weight}> weight = {`${props.weight}g`}</div>
            <div className={classes.price}> Price = {`$${props.price}`}</div>           
          </div>
          <form className={classes.input} onSubmit={submitHandler}>
              <label htmlFor="amount">Amount</label>
              <input id="amount" type="number" min="1" step="1" defaultValue="1" ref={useInputRef}></input>            
              <div>
              <button>+Add</button>
              
              </div>
          </form>
       </li>

}

export default ElectronicItem;

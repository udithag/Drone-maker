import classes from "./CartItem.module.css";

const CartItem = (props) => {

  const onAddToCart = ()=> {
       props.addItemToCart({id: props.id, quantity: 1, name: props.name, key: props.id, price: props.price, weight: props.weight});
  }

  const onRemoveFromCart = () => {

       props.removeItemFromCart({id: props.id, quantity: 1, name: props.name, key: props.id, price: props.price, weight: props.weight})
  }

    return (
      <li className={classes["list-item"]}>
        <div>
          <div className={classes.name}>{props.name}</div>
          <div className={classes.details}>
            <div className={classes.price}>{`$${props.price}`}</div>
            <div className={classes.quantity}>{`x ${props.quantity}`}</div>
          </div>
        </div>
        <div className={classes.buttons}>
            <span> <button onClick={onRemoveFromCart}>-</button> </span>
            <span> <button onClick={onAddToCart}>+</button> </span>
        </div>
      </li>
    );
}

export default CartItem;
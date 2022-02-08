import classes from "./CartItem.module.css";

const CartItem = (props) => {

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
            <span> <button>-</button> </span>
            <span> <button>+</button> </span>
        </div>
      </li>
    );
}

export default CartItem;
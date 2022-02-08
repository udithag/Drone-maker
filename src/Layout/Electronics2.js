import React from "react";
import classes from "./Electronics2.module.css";



const Electronics2 = () => {


    return (
        <div className={classes.mytabs}>
           <input type="radio" id = "tabfree" name="mytabs" checked ="checked"></input>
           <label htmlFor="tabfree">Free</label>
           <div className={classes.tab}>
                <h2>Free</h2>
                <p>free tab content</p>
           </div>
           <input type="radio" id = "tabsilver" name="mytabs"></input>
           <label htmlFor="tabsilver">Silver</label>
           <div className={classes.tab}>
                <h2>Silver</h2>
                <p>Silver tab content</p>
           </div>
           <input type="radio" id = "tabgold" name="mytabs"></input>
           <label htmlFor="tabgold">Gold</label>
           <div className={classes.tab}>
                <h2>Gold</h2>
                <p>Gold tab content</p>
           </div>
        </div>);

}

export default Electronics2;
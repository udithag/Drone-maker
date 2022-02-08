import React from "react";
import ElectronicItem from "./ElectronicItem";
import classes from "./ElectronicItems.module.css";


const ElectronicItems = (props)=> {

    const filteredComponents = props.droneItems.filter(item => item.id.includes(props.activeId));

   // console.log(filteredComponents);
   const filteredComponentsList = filteredComponents.map((item) => (
     <ElectronicItem
       id={item.id}
       key={item.id}
       name={item.name}
       description={item.description}
       price={item.price}
       weight={item.weight}
     />
   ));

 return (
   <div className={classes.items}>
     <ul>{filteredComponentsList}</ul>
   </div>
 );

}

export default ElectronicItems;
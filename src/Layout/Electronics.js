import React ,{useState} from "react";
import classes from "./Electronics.module.css";
import ElectronicItems from "./ElectronicItems/ElectronicItems";

const DRONE_COMPONENTS = [
  {
     id:"e1",
     name: "Turnigy ESC",
     description: "20A",
     price: "20",
     weight: "30"
  },
  {
    id:"e2",
    name: "Airbnb ESC",
    description: "40A",
    price: "28",
    weight: "38"
  },
  {
    id:"m1",
    name: "Turnigy Motor",
    description: "200W",
    price: "100",
    weight: "110"
  },
  {
    id:"m2",
    name: "Tmotor Motor",
    description: "300W",
    price: "120",
    weight: "135"
  },
  {
    id:"f1",
    name: "Px4",
    description: "Pixhawk4",
    price: "200",
    weight: "115"
  },
  {
    id:"f2",
    name: "APM",
    description: "Arduo Pilot",
    price: "175",
    weight: "110"
  },
  {
    id:"p1",
    name: "Tmotor prop",
    description: "14x8",
    price: "30",
    weight: "35"
  },
  {
    id:"p2",
    name: "Turnigy prop",
    description: "22x12",
    price: "80",
    weight: "100"
  },
  {
    id:"b1",
    name: "Turnigy battery",
    description: "2500mAh",
    price: "150",
    weight: "225"
  },
  {
    id:"b2",
    name: "CHNL battery",
    description: "3500mAh",
    price: "190",
    weight: "315"
  },
]
    
    



const Electronics = () => {

    const[string, setString] = useState("ESCs");
    const[activeButtonId, setActiveButtonId] = useState("e");

    
    const showContentHandler = (event)=> {
        
        if (event.target.id === "e"){            
            setString("ESCs");            
        }
        if (event.target.id ==="m"){            
          setString("Motors");
        }
        if (event.target.id ==="f"){            
          setString("Flight Controllers");
        }
        if (event.target.id ==="p"){            
          setString("Propellers");
        }
        if (event.target.id ==="b"){            
          setString("Batteries");
        }

        setActiveButtonId(event.target.id);
    }

   return (
       <div className={classes.mytabs}>
         <div className={classes.buttonArea}>
           <button id="e" className={classes[activeButtonId==="e"?"active":"inactive"]} onClick={showContentHandler}> ESCs</button>      
           <button id="m" className={classes[activeButtonId==="m"?"active":"inactive"]} onClick={showContentHandler}>Motors</button>
           <button id="f" className={classes[activeButtonId==="f"?"active":"inactive"]} onClick={showContentHandler}>Flight Controllers</button>
           <button id="p" className={classes[activeButtonId==="p"?"active":"inactive"]} onClick={showContentHandler}>Propellers</button>
           <button id="b" className={classes[activeButtonId==="b"?"active":"inactive"]} onClick={showContentHandler}>Batteries</button>
         </div>
         <div id="tab" className={classes.tab}>
           <h3>{string}</h3>
           <p>Select the {string}</p>
           <ElectronicItems activeId={activeButtonId} droneItems={DRONE_COMPONENTS} />
         </div>
       </div>
   );

}

export default Electronics;
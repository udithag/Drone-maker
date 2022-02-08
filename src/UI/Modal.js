import {Fragment} from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";


const Backdrop = (props)=> {

    return <div className={classes.backdrop} onClick={props.onClose}></div>

};


const ModalOverlay = (props) => {

    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
}

const portalElement = document.getElementById("overlays");

const Modal = (props)=> {

    return <Fragment>
     {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, portalElement)}
     {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portalElement)}
     {/* <Backdrop/>
     <ModalOverlay>{props.children}</ModalOverlay>
     if  portals are not used, it can be done like this */}
 </Fragment>

}

export default Modal;
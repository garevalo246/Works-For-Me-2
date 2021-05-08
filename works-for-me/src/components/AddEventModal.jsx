import { Modal } from "react-modal";
import React, { useState } from "react";

export default function({isOpen, onClose, onEventAdded}){
    const [title,setTitle] = useState();
    const [start,setStart] = useState(new Date());
    const [end,setEnd] = useState(new Date());

    const onSubmit = (event) =>{
        event.preventDefault();

        onEventAdded({
            title,
            start,
            end
        })
        onClose();
    }
    return(
        <Modal isOpen={isOpen} onRequestClose={}>
            <form onSubmit={onSubmit}>
                <input placeholder="Title" 
                value={title}
                onChange={e=> SVGTextPositioningElement(e.target.value)}/>
            </form>
        </Modal>
    )
}
import Modal from "react-modal";
import React, { useState } from "react";
import DatePicker from 'react-datepicker';

export default function({isOpen, onClose, onEventAdded}){
    const [title,setTitle] = useState("");
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
        <Modal isOpen={isOpen} onRequestClose={onClose}>
            <form onSubmit={onSubmit}>
                <input placeholder="Title" 
                value={title}
                onChange={e=> setTitle(e.target.value)}/>

                <div>
                    <label class="text-dark" >To: </label>
                    <DatePicker 
                    closeOnScroll = {true}
                    value = {start}
                    onChange={date=>setStart(date)}
                    timeInputLabel = "Time:"
                    dateFormat = "MM/dd/yyyy h:mm aa"
                    showTimeInput
                    placeholderText = "End date"
                    />
                </div>
                <div>
                    <label class="text-dark" >From: </label>
                    <DatePicker 
                    closeOnScroll = {true}
                    value = {end}
                    onChange={date=>setEnd(date)}
                    timeInputLabel = "Time:"
                    dateFormat = "MM/dd/yyyy h:mm aa"
                    showTimeInput
                    placeholderText = "End date"
                    />
                </div>
                <button>Add event</button>
            </form>
        </Modal>
    )
}
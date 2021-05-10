import Modal from "react-modal";
import React, { useState } from "react";
import DatePicker from 'react-datepicker';
import {Paper, Button, Typography, Mui} from "@material-ui/core"

const buttonStyle = {
    color: "black",
    borderColor: "black"
};

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
    }
    return(
        <Paper variant = "outlined" >
            <Typography variant = "h6" align = "center">Add an Event</Typography>        
                <form 
                onSubmit={onSubmit}>
                    <div class = "col-12">
                        <Typography variant = "h7" >Title:</Typography>
                        <input  
                        placeholder="Going Out" 
                        value={title}
                        onChange={e=> setTitle(e.target.value)}             
                        className="form-control"
                        />
                    </div>
                    <br></br>
                    <div class = "col-12"  >
                        <Typography variant="h7">Description:</Typography>
                        <input  
                        type="text"                          
                        className="form-control"
                        />
                    </div>
                    <br></br>
                    <div class = "col-12"> 
                        <Typography variant = "h7">From:
                        <DatePicker 
                        closeOnScroll = {true}
                        value = {start}
                        onChange={date=>setStart(date)}
                        timeInputLabel = "Time:"
                        dateFormat = "MM/dd/yyyy h:mm aa"
                        showTimeInput
                        placeholderText = "End date"             
                        className="form-control"
                        />
                        </Typography>
                    </div>
                    <br></br>
                    <div class = "col-12">
                        <Typography variant = "h7">To:
                        <DatePicker 
                        closeOnScroll = {true}
                        value = {end}
                        onChange={date=>setEnd(date)}
                        timeInputLabel = "Time:"
                        dateFormat = "MM/dd/yyyy h:mm aa"
                        showTimeInput
                        placeholderText = "End date"             
                        className="form-control"
                        />
                        </Typography>
                    </div>
                    <br></br>
                    <div class = "col-12" align = "center">
                        <button 
                        style = {buttonStyle}
                        class="btn btn-danger"
                        variant = "contained"
                        color = "secondary"
                        size = "small"
                        fullWidth = "true"                         
                        >Add Event</button>
                        
                    </div>
                </form>
            </Paper>
    )
}
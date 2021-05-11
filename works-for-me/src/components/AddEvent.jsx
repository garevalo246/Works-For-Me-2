import React, { useState } from "react";
import DatePicker from 'react-datepicker';
import {Paper, Typography, createMuiTheme} from "@material-ui/core"
import useStyles from './styles'

const buttonStyle = {
    color: "white",
    borderColor: "white"
};

export default function({ onEventAdded}){

    const classes = useStyles();
    const theme = createMuiTheme({
        spacing: 2,
    })
    
    theme.spacing(3)


    const [title,setTitle] = useState("");
    const [start,setStart] = useState(new Date());
    const [end,setEnd] = useState(new Date());
    
    const refreshPage = () => {
        window.location.reload();
    }

    const onSubmit = (event) =>{
        event.preventDefault();
        
        onEventAdded({
            title,
            start,
            end
        })
        refreshPage()
    }

    return(
        <Paper variant = "outlined" className = {classes.Paper}>
            <Typography variant = "h6" align = "center">Add an Event</Typography>        
                <form 
                onSubmit={onSubmit}>
                   
                    <div class = "container-fluid col-12">
                        <Typography variant = "h7" >Title:</Typography>
                       
                        <input 
                        
                        placeholder="Event Name" 
                        value={title}
                        onChange={e=> setTitle(e.target.value)}             
                        className="form-control"
                       />

                    </div>
                    <br></br>
                    <div class = "container-fluid col-12">
                        <Typography variant="h7">Description:</Typography>
                        <input  
                        type="text"        
                        placeholder = "Describe Event"                  
                        className="form-control"
                        />
                    </div>
                    <br></br>
                    <div class = "container-fluid col-12" align = "justify"> 
                        <Typography variant = "h7">From:
                        <DatePicker 
                        closeOnScroll = {true}
                        value = {start}
                        selected = {start}
                        onChange={date=>setStart(date)}
                        timeInputLabel = "Time:"
                        dateFormat = "MM/dd/yyyy h:mm aa"
                        showTimeInput            
                        className="form-control"
                        />
                        </Typography>
                    </div>
                    <br></br>
                    <div class = "container-fluid col-12" align = "justify" >
                        <Typography variant = "h7">To:
                        <DatePicker 
                        closeOnScroll = {true}
                        value = {end}
                        selected = {end}
                        onChange={date=>setEnd(date)}
                        timeInputLabel = "Time:"
                        dateFormat = "MM/dd/yyyy h:mm aa"
                        showTimeInput
                                   
                        className="form-control"
                        />
                        </Typography>
                    </div>
                    <br></br>
                    <div class = "container-fluid col-12" align = "center">
                        <button className = {classes.buttonSubmit}
                        style = {buttonStyle}
                        class="btn btn-success"
                        variant = "contained"
                        color = "primary"
                        size = "small"
                        fullWidth                         
                        >Add Event</button>
                    </div>
                    
                    <br></br>
                </form>
            </Paper>
    )
}
import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import {Paper, Typography, createMuiTheme} from '@material-ui/core'
import Calendar from './Calendar';
import useStyles from './styles'

const buttonStyle = {
    color: "white",
    borderColor: "white"
};


export default class CreateEvent extends Component {
    
    constructor(props){
        super(props);

        this.onChangeStart = this.onChangeStart.bind(this);
        this.onChangeEnd = this.onChangeEnd.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            start: new Date(),
            end: new Date(),
            title: ''
        }    
    }
    

    componentDidMount() {
        // this.setState({
        //     start: '2021-05-07T03:50:19.274+00:00',
        //     end: '2021-05-07T03:50:19.274+00:00',
        //     title: ''
        // })
    }

    onChangeStart(date) {
        this.setState({
            start: date
        });
    }
    onChangeEnd(date) {
        this.setState({
            end: date
        });
    }    
    onChangeTitle(e) {
        this.setState({
            title: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const event = {
            title: this.state.title,
            start: this.state.start,
            end: this.state.end,
        }

        console.log(event)
        
        axios.post('http://localhost:5000/event/add', event)
        .then(res => console.log(res.data));

        window.location = '/';

    }
    render(){
        return (
            <div class = "container-fluid col-5">
            <Paper variant = "outlined">
                <form >
                    <div>
                        <Typography variant = "h6" align = "center">Need help scheduling an event?</Typography>        
                    </div>
                    <br></br>
                    <div class = "container-fluid col-10">
                        <Typography variant = "h7" >Fill out some preferences:</Typography>
                       
                        <input                         
                        placeholder="Weekdays/Weekends"
                        className="form-control"
                       />

                    </div>
                    <br></br>
                    <div class = "container-fluid col-10">
                        <Typography variant="h7">Type of event:</Typography>
                        <input  
                        type="text"        
                        placeholder = "Personal/Business"                  
                        className="form-control"
                        />
                    </div>
                    <br></br>
                    <div class = "container-fluid col-10" align = "justify">
                        <Typography variant = "h7"> Looking for available time between this interval:</Typography>
                    </div>
                    <br></br>
                    <div class = "container-fluid col-10" align = "justify"> 
                    <Typography variant = "h7">From </Typography>
                        <DatePicker 
                        closeOnScroll = {true}
                        // value = {start}
                        // selected = {start}
                        // onChange={date=>setStart(date)}
                        timeInputLabel = "Time:"
                        dateFormat = "MM/dd/yyyy h:mm aa"
                        showTimeInput            
                        className="form-control"
                        />
                        
                    </div>
                    <br></br>
                    <div class = "container-fluid col-10" align = "justify" >
                        <Typography variant = "h7">To </Typography>
                        <DatePicker 
                        closeOnScroll = {true}
                        // value = {end}
                        // selected = {end}
                        // onChange={date=>setEnd(date)}
                        timeInputLabel = "Time:"
                        dateFormat = "MM/dd/yyyy h:mm aa"
                        showTimeInput
                                   
                        className="form-control"
                        />
                       
                    </div>
                    <br></br>
                    <div class = "container-fluid col-12" align = "center">
                        <button 
                        style = {buttonStyle}
                        class="btn btn-primary"
                        variant = "contained"
                        color = "primary"
                        size = "small"
                        fullWidth                         
                        >Add Event</button>
                    </div>
                    
                    <br></br>
                </form>
            </Paper>
                
            </div>
            
        )
    }
}
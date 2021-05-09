import React, { Component, useState } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import Calendar from "./Calendar"
import Calendar2 from "./Calendar2"
import DatePicker from "react-datepicker"

import {Paper, Button, Typography} from "@material-ui/core"
import createEvent from './create-event.component'

const Friend = props => (
    <li class="list-group-item d-flex justify-content-between align-items-center">
        {props.user.username}
        <a  class="btn btn-primary"  href="#" onClick={() => { props.deleteFriends(props.user._id) }}>Remove friend</a>
    </li>
  )
const buttonStyle = {
    color: "black",
    borderColor: "black"
};

export default class EventList extends Component {
    
    constructor(props){
        super(props);

        this.deleteFriends = this.deleteFriends.bind(this);

        this.state = {friends: []};
    }
    
    componentDidMount() {
        axios.get('http://localhost:5000/users/')
        .then(response => {
          this.setState({ friends: response.data })
        })
        .catch((error) => {
          console.log(error);
        })
    }

    deleteFriends(id) {
        axios.delete('http://localhost:5000/users/'+id)
          .then(response => { console.log(response.data)});
    
        this.setState({
            friends: this.state.friends.filter(el => el._id !== id)
        })
      }

    friendsList() {
    return this.state.friends.map(currentfriend => {
       return <Friend user={currentfriend} deleteFriends={this.deleteFriends} key={currentfriend._id}/>;
    })
    }
    render(){
        return (
            <div>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-2 container-fluid">
                            <Paper variant = "outlined" >
                            <Typography variant = 'h6' align = "center">Friends List</Typography>
                                <div class="list-group">
                                    { this.friendsList() }
                                </div>   
                                
                            </Paper>
                        </div>

                        <div class="col-7 container-fluid">
                        <Calendar/>
                        </div>


                        <div class="col-2 container-fluid">
                            <Paper variant = "outlined">
                            <Typography variant = "h6" align = "center">Add an Event</Typography>
                           
                                <form>
                                    <div class = "col-12 container-fluid">
                                        <Typography variant = "h7" >Title:</Typography>
                                        <input  type="text"
                                        required
                                        className="form-control"
                                        value={this.state.title}
                                        onChange={this.onChangeTitle}
                                        />
                                    </div>
                                    <br></br>

                                    <div class = "col-12 container-fluid"  >
                                        <Typography variant="h7">Description:</Typography>
                                        <input  type="text"  
                                        
                                        className="form-control"
                                        value={this.state.title}
                                        onChange={this.onChangeTitle}
                                        />
                                    </div>
                                    <br></br>

                                    <div class = "col-12 container-fluid"> 
                                        <Typography variant = "h7">From:
                                        <DatePicker 
                                        closeOnScroll = {true}
                                        // value = {start}
                                        // onChange={date=>setStart(date)}
                                        timeInputLabel = "Time:"
                                        dateFormat = "MM/dd/yyyy h:mm aa"
                                        showTimeInput
                                        placeholderText = "Start date"
                                        />
                                        </Typography>
                                    </div>
                                    <br></br>
                                   

                                    <div class = "col-12 container-fluid">
                                        <Typography variant = "h7">To:
                                        <DatePicker 
                                        closeOnScroll = {true}
                                        // value = {end}
                                        // onChange={date=>setEnd(date)}
                                        timeInputLabel = "Time:"
                                        dateFormat = "MM/dd/yyyy h:mm aa"
                                        showTimeInput
                                        placeholderText = "End date"
                                        />
                                        </Typography>
                                    </div>
                                    <br></br>
                                    <div class = "col-12 container-fluid" align = "center">
                                        <span style = {buttonStyle}> </span>
                                        <Button variant = "contained"
                                        color = "secondary"
                                        size = "small"
                                        fullWidth = "true"
                                        
                                        >Submit Event</Button>
                                        
                                    </div>
                                    <br></br>
                                </form>
                            </Paper>
                        </div>                          
                        
                    </div>
                    </div>
                </div>
            
        )
    }
}
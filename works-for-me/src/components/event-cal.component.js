import React, { Component, useState } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import Calendar from "./Calendar"
import Calendar2 from "./Calendar2"
import DatePicker from "react-datepicker"

import {Paper, Button, Typography, Mui} from "@material-ui/core"
import createEvent from './create-event.component'


const Friend = props => (
    <li class="list-group-item d-flex justify-content-between align-items-center">
        {props.user.username}
        <div  class="btn-group btn-group-toggle" data-toggle="buttons">
            <button 
             name="options" id="option2" autocomplete="off"
            // style = {buttonStyle}
            class="btn btn-primary btn-sm"       
            >Edit Event</button>
            <button 
             name="options" id="option1" autocomplete="off"
            // style = {buttonStyle}
            class="btn btn-primary btn-sm"
            color = "secondary"              
            onClick={() => { props.deleteFriends(props.user._id) }}
            >Remove friend</button>
        </div>
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
                        <div class="col-2">
                            <Paper variant = "outlined" >
                            <Typography variant = 'h6' align = "center">Friends List</Typography>
                                <div class="list-group">
                                    { this.friendsList() }
                                </div>   
                                
                            </Paper>
                        </div>

                        <div class="col-10 ">
                        <Calendar/>
                        </div>
                        
                    </div>
                    </div>
                </div>
            
        )
    }
}
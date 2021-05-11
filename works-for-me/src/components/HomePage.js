import React, { Component } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import Calendar from "./Calendar"


import {Paper, Typography} from "@material-ui/core"


const Friend = props => (
    <li class="list-group-item d-flex justify-content-between align-items-center">
        {props.user.username}
        <div  class="btn-group btn-group-toggle" data-toggle="buttons">
            <button 
             name="options" id="option2" autocomplete="off"
            class="btn btn-primary btn-sm"       
            >Propose Event</button>
            <button 
             name="options" id="option1" autocomplete="off"
            class="btn btn-danger btn-sm"
            color = "secondary"              
            onClick={() => { props.deleteFriends(props.user._id) }}
            >Remove</button>
        </div>
    </li>
  )

  const Event = props => (
    <li class="list-group-item d-flex justify-content-between align-items-center">
        {props.name.title}
        <div  class="btn-group btn-group-toggle" data-toggle="buttons">
            <button 
             name="options" id="option2" autocomplete="off"
            class="btn btn-primary btn-sm"       
            >Edit Event</button>
            <button 
             name="options" id="option1" autocomplete="off"
            class="btn btn-danger btn-sm"
            color = "secondary"              
            onClick={() => { props.deleteEvents(props.name._id) }}
            >Remove</button>
        </div>
    </li>
  )

export default class EventList extends Component {
    
    constructor(props){
        super(props);
        
        this.deleteFriends = this.deleteFriends.bind(this);
        this.deleteEvents = this.deleteEvents.bind(this);
        
        this.state = {friends: [], events:[]};
    }
    
    componentDidMount() {
        // get users
        this.getUsers();
        // get events
        this.getEvents();
    }

    reloadPage = () => {
        window.location.reload()
    }

    getUsers = () =>{
        axios.get('http://localhost:5000/users/')
        .then(response => {
          this.setState({ friends: response.data })
        })
        .catch((error) => {
          console.log(error);
        })
    }

    getEvents = () =>{
        axios.get('http://localhost:5000/event/')
        .then(response => {
          this.setState({ events: response.data })
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

    deleteEvents(id) {
        axios.delete('http://localhost:5000/event/'+id)
          .then(response => { console.log(response.data)});
    
        this.setState({
            events: this.state.events.filter(el => el._id !== id)
        })

        // setTimeout(function () {
            window.location.reload()
        // }.bind(this), 10)
    }

    friendsList() {
    return this.state.friends.map(currentfriend => {
       return <Friend user={currentfriend} deleteFriends={this.deleteFriends} key={currentfriend._id}/>;
    })
    }

    eventsList() {
        return this.state.events.map(currentEvent => {
           return <Event name={currentEvent} deleteEvents={this.deleteEvents} key={currentEvent._id}/>;
        })
        }

    render(){
        return (
            <div>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-2">
                            <div>
                            <Paper variant = "outlined" >
                            <Typography variant = 'h6' align = "center">Friends List</Typography>
                                <div class="list-group">
                                    { this.friendsList() }
                                </div>   
                                
                            </Paper>
                            </div>
                            <br></br>
                            <div>
                                <Paper variant = "outlined" >
                                    <Typography variant = 'h6' align = "center">Events Added</Typography>
                                    <div class="list-group">
                                        { this.eventsList() }
                                    </div>   
                                    
                                </Paper>
                            </div>
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
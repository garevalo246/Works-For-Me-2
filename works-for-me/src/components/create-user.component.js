import React, { Component } from 'react';
import axios from 'axios';
import {Paper, Typography} from '@material-ui/core'

export default class CreateUser extends Component {
    constructor(props){
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: ''
        }    
    }
    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const user = {
            username: this.state.username
        }

        console.log(user)
        
        axios.post('http://localhost:5000/users/add', user)
        .then(res => console.log(res.data));

        this.setState({
        username: ''
        })

    }
    render(){
        return (
            <div class = "container-fluid col-2">
                <Paper>
                <h3 class = "text-dark" align = "center">Add Friend</h3>

                <form onSubmit={this.onSubmit}>
                <div className="form-group" class = "container-fluid col-10"> 
                    <Typography variant = "h6">Enter Username:</Typography>
                    
                    <input  type="text"
                        required
                        className="form-control"
                        value={this.state.username}
                        onChange={this.onChangeUsername}
                        />
                         <Typography variant = "h6">Enter Friend Code:</Typography>
                    
                    <input  type="text"
                        
                        className="form-control"
                       
                        />
                </div>
                <br></br>
                <div className="container-fluid col-12 form-group" align = "center">
                    
                    <input type="submit" value="add friend" className="btn btn-primary" />
                </div>
                <br></br>
                </form>
                </Paper>
            </div>
        )
    }
}
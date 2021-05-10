import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import {Paper} from '@material-ui/core'

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
            
                <div class= "col-2">
                    <h3 class="text-light">Create New Event</h3>
                    <Paper variant = "outlined">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group"> 
                            <label class="text-dark">Title: </label>
                            <input  type="text"
                                required
                                className="form-control"
                                value={this.state.title}
                                onChange={this.onChangeTitle}
                            />
                        </div>
                        {/* <div className="form-group"> 
                            <label>Description: </label>
                            <input  type="text"
                                required
                                className="form-control"
                                value={this.state.description}
                                onChange={this.onChangeDescription}
                                />
                        </div> */}
                        <div className="form-group container-fluid" >
                            <div>
                            <label class="text-dark">From: </label>
                                <DatePicker 
                                closeOnScroll = {true}
                                selected = {this.state.start}
                                onChange = {this.onChangeStart}
                                // value = {this.state.start}
                                timeInputLabel = "Time:"
                                // dateFormat = "MM/dd/yyyy"
                                dateFormat = "MM/dd/yyyy h:mm aa"
                                showTimeInput
                                placeholderText = "Start date"
                                />
                            </div>
                        </div>
                        <div className="form-group container-fluid" >
                            <div>
                                <label class="text-dark" >To: </label>
                                    <DatePicker 
                                    closeOnScroll = {true}
                                    selected = {this.state.end}
                                    onChange = {this.onChangeEnd}
                                    // value = {this.state.end}
                                    timeInputLabel = "Time:"
                                    dateFormat = "MM/dd/yyyy h:mm aa"
                                    showTimeInput
                                    placeholderText = "End date"
                                    />
                            </div>
                        </div>
                        

                        <div className="form-group" align = "center">
                            <br></br>
                            <input type="submit" value="Create Exercise Log" className="btn btn-primary" />
                        </div>
                    </form>
                    </Paper>            
                </div>
            
        )
    }
}
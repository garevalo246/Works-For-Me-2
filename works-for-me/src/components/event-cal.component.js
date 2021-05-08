import React, { Component } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import Calendar from "./Calendar"
import createEvent from './create-event.component'

const Friend = props => (
    <tr>
      <td>{props.user.username}</td>
      <td>
        {/* <Link to={"/edit/"+props.user._id}>edit</Link> |  */}
        <a href="#" onClick={() => { props.deleteFriends(props.user._id) }}>delete</a>
      </td>
    </tr>
  )

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
                <p>Your Calendar</p>
                {/* calendar part */}
                <div class="container-fluid">
                    <div class="row">
                    <div class="col">
                        {/* <form>
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Email address</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlSelect1">Example select</label>
                                <select class="form-control" id="exampleFormControlSelect1">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlSelect2">Example multiple select</label>
                                <select multiple class="form-control" id="exampleFormControlSelect2">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlTextarea1">Example textarea</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                        </form> */}
                    </div>
                    <div class="col-7">
                        <Calendar className=""/>
                    </div>
                    <div class="col">
                        <div>
                            <h3>Logged friends</h3>
                            <table className="table">
                            <thead className="thead-light">
                                <tr>
                                <th>Username</th>
                                </tr>
                            </thead>
                            <tbody>
                                { this.friendsList() }
                            </tbody>
                            </table>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}
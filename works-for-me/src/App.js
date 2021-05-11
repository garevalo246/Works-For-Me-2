import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route,} from "react-router-dom";

import Navbar from "./components/navbar"
import EventList from "./components/HomePage";
import CreateEvent from "./components/FindTime";
import CreateUser from "./components/AddFriend";
import Modal from "react-modal"


Modal.setAppElement('#root')
function App() {
  return (    
    <Router>
      {/* navbar */}
      <div className="container-fluid">
      <Navbar />
      <br/>
      <Route path="/" exact component={EventList} />
      {/* <Route path="/edit/:id" component={EditEvent} /> */}
      <Route path="/create" component={CreateEvent} />
      <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;

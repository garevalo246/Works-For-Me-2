import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route,} from "react-router-dom";

import Navbar from "./components/navbar.component"
import EventList from "./components/event-cal.component";
import EditEvent from "./components/edit-event.component";
import CreateEvent from "./components/create-event.component";
import CreateUser from "./components/create-user.component";
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

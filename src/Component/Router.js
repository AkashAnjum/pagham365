import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from './Navbar';
import Home from './Home';
import AddTopic from './AddTopic';
import AddSubTopic from './AddSubTopic';
import ViewTopic from './ViewTopic';
import AddDetail from './AddDetail'
import ViewSubTopic from './ViewSubTopic'
import ViewDetail from './ViewDetail';
import Login from './Login';
function RouteConfig(props) {
  return (
    <div>   
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/addtopic" component={AddTopic} />
          <Route exact path="/addsubtopic" component={AddSubTopic} />
          <Route exact path="/viewsubtopic/:id" component={ViewSubTopic} />
          <Route exact path="/viewdetail/:id/:name" component={ViewDetail} />
          <Route exact path="/adddetail" component={AddDetail} />
          <Route exact path="/viewtopic" component={ViewTopic} />
          {/* <Route exact path="/view" component={ViewTopic} /> */}
          {/* <Route path="/confirm/:token" component={Move}/> */}
        </Switch>
      </Router>
    </div>
  );
}
export default RouteConfig;
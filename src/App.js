import React, {Component} from "react";
import {Router} from "react-router-dom";
import {Routers} from "./routers/Routers";
import history from './routers/history';


class App extends Component {
  render() {
      return (
          <Router history={history}>
              <Routers onNavigate={history.push}/>
          </Router>
      );
  }
}

export default App

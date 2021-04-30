import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import PeopleList from './PeopleList';
import Chat from './personalchat';


function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={PeopleList} />
          <Route path="/chat/:id" exact render={props => (<Chat {...props}/>)}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
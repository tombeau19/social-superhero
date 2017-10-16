import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import HomePage from './components/HomePage'
import ScoreBoard from './components/Users/ScoreBoard'
import UserPage from './components/Users/UserPage'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/users' component={ScoreBoard} />
            <Route exact path='/users/:userId' component={UserPage} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;

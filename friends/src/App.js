import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import AddFriend from './components/AddFriend';
import PrivateRoute from './components/PrivateRoute';
import { Homepage } from './components/Homepage';
import './App.css';

import styled from 'styled-components';

const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
`

class App extends React.Component {

  constructor() {
    super()
    this.state = { credentials: {} }
  }

  render() {
    return (
      <Router>
        <div className='App'>
          <div className='header'>
            <Link to='/'><Button>Home</Button></Link>
            <Link to='/login'><Button>Login</Button></Link>
            <Link to='/friends-list'><Button>Friends</Button></Link>
            <Link to='/add-friend'><Button>Add Friend</Button></Link>
          </div>
          <Homepage />
          <Switch>
            <Route path='/login' component={Login} />
            <PrivateRoute exact path='/friends-list' component={FriendsList} />
            <PrivateRoute exact path='/add-friend' component={AddFriend} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

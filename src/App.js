import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import axios from 'axios';

import AddFlat from './components/AddFlat';
import Home from './components/Home';
import LogIn from './components/LogIn';
import Navbar from './components/Navbar';
import NavbarItem from './components/NavbarItem';
import NoMatch from './components/NoMatch';
import SignUp from './components/SignUp';

import { navItems } from './data/listing';

import './css/style.css';


class App extends React.Component {
  state = {
    data: []
  };

  componentDidMount() {
    axios.get('http://localhost:3001/api/flats')
      .then(res => {
        this.setState({ data: res.data });
      })
      .catch(err => {
        console.error(err)
      });
  }

  handleCommentSubmit = (flat) => {
    const flats = this.state.data;
    axios.post('http://localhost:3001/api/flats', flat)
      .catch(err => {
        console.error(err)
        this.setState({ data: flats })
      });
  }

  render() {
    const {data} = this.state;
    return (
      <Router>
        <div>
          <Navbar>
            <NavbarItem item={ {label:'home', to:'/'} } />
            {navItems.map(item => (
              <NavbarItem key={item.label} item={item} />
            ))}
          </Navbar>
          
          <Switch>
            <Route exact path="/" render={() => <Home data={ data } />} />
            <Route path="/add-a-flat" render={() => <AddFlat handleCommentSubmit={this.handleCommentSubmit} />}/>
            <Route path="/sign-up" component={SignUp}/>
            <Route path="/log-in" component={LogIn}/>
            <Route component={NoMatch}/>
          </Switch>

        </div>
      </Router>
    )
  }
}

export default App;

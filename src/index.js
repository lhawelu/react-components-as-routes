import React from 'react'
import ReactDOM from 'react-dom'
import Home from './Home'
import About from './About'
import NavBar from './NavBar'
import Login from './Login'
import { BrowserRouter as Router, NavLink, Route} from 'react-router-dom'

ReactDOM.render((
  <Router>
    <div>
      <NavBar />
      <Route exact path="/" component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/login' component={Login} />
    </div>
  </Router>),
  document.getElementById('root')
);

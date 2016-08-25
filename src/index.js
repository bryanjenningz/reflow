import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, hashHistory, Link } from 'react-router'

function App() {
  return <div>hello</div>
}

function Nav(props) {
  const currentPath = props.route.path
  const activePath = path => currentPath === path ? 'active' : ''
  return (
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">Reflow</a>
        </div>
        <ul className="nav navbar-nav">
          <li className={activePath('/')}><Link activeClassName="active" to="/">Home</Link></li>
          <li className={activePath('/talks')}><Link activeClassName="active" to="/talks">Talks</Link></li>
          <li className={activePath('/learn')}><Link activeClassName="active" to="/learn">Learn</Link></li>
          <li className={activePath('/profile')}><Link activeClassName="active" to="/profile">Profile</Link></li>
        </ul>
      </div>
    </nav>
  )
}
Nav.propTypes = {
  params: PropTypes.object.isRequired
}

const routes = (
  <Router history={hashHistory}>
    <Route path={'/'} component={Nav} />
    <Route path={'/talks'} component={Nav} />
    <Route path={'/learn'} component={Nav} /> 
    <Route path={'/profile'} component={Nav} /> 
  </Router>
)

render(routes, document.querySelector('#root'))

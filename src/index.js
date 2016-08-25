import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, hashHistory, Link } from 'react-router'

function App() {
  return <div>hello</div>
}

function Nav(props) {
  const { children } = props
  const currentPath = props.route.path
  const activePath = path => currentPath === path ? 'active' : ''
  return (
    <div>
      <nav className="navbar navbar-inverse">
        <ul className="nav navbar-nav">
          <li className={activePath('/') + ' col-xs-3'}><Link activeClassName="active" to="/">Home</Link></li>
          <li className={activePath('/talks') + ' col-xs-3'}><Link activeClassName="active" to="/talks">Talks</Link></li>
          <li className={activePath('/learn') + ' col-xs-3'}><Link activeClassName="active" to="/learn">Learn</Link></li>
          <li className={activePath('/profile') + ' col-xs-3'}><Link activeClassName="active" to="/profile">Profile</Link></li>
        </ul>
      </nav>
      <div>{children}</div>
    </div>
  )
}

function Search() {
  return (
    <div>Search</div>
  )
}

function Talks() {
  return (
    <div>Talks</div>
  )
}

function Learn() {
  return (
    <div>Learn</div>
  )
}

function Profile() {
  return (
    <div>Profile</div>
  )
}

const routes = (
  <Router history={hashHistory}>
    <Route path={'/'} component={Nav}>
      <IndexRoute component={Search} />
    </Route>
    <Route path={'/talks'} component={Nav}>
      <IndexRoute component={Talks} />
    </Route>
    <Route path={'/learn'} component={Nav}>
      <IndexRoute component={Learn} />
    </Route>
    <Route path={'/profile'} component={Nav}>
      <IndexRoute component={Profile} />
    </Route>
  </Router>
)

render(routes, document.querySelector('#root'))

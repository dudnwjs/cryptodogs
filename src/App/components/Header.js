import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'

export default class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      login: false
    }
  }
  render() {
    const loginLink = (
      <li><Link to="/info/create"><span className="blue-text">Login</span></Link></li>
    )
    const logoutLink = (
      <li><Link to="/info/create"><span className="blue-text">Logout</span></Link></li>
    )
    const myInfoLink = (
      <li><Link to="/info/create"><span className="blue-text">MyInfo</span></Link></li>
    )
    return (
      <nav>
        <div className="nav-wrapper white">
          <div className="brand-logo"> <Link to="/info/create"><img height="60" src={logo} alt="HeJA"/></Link></div>
          <ul className="right hide-on-med-and-down">
            { this.props.isLoggedIn ? myInfoLink : null }
            { this.props.isLoggedIn ? logoutLink : loginLink }
            <li><Link to="/info/create"><span className="blue-text">Market</span></Link></li>
            <li><Link to="/info/create"><span className="blue-text">About</span></Link></li>
          </ul>
        </div>
      </nav>
    )
  }
}

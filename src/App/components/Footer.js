import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="page-footer white z-depth-5">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <Link to="/info/create"><img width="100" src={logo} alt="HeJA"/></Link>
              <div className="blue-text text-lighten-2">나만의 무엇가를 만들어 가는 것을 흥미로운 일입니다. 독창적인 캐리터를 만들어보세요.</div>
            </div>
            <div className="col l4 offset-l2 s12">
              <h5 className="blue-text">Links</h5>
              <ul>
                <li><Link className="blue-text text-lighten-2" to="/info/create">About</Link></li>
                <li><Link className="blue-text text-lighten-2" to="/info/create">FAQ</Link></li>
                <li><Link className="blue-text text-lighten-2" to="/info/create">Facebook</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright blue z-depth-1">
          <div className="container">
            © 2018 Copyright Text
            <Link to="/info/create" className="blue-text text-lighten-4 right">HeJA Company</Link>
          </div>
        </div>
      </footer>
    )
  }
}

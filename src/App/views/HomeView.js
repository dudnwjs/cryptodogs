import React from 'react'
import { Link } from 'react-router-dom'

import Header from '../components/Header'
import Footer from '../components/Footer'

class HomeView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: false
    }
  }

  render() {
    setInterval(() => this.setState({
      isLoggedIn: true
    }), 3000)
    return (
      <div>
        <Header isLoggedIn={this.state.isLoggedIn}/>
        <ul>
          <li> BODY </li>
        </ul>
        <Footer/>
      </div>
    )
  }
}

export default HomeView

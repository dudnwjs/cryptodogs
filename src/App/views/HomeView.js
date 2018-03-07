import React from 'react'
import { Link } from 'react-router-dom'

import Layout from '../components/Layout'

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
      <Layout isLoggedIn={this.state.isLoggedIn}>
        <ul>
          <li> BODY </li>
        </ul>
      </Layout>
    )
  }
}

export default HomeView

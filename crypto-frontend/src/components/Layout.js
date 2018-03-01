import React from 'react'
import Header from './Header'
import Footer from './Footer'

class Layout extends React.Component {
  render() {
    return (
      <div>
        <Header isLoggedIn={this.props.isLoggedIn}/>
        {this.props.children}
        <Footer/>
      </div>
    )
  }
}

export default Layout

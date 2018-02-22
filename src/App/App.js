import React from 'react'

class App extends React.Component {
  state = {
    response: []
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.data.findbook }))
      .catch(err => console.log(err))
  }

  callApi = async () => {
    const ql = `/graphql?query={
      findbook(name:"hwkim") {
        title
        author
      }
    }`
    const response = await fetch(ql)
    const body = await response.json()
    console.log(body)

    if (response.status !== 200) throw Error(body.message)
    return body
  };
  render() {
    const listBooks = this.state.response.map((book, i) => <li key={i}>TITLE: {book.title} -> AUTHOR: {book.author}</li>)
    return (
      <div>
        HI. CrytoDogs
        <ul>{listBooks}</ul>
      </div>
    )
  }
}

export default App

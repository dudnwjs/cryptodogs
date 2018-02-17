import React, { Component } from 'react';

class App extends Component {
  state = {
    response: []
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.data.findbook }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const ql = `{
      findbook(name:"hwkim") {
        title
        author
      }
    }`
    const booksql = `{
      books{
        title
        author
      }
    }`
    const response = await fetch('/graphql?query='+ql);
    const body = await response.json();
    console.log(body);

    if (response.status !== 200) throw Error(body.message);
    return body;
  };
  render() {
    const listBooks = this.state.response.map((book,i) => <li key={i}>TITLE: {book.title} -> AUTHOR: {book.author}</li>)
    return (
      <div>
        HI. CrytoDogs
        <ul>{listBooks}</ul>
      </div>
    );
  }
}

export default App;

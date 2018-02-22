import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { Redirect } from 'react-router-dom'

const query = gql`
mutation AddBook($title: String!, $author: String!) {
  addBook(title:$title,author:$author) {
    id
  }
}
`
class CreateView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      redirect: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.mutate({ variables: { title: 'title_create', author: 'author_create' } })
      .then(() => this.setState({ redirect: true }))
  }

  render() {
    const { redirect } = this.state
    if (redirect) {
      return <Redirect to='/'/>
    }
    return (
      <div>
        <h1>CreateView</h1>
        <form onSubmit={this.handleSubmit}>
          <button type="submit">Create</button>
        </form>
      </div>
    )
  }
}

export default graphql(query)(CreateView)

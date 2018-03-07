import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { Redirect } from 'react-router-dom'
import { Button, Input } from 'react-materialize'

import Layout from '../components/Layout'

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
      redirect: false,
      title: 'state_title',
      author: 'state_author'
    }
    this.handleTitle = this.handleTitle.bind(this)
    this.handleAuthor = this.handleAuthor.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleAuthor(event) {
    console.log(event.target.value)
    this.setState({ author: event.target.value })
  }

  handleTitle(event) {
    console.log(event.target.value)
    this.setState({ title: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.mutate({ variables: { title: this.state.title, author: this.state.author } })
      .then(() => this.setState({ redirect: true }))
  }

  render() {
    const { redirect } = this.state
    if (redirect) {
      return <Redirect to='/'/>
    }
    return (
      <Layout>
        <h1>CreateView</h1>
        <form onSubmit={this.handleSubmit}>
          <Input s={6} label="Book Title" onChange={this.handleTitle}/>
          <Input s={6} label="Book Author" onChange={this.handleAuthor}/>
          <Button type="submit" waves='light'>
              Create
          </Button>
        </form>
      </Layout>
    )
  }
}

export default graphql(query)(CreateView)

import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import Layout from '../components/Layout'

const query = gql`
query FindBook($id: String!){
  findbook(id: $id){
    id
    title
    author
  }
}
`

class DetailView extends React.Component {
  render() {
    const { data } = this.props
    if (data.loading) { return <div>Loading...</div> }
    if (!data.findbook) { return <div>Loading...</div> }
    console.log(this.props)
    return (
      <Layout>
        <ul>
          <li>ID : {data.findbook.id}</li>
          <li>TITLE : {data.findbook.title}</li>
          <li>AUTHOR : {data.findbook.author}</li>
        </ul>
      </Layout>
    )
  }
}

const queryOptions = {
  options: props => ({
    variables: {
      id: props.match.params.id
    }
  })
}

export default graphql(query, queryOptions)(DetailView)

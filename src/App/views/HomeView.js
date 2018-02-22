import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { Link } from 'react-router-dom'

const query = gql`{
  books {
    id
    title
    author
  }
}`

class HomeView extends React.Component {
  render() {
    const { data } = this.props
    if (data.loading) { return <div>Loading...</div> }
    if (!data.books) { return <div>Loading...</div> }
    return (
      <div>
        <ul>
          {data.books.map((item, index) => (
            <li key={item.id}>
              <Link to={`/info/${item.id}`}>
                {item.title}-{item.author}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default graphql(query)(HomeView)

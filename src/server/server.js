import express from 'express'
import bodyParser from 'body-parser'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import { makeExecutableSchema } from 'graphql-tools'
import mongoose from 'mongoose'
import cors from 'cors'

mongoose.connect('mongodb://test:test@ds123658.mlab.com:23658/dudnwjsdb')
  .then(() => {
    console.log('몽구스 연결 성공')
  }).catch(() => {
    console.log('몽구스 연결 실패')
  })

const port = process.env.PORT || 5000

// const db_books = [
//   {title:"ThisIsABook", author:"hjkim"},
//   {title:"ThisIsBBook", author:"hwkim"},
//   {title:"ThisIsCBook", author:"hnkim"},
//   {title:"ThisIsDBook", author:"hjkim"},
// ]
// db_books.forEach(item=>{
//   console.log(item);
// })
const Book = mongoose.model('book', { id: String, title: String, author: String })
const typeDefs = `
  type Query{
    books: [Book]
    findbook(id:String!): Book
  }
  type Book {
    id: ID
    title: String
    author: String
  }
  type Mutation{
    addBook(title:String,author:String): Book
  }
`

// (parent, arguments, context)
const resolvers = {
  Query: {
    books: async (obj, args, ctx) => ctx.book.find(),
    findbook: async (obj, args, ctx) => ctx.book.findOne({ id: args.id })
  },
  Mutation: {
    addBook: async (obj, args, ctx) => {
      const one = await new ctx.book(args)
      one.id = one._id
      console.log(one)
      return one.save()
    }
  }
}

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

const app = express()

app.use('/graphql', cors(), bodyParser.json(), graphqlExpress({ schema, context: { book: Book } }))

app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))

app.get('/api/hello', (req, res) => {
  res.send({ express: 'test from Express' })
})

app.listen(port, () => {
  console.log('서버가 시작되었습니다.!')
})

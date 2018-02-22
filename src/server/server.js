import express from 'express'
import bodyParser from 'body-parser'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import { makeExecutableSchema } from 'graphql-tools'
import mongoose from 'mongoose'

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
const Book = mongoose.model('book', { title: String, author: String })
const typeDefs = `
  type Query{
    books: [Book]
    findbook(name:String): [Book]
  }
  type Book {
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
    findbook: async (obj, args, ctx) => ctx.book.find({ author: args.name })
  },
  Mutation: {
    addBook: async (obj, args, ctx) => {
      console.log(args)
      return new ctx.book(args).save()
    }
  }
}

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

const app = express()

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema, context: { book: Book } }))

app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))

app.get('/api/hello', (req, res) => {
  res.send({ express: 'dsffsdf from Express' })
})

app.listen(port, () => {
  console.log('서버가 시작되었습니다.!')
})

const resolvers = {
  Query: {
    books: async (obj, args, ctx) => ctx.Book.find(),
    findbook: async (obj, args, ctx) => ctx.Book.findOne({ id: args.id }),
    users: async (obj, args, ctx) => {
      const person = await new ctx.User({ email: 'test@test', username: 'test', password: 'pw', name: 'user' })
      await person.save()
      return ctx.User.find()
    }
  },
  Mutation: {
    addBook: async (obj, args, ctx) => {
      const one = await new ctx.Book(args)
      one.id = one._id
      console.log(one)
      return one.save()
    }
  }
}

export default resolvers

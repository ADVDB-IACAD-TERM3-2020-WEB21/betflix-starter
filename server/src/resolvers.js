const mongoose = require("mongoose")

const MONGO_CONNECTION_STRING = 'mongodb://localhost:27017/test'

const { generateMovieModel } = require('./models/Movie')
mongoose.connect(MONGO_CONNECTION_STRING, {useNewUrlParser: true, useUnifiedTopology: true});
const Movie = generateMovieModel(mongoose)

const getMovieList = async () => {
  // TODO: Get movies here
}

const resolvers = {
    Query: {
      hello: () => 'world!',
      movies: async () =>  {
        const movieList = await getMovieList()
        console.log(movieList)

        return movieList
      }
    },
  };
  
export default resolvers;
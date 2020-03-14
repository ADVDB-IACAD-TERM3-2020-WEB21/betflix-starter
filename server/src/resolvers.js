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
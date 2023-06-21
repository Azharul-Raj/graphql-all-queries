const { ApolloServer } = require("apollo-server");
const {typeDefs}=require('./typeDefs/typeDefs');
const {resolvers}=require('./resolvers/index')



const app = new ApolloServer({ typeDefs, resolvers });

app.listen().then(({ url }) => {
  console.log(url);
});

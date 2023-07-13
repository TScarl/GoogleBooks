// Import necessary modules and dependencies
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./schemas');
const { authMiddleware } = require('./utils/auth');

// Create an instance of the Express app
const app = express();
const PORT = process.env.PORT || 3001;

// Create a new Apollo server with the GraphQL schema
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
  introspection: true,
});

// Apply the Apollo Server middleware to the Express app
server.applyMiddleware({ app });

// Set up other middleware and routes
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Define your other routes here...

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`GraphQL endpoint: http://localhost:${PORT}${server.graphqlPath}`);
});
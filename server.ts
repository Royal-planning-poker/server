import { ApolloServer } from 'apollo-server';
import 'dotenv/config';
import { connect } from 'mongoose';
import { app } from './app';

const { ATLAS_URL } = process.env;

connect(ATLAS_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const schema = app.createSchemaForApollo();

const server = new ApolloServer({
  schema,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});

import { ApolloClient, InMemoryCache } from '@apollo/client';

const { SNOWPACK_PUBLIC_API_URL } = import.meta.env;
console.log('SNOWPACK_PUBLIC_API_URL', SNOWPACK_PUBLIC_API_URL);

const client = new ApolloClient({
  uri: SNOWPACK_PUBLIC_API_URL,
  cache: new InMemoryCache(),
});

export default client;

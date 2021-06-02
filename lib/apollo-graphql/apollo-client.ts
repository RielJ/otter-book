import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: new HttpLink({
      uri: process.env.S3_GATEWAY_URI,
    }),
    cache: new InMemoryCache(),
  });
}

export default createApolloClient;

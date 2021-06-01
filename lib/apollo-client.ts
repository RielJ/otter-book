import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
// import { createUploadLink } from "apollo-upload-client";

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    // link: createUploadLink({ uri: "http://127.0.0.1:3000/graphql",  }),
    link: new HttpLink({
      uri: "http://127.0.0.1:3000/graphql",
    }),
    cache: new InMemoryCache(),
  });
}

export default createApolloClient;

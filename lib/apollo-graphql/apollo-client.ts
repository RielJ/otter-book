import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { onError } from "@apollo/client/link/error";

function createApolloClient() {
  const logoutLink = onError(({ networkError }) => {
    if (networkError) console.log(networkError);
  });

  const httpLink = new HttpLink({
    // uri: "https://2uplsmrmkj.execute-api.ap-southeast-1.amazonaws.com/prod/graphql",
    uri: "http://localhost:3000/graphql",
  });

  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: logoutLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
}

export default createApolloClient;

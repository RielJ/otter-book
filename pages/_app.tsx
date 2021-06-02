import "../styles/globals.css";
import type { AppProps } from "next/app";
import { initializeApollo } from "../lib/apollo-graphql/apollo";
import { ApolloProvider } from "@apollo/client";
import dynamic from "next/dynamic";
import "nprogress/nprogress.css";

function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = initializeApollo(pageProps.initialApolloState);

  const TopProgressBar = dynamic(
    () => {
      return import("../components/top-progress-bar");
    },
    { ssr: false }
  );

  return (
    <ApolloProvider client={apolloClient}>
      <TopProgressBar />
      <Component {...pageProps} />;
    </ApolloProvider>
  );
}
export default MyApp;

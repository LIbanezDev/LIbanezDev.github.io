import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../lib/apolloClient';
import { AppProps } from 'next/app';
import React from 'react';
import { Head } from 'next/document';

export default function App({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState);
  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

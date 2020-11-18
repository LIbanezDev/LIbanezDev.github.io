import '../styles/global.css'
import {ApolloProvider} from '@apollo/client'
import {useApollo} from '../lib/apolloClient'
import {AppProps} from "next/app";
import React from "react";

export default function App({Component, pageProps}: AppProps) {
    const apolloClient = useApollo(pageProps.initialApolloState)

    return (
        <ApolloProvider client={apolloClient}>
            <Component {...pageProps} />
        </ApolloProvider>
    )
}

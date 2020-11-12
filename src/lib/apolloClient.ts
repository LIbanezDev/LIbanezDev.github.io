import {useMemo} from 'react'
import {ApolloClient, HttpLink, InMemoryCache, NormalizedCacheObject} from '@apollo/client'
import merge from 'deepmerge'

let apolloClient

function createApolloClient() {
    return new ApolloClient({
        ssrMode: typeof window === 'undefined',
        link: new HttpLink({
            uri: 'http://localhost:4000/graphql', // Server URL (must be absolute)
            credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
            headers: {
                Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwibmFtZSI6Ikx1Y2FzIFZlcmdhcmEgSWJhw7FleiIsInJvbGVzIjpbIlVTRVIiXSwiaWF0IjoxNjA0NzgyMDEwLCJleHAiOjE2MDUzODY4MTB9.8xHZETkM8mCQl2FX_YfrQIQ7Yu8J6y7oDUEvEGtKzyw"
            }
        }),
        cache: new InMemoryCache(),
    })
}

export function initializeApollo(initialState = null): ApolloClient<NormalizedCacheObject> {
    const _apolloClient = apolloClient ?? createApolloClient()

    // If your page has Next.js data fetching methods that use Apollo Client, the initial state
    // gets hydrated here
    if (initialState) {
        // Get existing cache, loaded during client side data fetching
        const existingCache = _apolloClient.extract()

        // Merge the existing cache into data passed from getStaticProps/getServerSideProps
        const data = merge(initialState, existingCache)

        // Restore the cache with the merged data
        _apolloClient.cache.restore(data)
    }
    // For SSG and SSR always create a new Apollo Client
    if (typeof window === 'undefined') return _apolloClient
    // Create the Apollo Client once in the client
    if (!apolloClient) apolloClient = _apolloClient

    return _apolloClient
}

export function useApollo(initialState) {
    return useMemo(() => initializeApollo(initialState), [initialState])
}

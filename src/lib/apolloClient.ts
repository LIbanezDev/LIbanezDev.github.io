import { useMemo } from 'react';
import { ApolloClient, HttpLink, InMemoryCache, NormalizedCacheObject } from '@apollo/client';

let apolloClient;

export const mergePaginatedData = (existing, incoming) => {
  // Slicing is necessary because the existing data is
  // immutable, and frozen in development.
  const repo = 'repositories({"after":null,"first":10,"isFork":false,"privacy":"PUBLIC"})';
  const merged = existing ? existing.repositories.nodes.items.slice(0) : [];
  for (let i = 0; i < incoming[repo].nodes.length; ++i) {
    merged[existing ? existing.repositories.nodes.length + i : i] = incoming[repo].nodes[i];
  }
  return { ...incoming, items: merged };
};

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: new HttpLink({
      uri: 'https://api.github.com/graphql', // Server URL (must be absolute)
      headers: {
        Authorization: 'Bearer ' + process.env.PERSONAL_API_TOKEN,
      },
    }),
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            viewer: {
              keyArgs: [],
              merge: mergePaginatedData,
            },
          },
        },
      },
    }),
  });
}

export interface InitialApolloState {
  initialApolloState: NormalizedCacheObject;
}

export function initializeApollo(initialState = null): ApolloClient<NormalizedCacheObject> {
  const _apolloClient = apolloClient ?? createApolloClient();

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract();
    // Restore the cache using the data passed from getStaticProps/getServerSideProps
    // combined with the existing cached data
    _apolloClient.cache.restore({ ...existingCache, ...initialState });
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return _apolloClient;
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
}

export function useApollo(initialState) {
  return useMemo(() => initializeApollo(initialState), [initialState]);
}

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type IMutationResponse = {
  errors?: Maybe<Array<MutationError>>;
  msg?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

/** Data on versions of this GIF with a fixed height of 200 pixels. Good for mobile use. */
export type FixedImage = {
  __typename?: 'FixedImage';
  /** The height of this GIF in pixels. */
  height: Scalars['String'];
  /** size: string */
  size: Scalars['String'];
  /** The publicly-accessible direct URL for this GIF for this size of the GIF */
  url: Scalars['String'];
  /** The width of this GIF in pixels. */
  width: Scalars['String'];
};

/** GIF Objects are returned from most of GIPHY API's Endpoints. These objects contain a variety of information, such as the Image Object, which itself includes the URLS for multiple different GIFS formats and sizes. */
export type Giphy = {
  __typename?: 'Giphy';
  /** The unique bit.ly URL for this GIF */
  bitly_url: Scalars['String'];
  /** The date this GIF was added to the GIPHY database. */
  create_datetime: Scalars['String'];
  /** A URL used for embedding this GIF */
  embed_url: Scalars['String'];
  /** This GIF's unique ID */
  id: Scalars['String'];
  /** An object containing data for various available formats and sizes of this GIF. */
  images: Image;
  /** The MPAA-style rating for this content. Examples include Y, G, PG, PG-13 and R */
  rating: Scalars['String'];
  /** The page on which this GIF was found */
  source: Scalars['String'];
  /** The title that appears on giphy.com for this GIF.d */
  title: Scalars['String'];
  /** By default, this is almost always GIF. */
  type: Scalars['String'];
  /** The unique URL for this GIF */
  url: Scalars['String'];
  /** The username this GIF is attached to, if applicable */
  username: Scalars['String'];
};

/** The Images Object found in the GIF Object contains a series of Rendition Objects. These Rendition Objects includes the URLs and sizes for the many different renditions we offer for each GIF. */
export type Image = {
  __typename?: 'Image';
  /** Data on versions of this GIF with a fixed height of 200 pixels. Good for mobile use. */
  fixed_height: FixedImage;
  /** Data on versions of this GIF with a fixed width of 200 pixels. Good for mobile use. */
  fixed_width: FixedImage;
};

export type LoginResponse = IMutationResponse & {
  __typename?: 'LoginResponse';
  errors?: Maybe<Array<MutationError>>;
  msg?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  token?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

/** Mensajes enviados entre los usuarios. */
export type Message = {
  __typename?: 'Message';
  content: Scalars['String'];
  date: Scalars['DateTime'];
  id: Scalars['ID'];
  receiver: User;
  sender: User;
};

export type MessageResponse = IMutationResponse & {
  __typename?: 'MessageResponse';
  errors?: Maybe<Array<MutationError>>;
  message?: Maybe<Message>;
  msg?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type Mutation = {
  __typename?: 'Mutation';
  enviarMensaje: MessageResponse;
  login: LoginResponse;
  loginWithToken: LoginResponse;
  register: RegisterResponse;
};

export type MutationEnviarMensajeArgs = {
  message: Scalars['String'];
  to: Scalars['Float'];
};

export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type MutationLoginWithTokenArgs = {
  data: SocialRegisterInput;
};

export type MutationRegisterArgs = {
  data: UserRegisterInput;
};

export type MutationError = {
  __typename?: 'MutationError';
  msg?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  me?: Maybe<User>;
  myChat: Array<Message>;
  /** Search gifs */
  searchGifs?: Maybe<Array<Giphy>>;
  /** Trending giphpys */
  trendingGifs?: Maybe<Array<Giphy>>;
  users: Array<User>;
};

export type QueryMyChatArgs = {
  with: Scalars['Int'];
};

export type QuerySearchGifsArgs = {
  query: Scalars['String'];
};

export type QueryTrendingGifsArgs = {
  limit?: Maybe<Scalars['Float']>;
  offset?: Maybe<Scalars['Float']>;
};

export type RegisterResponse = IMutationResponse & {
  __typename?: 'RegisterResponse';
  errors?: Maybe<Array<MutationError>>;
  msg?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  user?: Maybe<User>;
};

export type Subscription = {
  __typename?: 'Subscription';
  esperarNuevosMensajes: Message;
};

export type Team = {
  __typename?: 'Team';
  name: Scalars['String'];
  users: Array<User>;
};

/** Registered users */
export type User = {
  __typename?: 'User';
  age: Scalars['Float'];
  description: Scalars['String'];
  email: Scalars['String'];
  github: Scalars['Boolean'];
  google: Scalars['Boolean'];
  id: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  receivedMessages: Array<Message>;
  sentMessages: Array<Message>;
  teams: Array<Team>;
};

/** External auth apps like GitHub or Google */
export enum External_Auth_Apps {
  GitHub = 'GitHub',
  Google = 'Google',
}

/** Datos necesarios para ingresar mediante una aplicacion externa como GitHub o Google */
export type SocialRegisterInput = {
  token: Scalars['String'];
  type: External_Auth_Apps;
};

/** Informacion necesaria para crear nuevos usuarios */
export type UserRegisterInput = {
  bornDate: Scalars['DateTime'];
  email: Scalars['String'];
  image?: Maybe<Scalars['Upload']>;
  imageURL?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  password?: Maybe<Scalars['String']>;
};

export type GetTrendingGifsQueryVariables = Exact<{ [key: string]: never }>;

export type GetTrendingGifsQuery = { __typename?: 'Query' } & {
  trendingGifs?: Maybe<
    Array<
      { __typename?: 'Giphy' } & Pick<Giphy, 'id' | 'bitly_url'> & {
          images: { __typename?: 'Image' } & {
            fixed_height: { __typename?: 'FixedImage' } & Pick<FixedImage, 'height' | 'width' | 'url'>;
          };
        }
    >
  >;
};

export type GetMyUsersQueryVariables = Exact<{ [key: string]: never }>;

export type GetMyUsersQuery = { __typename?: 'Query' } & {
  users: Array<{ __typename?: 'User' } & Pick<User, 'id' | 'name' | 'email' | 'description' | 'github' | 'google' | 'image'>>;
};

export const GetTrendingGifsDocument = gql`
  query getTrendingGifs {
    trendingGifs {
      id
      bitly_url
      images {
        fixed_height {
          height
          width
          url
        }
      }
    }
  }
`;

/**
 * __useGetTrendingGifsQuery__
 *
 * To run a query within a React component, call `useGetTrendingGifsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTrendingGifsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTrendingGifsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTrendingGifsQuery(
  baseOptions?: Apollo.QueryHookOptions<GetTrendingGifsQuery, GetTrendingGifsQueryVariables>
) {
  return Apollo.useQuery<GetTrendingGifsQuery, GetTrendingGifsQueryVariables>(GetTrendingGifsDocument, baseOptions);
}
export function useGetTrendingGifsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetTrendingGifsQuery, GetTrendingGifsQueryVariables>
) {
  return Apollo.useLazyQuery<GetTrendingGifsQuery, GetTrendingGifsQueryVariables>(GetTrendingGifsDocument, baseOptions);
}
export type GetTrendingGifsQueryHookResult = ReturnType<typeof useGetTrendingGifsQuery>;
export type GetTrendingGifsLazyQueryHookResult = ReturnType<typeof useGetTrendingGifsLazyQuery>;
export type GetTrendingGifsQueryResult = Apollo.QueryResult<GetTrendingGifsQuery, GetTrendingGifsQueryVariables>;
export const GetMyUsersDocument = gql`
  query getMyUsers {
    users {
      id
      name
      email
      description
      github
      google
      image
    }
  }
`;

/**
 * __useGetMyUsersQuery__
 *
 * To run a query within a React component, call `useGetMyUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMyUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMyUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMyUsersQuery(baseOptions?: Apollo.QueryHookOptions<GetMyUsersQuery, GetMyUsersQueryVariables>) {
  return Apollo.useQuery<GetMyUsersQuery, GetMyUsersQueryVariables>(GetMyUsersDocument, baseOptions);
}
export function useGetMyUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMyUsersQuery, GetMyUsersQueryVariables>) {
  return Apollo.useLazyQuery<GetMyUsersQuery, GetMyUsersQueryVariables>(GetMyUsersDocument, baseOptions);
}
export type GetMyUsersQueryHookResult = ReturnType<typeof useGetMyUsersQuery>;
export type GetMyUsersLazyQueryHookResult = ReturnType<typeof useGetMyUsersLazyQuery>;
export type GetMyUsersQueryResult = Apollo.QueryResult<GetMyUsersQuery, GetMyUsersQueryVariables>;

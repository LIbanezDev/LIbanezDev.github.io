import { gql } from '@apollo/client';

export interface GithubInfo {
  viewer: {
    login: string;
    avatarUrl: string;
    bio: string;
    bioHTML: string;
    repositories: {
      pageInfo: {
        endCursor: string;
        hasNextPage: boolean;
      };
      nodes: Array<{
        name: string;
        homepageUrl: string;
        openGraphImageUrl: string;
        descriptionHTML: string;
        createdAt: string;
        url: string;
      }>;
    };
  };
}

export const GetGithubInfo = gql`
  query {
    viewer {
      login
      avatarUrl
      repositories(first: 60, isFork: false, privacy: PUBLIC) {
        pageInfo {
          endCursor
          hasNextPage
        }
        nodes {
          name
          homepageUrl
          openGraphImageUrl
          descriptionHTML
          createdAt
          url
        }
      }
    }
  }
`;

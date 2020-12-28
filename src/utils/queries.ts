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
        openGraphImageUrl: string;
        descriptionHTML: string;
        createdAt: string;
        url: string;
      }>;
    };
  };
}

export const GetGithubInfo = gql`
  query($after: String) {
    viewer {
      login
      avatarUrl
      repositories(first: 40, isFork: false, privacy: PUBLIC, after: $after) {
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

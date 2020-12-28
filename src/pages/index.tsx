import React from 'react';
import { GetStaticProps } from 'next';
import { InitialApolloState, initializeApollo } from '../lib/apolloClient';
import Layout from '../components/Layout';
import a from 'next/link';
import Link from 'next/link';
import { useQuery } from '@apollo/client';
import { GetGithubInfo, GithubInfo } from '../utils/queries';
import InfiniteScroll from 'react-infinite-scroll-component';

const Index = () => {
  const { data, fetchMore } = useQuery<GithubInfo>(GetGithubInfo, {
    variables: {
      after: null,
    },
  });

  /*const fetchMoreRepositories = async () => {
    await fetchMore({
      variables: {
        after: data.viewer.repositories.pageInfo.endCursor,
      },
    });
  };*/

  return (
    <Layout>
      <h1>Lucas Ignacio</h1>
      <a href={'https://github.com/Fromiti'} target={'_blank'}>
        <button className='btn' style={{ marginRight: 5 }}>
          <i className='fa fa-github' />
        </button>
      </a>
      <a href={'https://www.linkedin.com/in/lucas-vergara-iba%C3%B1ez-b22673166/'} target={'_blank'}>
        <button className='btn' style={{ marginRight: 5 }}>
          <i className='fa fa-linkedin' />
        </button>
      </a>
      <a href={'https://twitter.com/LIbanez'} target={'_blank'}>
        <button className='btn' style={{ marginRight: 5 }}>
          <i className='fa fa-twitter' />
        </button>
      </a>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid asperiores pariatur placeat ullam voluptates. Cumque
        dolorum enim est exercitationem illo iure laborum minima molestias nisi, nobis numquam, pariatur, porro ut. Lorem ipsum
        dolor sit amet, consectetur adipisicing elit. Consectetur dolore, dolorem facere molestiae, natus nemo nesciunt odio
        perferendis quo recusandae reprehenderit tempora totam. Aliquid animi consectetur cupiditate expedita laudantium pariatur!
      </p>
      <ol>
        <Link href={'/'}>
          <li> Inicio </li>
        </Link>
        <Link href={'/projects'}>
          <li> Proyectos</li>
        </Link>
        <li> Conocimientos</li>
      </ol>
      <h2> Proyectos de Github... </h2>
      <div className={'animate__animated animate__fadeIn'}>
        <ul style={{ overflowY: 'scroll', height: '600px' }}>
          {/*<InfiniteScroll
            dataLength={data.viewer.repositories.nodes.length}
            next={fetchMoreRepositories}
            hasMore={data.viewer.repositories.pageInfo.hasNextPage}
            loader={'<p> Loading... </p>'}
          >
          </InfiniteScroll>*/}
          {data.viewer.repositories.nodes.map(repo => (
            <li key={repo.url}>
              <a href={repo.url} target={'_blank'}>
                {repo.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<InitialApolloState> = async () => {
  const apolloClient = initializeApollo();
  await apolloClient.query({
    query: GetGithubInfo,
    variables: {
      after: null,
    },
  });
  const cache = apolloClient.cache.extract();
  return {
    props: {
      initialApolloState: cache,
    },
    revalidate: 1,
  };
};

export default Index;

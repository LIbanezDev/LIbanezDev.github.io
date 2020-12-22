import React from 'react';
import { GetStaticProps } from 'next';
import { InitialApolloState, initializeApollo } from '../lib/apolloClient';
import { GetTrendingGifsDocument, useGetTrendingGifsQuery } from '../generated/graphql';
import Layout from '../components/Layout';
import Link from 'next/link';

const Index = () => {
  const { data } = useGetTrendingGifsQuery();
  return (
    <Layout>
      <h1>My Portfolio</h1>
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
        <li> What more?</li>
      </ol>
      <div className='animate__animated animate__fadeIn'>
        {data.trendingGifs.map(gif => {
          return <img src={gif.images.fixed_height.url} alt={gif.id} key={gif.id} />;
        })}
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<InitialApolloState> = async () => {
  const apolloClient = initializeApollo();
  await apolloClient.query({
    query: GetTrendingGifsDocument,
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

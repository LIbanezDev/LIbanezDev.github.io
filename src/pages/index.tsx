import React from 'react';
import { GetStaticProps } from 'next';
import { InitialApolloState, initializeApollo } from '../lib/apolloClient';
import Layout from '../components/Layout';
import { useQuery } from '@apollo/client';
import { GetGithubInfo, GithubInfo } from '../utils/queries';
import Header from '../components/Header';
import Presentation from '../components/Presentation';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const Index = () => {
  const { data } = useQuery<GithubInfo>(GetGithubInfo);
  return (
    <Layout description={'Yeah'}>
      <Header />
      <Presentation />
      <Skills />
      <Projects />
      <Contact />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<InitialApolloState> = async () => {
  const apolloClient = initializeApollo();
  await apolloClient.query({
    query: GetGithubInfo,
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

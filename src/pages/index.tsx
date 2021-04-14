import React from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Presentation from '../components/Presentation';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const Index = () => {
  return (
    <Layout description={'Yeah'}>
      <header>
        <Header />
      </header>
      <main>
        <Presentation />
        <Skills />
        <Projects />
      </main>
      <footer>
        <Contact />
      </footer>
    </Layout>
  );
};


export default Index;

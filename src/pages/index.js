import React from 'react';
import Layout from '../components/Layout';
import Landing from '../sections/Landing';
import About from '../sections/About';
import Projects from '../sections/Projects';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Writing from '../sections/Writing';
import Seo from '../sections/Seo';

const IndexPage = () => (
  <Layout>
    <Header />
    <Seo title="Home - Jide Abdul-Qudus" />
    <Landing />
    <About />
    <Projects />
    <Writing />
    <Footer />
  </Layout>
);

export default IndexPage;

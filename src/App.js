import React from 'react';
import Header from './components/Header/Header';
import CardList from './components/Main/CardList/CardList';
import Hero from './components/Main/Hero/Hero';
import './styles/styles.scss';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <CardList />
    </>
  );
}

export default App;

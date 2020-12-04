import React from 'react';
import Container from './styled';
import HeaderCard from './components/HeaderCard';
import PhotoCard from './components/PhotoCard';
import FooterCard from './components/FooterCard';

function App() {
  return (
    <Container>
      <HeaderCard />
      <PhotoCard />
      <FooterCard />
    </Container>
  )
}

export default App;


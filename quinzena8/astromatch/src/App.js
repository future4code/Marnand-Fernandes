import React, { useState } from 'react';
import Container from './styled';
import HeaderCard from './components/HeaderCard';
import PhotoCard from './components/PhotoCard';
import Matches from './components/Matches';

function App() {
  const [selectedPage, setSelectedPage] = useState('selectedProfiles');
  
  const renderPage = () => {
    switch (selectedPage) {
      case 'selectedProfiles':
        return <PhotoCard />

      case 'listMatches':
        return <Matches />
      
      default:
        return <PhotoCard />
    }
  }

  const goToProfiles = () => {
    setSelectedPage('selectedProfiles')
  }

  const goToList = () => {
    setSelectedPage('listMatches')
  }

  return (
    <Container>
      <HeaderCard 
        profiles={goToProfiles}
        list={goToList} 
      />
    {renderPage()}
    </Container>
  )
}

export default App;

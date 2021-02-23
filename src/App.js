import React from 'react';
import Heading from './Heading';
import Card from './Card';
import Footer from './Footer';

function App() {
  return (
    <div>
      <Heading />
      <Card 
      name="Harry Potter"
      img="https://upload.wikimedia.org/wikipedia/en/d/d7/Harry_Potter_character_poster.jpg"
      email="harry@potter.com"
      />
      <Footer />
    </div>
  );
}

export default App;

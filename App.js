// App.js
import React from 'react';
import Header from './header';
import HeroSection from './HeroSection';
import DestinationsSection from './DestinationsSection';
import ContactForm from './ContactForm';
import Footer from './Footer';
import './styles.css'; 

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <HeroSection />
        <DestinationsSection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default App;

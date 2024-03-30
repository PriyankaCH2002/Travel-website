// DestinationsSection.js
import React from 'react';

const DestinationsSection = () => {
  return (
    <section id="destinations" className="destinations">
      <h2>Popular Destinations</h2>
      <div className="destination">
        <img src="Destination1.jpg" alt="Destination 1" />
        <h3>Kodaikanal</h3>
        <p>Kodaikanal is one of the very popular holiday destination hill resorts in South India. This hill station stands 7200 feet above sea level and situated in upper palani hills of the westernghats near Madurai in Tamil Nadu. Kodaikanal is also popularly known as the princes of Hill Stations.</p>
      </div>
      <div className="destination">
        <img src="destination2.jpg" alt="Destination 2" />
        <h3>Taj Mahal</h3>
        <p>The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor, Shah Jahan (reigned from 1628 to 1658), to house the tomb of his favourite wife, Mumtaz Mahal.</p>
      </div>
      {/* Add more destinations as needed */}
    </section>
  );
};

export default DestinationsSection;

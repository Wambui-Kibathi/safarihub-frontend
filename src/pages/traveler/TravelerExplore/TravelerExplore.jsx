import React, { useState, useEffect } from 'react';
import Map from '../../../components/common/Map/Map';
import travelerApi from '../../../api/travelerApi';

const TravelerExplore = () => {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDestinations();
  }, []);

  const fetchDestinations = async () => {
    try {
      const data = await travelerApi.getDestinations();
      setDestinations(data);
    } catch (error) {
      console.error('Error fetching destinations:', error);
    } finally {
      setLoading(false);
    }
  };

  const markers = destinations
    .filter(dest => dest.latitude && dest.longitude)
    .map(dest => ({
      position: [dest.latitude, dest.longitude],
      popup: `<b>${dest.name}</b><br>${dest.description}<br>$${dest.price}`
    }));

  if (loading) return <div>Loading destinations...</div>;

  return (
    <div className="traveler-explore">
      <h1>Explore Destinations</h1>
      <Map 
        center={[-2.5, 36]} 
        zoom={6} 
        markers={markers} 
      />
    </div>
  );
};

export default TravelerExplore;

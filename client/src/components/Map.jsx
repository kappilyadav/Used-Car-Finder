import React, { useState, useEffect } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import withScriptjs from 'react-google-maps/lib/withScriptjs';





function MyMapComponent() {
  const [data, setData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:5000/api/data');
      const responseData = await response.json();
      setData(responseData);
    };
    fetchData();
  }, []);

  
  
  const MapWithAMarker = withScriptjs(withGoogleMap( (props) => (
    <GoogleMap
      defaultZoom={6}
      defaultCenter={{ lat: 25.3953, lng: 79.1379 }}
    >
  
  <Marker position={{ lat: 25.3953, lng: 25.3953 }} />

    {/* display marker on map */}
      {
        data.array.map((entry, index) => (
          <Marker key={index} position={{ lat: parseFloat(entry.Lat), lng: parseFloat(entry.Lng) }} />
        ))
      }
      
    </GoogleMap>
  )));




  return (
    data && <MapWithAMarker

      googleMapURL={"https://maps.googleapis.com/maps/api/js?key=" + data.key}
      loadingElement={<div style={{ height: '100%' }} />}
      containerElement={<div style={{ height: '600px' }} />}
      mapElement={<div style={{ height: '100%' }} />}
    />
  );
}

export default MyMapComponent;



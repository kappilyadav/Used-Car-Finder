import React, { useState, useEffect } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import withScriptjs from 'react-google-maps/lib/withScriptjs';



const MapWithAMarker = withScriptjs(withGoogleMap( (props) => (
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: 37.7749, lng: -122.4194 }}
  >

  {/* use for each loop to get and display array from node file */}
    <Marker position={{ lat: 37.7749, lng: -122.4194 }} />
    <Marker position={{ lat: 37.4749, lng: -122.4194 }} />
  </GoogleMap>
)));




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


  return (
    data && <MapWithAMarker

      googleMapURL={"https://maps.googleapis.com/maps/api/js?key=" + data.key}
      loadingElement={<div style={{ height: '100%' }} />}
      containerElement={<div style={{ height: '400px' }} />}
      mapElement={<div style={{ height: '100%' }} />}
    />
  );
}

export default MyMapComponent;



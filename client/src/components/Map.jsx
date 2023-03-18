import React, { useState, useEffect } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import withScriptjs from 'react-google-maps/lib/withScriptjs';



function MyMapComponent(props) {
  
  const MapWithAMarker = withScriptjs(withGoogleMap( () => (
    <GoogleMap
      defaultZoom={6}
      defaultCenter={{ lat: 25.3953, lng: 79.1379 }}
    >

    {/* display marker on map */}

      {props.plotMarkers && 
      props.markers.map((marker, index) => (
          <Marker key={index} position={{ lat: parseFloat(marker.Lat), lng: parseFloat(marker.Lng) }} />
      ))}
      
    </GoogleMap>
  )));



  return (
    
    <MapWithAMarker
      googleMapURL={"https://maps.googleapis.com/maps/api/js?key=" + props.apiKey}
      loadingElement={<div style={{ height: '100%' }} />}
      containerElement={<div style={{ height: '600px' }} />}
      mapElement={<div style={{ height: '100%' }} />}
    />
  );
}


export default MyMapComponent;



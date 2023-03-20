import React, { useState } from 'react';
import { withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps';
import withScriptjs from 'react-google-maps/lib/withScriptjs';



function MyMapComponent(props) {
  const [markerId, setMarkerId] = useState(null);


  function showInfoBox(marker) {

    if (marker.id === markerId) {
      return <InfoWindow onCloseClick={() => setMarkerId(false)}>
        <div>
          <h6>{marker.Name}</h6>
          <p>{"Model:" + marker.Year}, {"KM:" + marker.Kilometers_Driven}, {marker.Fuel_Type}</p>
        </div>
      </InfoWindow>
    }
  }

  const MapWithAMarker = withScriptjs(withGoogleMap(() => (
    <GoogleMap
      defaultZoom={7}
      defaultCenter={{ lat: 25.3953, lng: 79.1379 }}
    >


      {/* display marker on map */}

      {props.plotMarkers &&
        props.markers.map((marker) => (

          <Marker
            key={marker.id}
            id={marker.id}
            position={{ lat: parseFloat(marker.Lat), lng: parseFloat(marker.Lng) }}
            onClick={() => setMarkerId(marker.id)}
          >

            {showInfoBox(marker)}

          </Marker>
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



import React, { Component } from "react";
import { MapContainer } from "react-leaflet";
import { OpenStreetMapProvider } from "react-leaflet-geosearch";
import MapTypeSelect from "./MapTypeSelect";
import SearchControl from "./SearchControl";

const center = [53.718286203625205, 10.27246086751477] // Fahrzeughalle Bgth.

export class OperationMap extends Component {
  static displayName = Map.name

  render() {
    return (
      <MapContainer id="map" center={center} zoom={13} scrollWheelZoom={true}>
        
        <MapTypeSelect />

        <SearchControl
          provider={new OpenStreetMapProvider()}
          showMarker={true}
          showPopup={false}
          popupFormat={({ query, result }) => result.label}
          maxMarkers={3}
          retainZoomLevel={false}
          animateZoom={true}
          autoClose={false}
          searchLabel={"Enter address, please"}
          keepResult={true}
        />
      </MapContainer>

    );
  }
}

export default OperationMap;
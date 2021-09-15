import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import StyleMap from "./StyleMap.js";

export class Maps extends React.Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={15}
        styles={this.props.mapStyle}
        initialCenter={{ lat: 49.41133092452669, lng: 27.017354967891713 }}
      >
        <Marker
          position={{ lat: 49.41133092452669, lng: 27.017354967891713 }}
        />
      </Map>
    );
  }
}
Maps.defaultProps = StyleMap;
export default GoogleApiWrapper({
  apiKey: "AIzaSyA5pOrhw2oM_deEAQHUTn7cbVj3mqVF7VU",
})(Maps);

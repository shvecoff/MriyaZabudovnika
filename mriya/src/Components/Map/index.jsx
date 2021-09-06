import React from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import googleMapStyles from "./GoogelMapStyle.jsx"


export class Maps extends React.Component {
    render() {
      const mapStyles = {
        width: "100%",
        height: "100%",
        color:"#10A9B7"
      };
      return (
        <Map
            google={this.props.google}
            zoom={15}
            styles={this.props.mapStyle}
          initialCenter={{ lat: 49.41133092452669, lng: 27.017354967891713 }}
        >
          <Marker position={{ lat: 49.41133092452669, lng: 27.017354967891713 }} />
        </Map>
      );
    }
  }
  Maps.defaultProps = googleMapStyles;
  export default GoogleApiWrapper({
    apiKey: "AIzaSyCdOKftjAiszr4Ilzrk93JLqF66qdil7XM",
  })(Maps);
import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import "../../styles/map.css";
import {golden} from './mapstyle'
import cannabisMarker from '../../assets/cannabis-solid.svg'
import { Link } from 'react-router-dom';


export class MapContainer extends Component {

    state = {
        showingInfoWindow: false,  
        activeMarker: {},
        selectedPlace: {}   
    };

    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

    onClose = props => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            });
        }
    };

    render() {
        if (!this.props.dispensaries) return null;
        
        const {dispensaries} = this.props
        const dispMarks = dispensaries.map((mark, index) => 
            <Marker 
                key={index} 
                // icon={cannabisMarker}
                position={{ lat: mark.latitude, lng: mark.longitude }}
                onClick={this.onMarkerClick} 
                name={mark.dispensaryName}
                data={mark._id}
            />)

        const zoomControlOptions = {
            position: this.props.google.maps.ControlPosition.RIGHT_CENTER
        }

        const bounds = new this.props.google.maps.LatLngBounds();
        for (let i = 0; i < dispensaries.length; i++) {
            bounds.extend({ lat: dispensaries[i].latitude, lng: dispensaries[i].longitude});
        }

        return (
          <>
            <Map
                google={this.props.google}
                zoom={11}
                zoomControl={true}
                zoomControlOptions={zoomControlOptions}
                styles={golden}
                mapTypeControl={false}
                streetViewControl={false}
                // style={{
                //     width: '60%',
                //     height: '100%'
                // }}
                initialCenter={
                    {
                        lat: 40.7484,
                        lng: -73.9857
                    }
                }
                bounds={bounds}
            >
                {/* <Marker
                    onClick={this.onMarkerClick}
                    name={'Atlus Empire Headquarters'}
                /> */}
                {dispMarks}
                <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}
                    onClose={this.onClose}
                >
                    <div> 
                        <h4>{this.state.selectedPlace.name}</h4>
                    </div>
                </InfoWindow>
            </Map>
          </>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDIEumsEBQJ1SBu1boGzGQUtYvi7Q2YSE4'
})(MapContainer);
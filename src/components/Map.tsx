import React from 'react';
import ReactMapGL, { Marker, NavigationControl, Popup } from 'react-map-gl';
import { Icon } from 'semantic-ui-react';
 
const MAPBOX_TOKEN = 'pk.eyJ1IjoicmVpdmF4MHoiLCJhIjoiY2s3YXc5c256MDJueDNlcDNldno1czhxYyJ9.BppHZXEACc5V-n5COzMaEA';
const MAP_TYPE = 'mapbox://styles/mapbox/satellite-v9';

export default class Map extends React.Component<{ places: { location: string, name: string }[] }> {

  state = {
    viewport: {
      width: "100%",
      height: "100vh",
      latitude: -33.8645839,
      longitude: 151.2124929,
      bearing: 0,
      pitch: 0,
      zoom: 11
    },
    popupInfo: false
  };

  renderPopup(index){
    return this.state.popupInfo && (
      <Popup tipSize={5}
        anchor="bottom-right"
        longitude={+this.props.places[index].location.split(',')[1]}
        latitude={+this.props.places[index].location.split(',')[0]}
        onMouseLeave={() => this.setState({popupInfo: null})}
        closeOnClick={true}>
        <p><strong>{this.props.places[index].name}</strong><br/></p>
      </Popup>
      )
    }
 
  render() {
    return (
    <div>
      <ReactMapGL
        {...this.state.viewport}
        onViewportChange={(viewport) => this.setState({viewport})}
        mapboxApiAccessToken={MAPBOX_TOKEN}
        mapStyle={MAP_TYPE}
        >

        <div className="nav">
          <style jsx>{`
              .nav {
                position: 'absolute',
                top: 0,
                left: 0,
                padding: '10px'
              }
          `}</style>
          <NavigationControl onViewportChange={(viewport) => this.setState({viewport})}/>

            {this.props.places.map((place, index) => {
                const lat = +place.location.split(',')[0];
                const lgt = +place.location.split(',')[1];

                return (<div key={index} >
                  <Marker
                      key={place.name}
                      latitude={lat}
                      longitude={lgt}
                  >
                      <Icon 
                        name={"marker"}
                        size={"big"} 
                        color={"red"}
                        onMouseEnter={()=>this.setState({popupInfo: true})}
                        onMouseLeave={()=>this.setState({popupInfo: null})}>
                        </Icon>
                  </Marker>
                  {this.renderPopup(index)}
                </div>)
            })}
          </div>

        </ReactMapGL>
    </div>
    );
  }
}

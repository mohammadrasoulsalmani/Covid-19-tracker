import React from 'react';
import {MapContainer as LeafletMap , TileLayer, useMap , Circle} from "react-leaflet";
import "./Map.css";
import { showDataOnMap } from "./util";

function Map({ center , zoom , countries , casesType}) {

    const ChangeView = ({center , zoom  }) =>{
        const map = useMap();
        map.setView(center , zoom);
        return null;
    }

    return (
        <div className="map">
          <LeafletMap center={center} zoom={zoom} >
              <ChangeView center={center} zoom={zoom} />
            {/* <TileLayer
              url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
              attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
            /> */}
            <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            {showDataOnMap(countries, casesType)}
            
          </LeafletMap>
        </div>
      );
    }
    
    export default Map;
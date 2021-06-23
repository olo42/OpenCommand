import React, { Component } from "react";
import { TileLayer, LayersControl } from "react-leaflet";
// import authService from './api-authorization/AuthorizeService'

export class MapTypeSelect extends Component {
    static displayName = MapTypeSelect.name

    constructor(props) {
        super(props);
        this.state = { geoMaps: [], loading: true };
    }

    componentDidMount() {
        this.populateMapData()
    }

    static renderSelectControl(geoMaps) {
        var selected = true;
        return (
            <div>
                {geoMaps.map(geoMap => 
                    <LayersControl.BaseLayer name={geoMap.name} checked={geoMap.default}>
                        <TileLayer attribution={geoMap.attribution} url={geoMap.url} />
                    </LayersControl.BaseLayer>
                )};
            </div>
        )
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : MapTypeSelect.renderSelectControl(this.state.geoMaps);

        return (
            <LayersControl position="topright">
                {contents};
            </LayersControl>
        )
    }

    async populateMapData() {
        const data = [{
            name: 'OpenStreetMap',
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
            url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            default: 'checked'
        },
        {
            name: 'OpenTopoMap',
            attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
            url: 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
            default: false
        },
        {
            name: 'ESRI - WorldImagery',
            attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
            url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
            default: false
        }];

        this.setState({ geoMaps: data, loading: false });
    }
}

export default MapTypeSelect;
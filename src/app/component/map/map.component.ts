import { EventEmitter } from "@angular/core";
import { Component, OnInit, Output } from "@angular/core";
import * as mapboxgl from "mapbox-gl";
import { AppService } from "src/app/service/app.service";
import { environment } from "src/environments/environment";

@Component({
    selector: 'map-comp',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
    map: any;
    style = 'mapbox://styles/mapbox/streets-v11';
    lat = 38.89;
    lng = -77.03;
    test = [-77.04083204, 38.91468021];
    data = [];
    popup = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false
    });
    @Output() selectedPlaceEvent = new EventEmitter();
    constructor(private service: AppService) {

    }
    ngOnInit() {
        const data = this.loadData();
        (mapboxgl as any).accessToken = environment.mapbox.accessToken;
        this.map = new mapboxgl.Map({
            container: 'map',
            style: this.style,
            zoom: 13,
            center: [this.lng, this.lat]
        });
        // Add map controls
        this.map.addControl(new mapboxgl.NavigationControl());
        this.map.on('mouseenter', 'points', (e) => {
            const coordinates = e.features[0].geometry.coordinates.slice();
            const address = e.features[0].properties.FULLADDRESS ? e.features[0].properties.FULLADDRESS : 'Unknown Address';
            const price = e.features[0].properties.PRICE ? '$' + e.features[0].properties.PRICE : 'Price Unknown';
            const bathroom = e.features[0].properties.BATHRM + ' Bathrooms ';
            const bedroom = e.features[0].properties.BEDRM + ' Bedrooms';
            while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
            }
            this.popup
                .setLngLat(coordinates)
                .setHTML('<div><h2>' + address + '</h2><h3>' + price + '</h3><h4>' + bathroom + bedroom + '</h4></div>')
                .addTo(this.map);
        })
        this.map.on('click', 'points', (e) => {
            this.selectedPlaceEvent.emit(e.features[0].properties);
        });
        this.map.on('mouseenter', 'places', () => {
            this.map.getCanvas().style.cursor = 'pointer';
        });

        // Change it back to a pointer when it leaves.
        this.map.on('mouseleave', 'places', () => {
            this.map.getCanvas().style.cursor = '';
            this.popup.remove();

        });
        this.map.on('load', () => {


        })
    }
    loadData() {
        this.service.getData().subscribe({
            next: (data: any) => {
                data.forEach(place => {
                    this.data.push({
                        'type': 'Feature',
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [place.LONGITUDE, place.LATITUDE]
                        },
                        'properties': {
                            ...place
                        }
                    });
                });
                this.map.loadImage(
                    'https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png',
                    (error, image) => {
                        if (error) throw error;
                        this.map.addImage('custom-marker', image);
                        // Add a GeoJSON source with 2 points
                        this.map.addSource('points', {
                            'type': 'geojson',
                            'data': {
                                'type': 'FeatureCollection',
                                'features': this.data
                            }
                        });
                        // Add a symbol layer
                        this.map.addLayer({
                            'id': 'points',
                            'type': 'symbol',
                            'source': 'points',
                            'layout': {
                                'icon-image': 'custom-marker',
                                // get the title name from the source's "title" property
                                'text-field': ['get', 'title'],
                                'text-font': [
                                    'Open Sans Semibold',
                                    'Arial Unicode MS Bold'
                                ],
                                'text-offset': [0, 1.25],
                                'text-anchor': 'top'
                            }
                        });
                    }
                );
            },
            error: (error) => {
                console.log(error);
            },
            complete: () => {

            }
        })
    }
}
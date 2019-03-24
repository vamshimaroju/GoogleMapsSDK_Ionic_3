// import {
//   GoogleMaps,
//   GoogleMap,
//   GoogleMapOptions,
//   Environment
// } from '@ionic-native/google-maps';
import { Component } from '@angular/core';
// import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // map:GoogleMap;
  constructor() {
    console.log("Home constructor");
  }

  // ionViewDidLoad() {
  //   this.loadMap();
  // }
  // loadMap() {

  //   // This code is necessary for browser
  //   Environment.setEnv({
  //     'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyDXdtfCnmmKQpjuDOprLw-o-1OzWO4-XHA',
  //     'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyDXdtfCnmmKQpjuDOprLw-o-1OzWO4-XHA'
  //   });

  //   let mapOptions: GoogleMapOptions = {
  //     camera: {
  //        target: {
  //          lat: 43.0741904,
  //          lng: -89.3809802
  //        },
  //        zoom: 18,
  //        tilt: 30
  //      }
  //   };
  //   // this.map = GoogleMaps.create('map_canvas');

  //   this.map = GoogleMaps.create('map_canvas', mapOptions);

  //   // let marker: Marker = this.map.addMarkerSync({
  //   //   title: 'Ionic',
  //   //   icon: 'blue',
  //   //   animation: 'DROP',
  //   //   position: {
  //   //     lat: 43.0741904,
  //   //     lng: -89.3809802
  //   //   }
  //   // });
  //   // marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
  //   //   alert('clicked');
  //   // });
  // }
}

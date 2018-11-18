import { Component, NgZone, ElementRef, ViewChild } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { Geolocation ,GeolocationOptions ,Geoposition ,PositionError } from '@ionic-native/geolocation';
import { googlemaps } from 'googlemaps';
@Component({
  selector: 'page-home',
  templateUrl: 'map.html'
})
export class MapPage {
  @ViewChild('map') mapElement: ElementRef;
  map:any;
  latLng:any;
  markers:any;
  mapOptions:any;  
  isKM:any=10;
  isType:any="";
  num: number =0;
 
  constructor(private ngZone: NgZone, private geolocation : Geolocation) { }
  ionViewDidLoad() {
    this.loadMap();
  }
  loadMap(){
    this.geolocation.getCurrentPosition().then((position) => {
    this.latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
          console.log('latLng',this.latLng, this.num++);
     
      this.mapOptions = {
        center: this.latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }   
    this.map = new google.maps.Map(this.mapElement.nativeElement, this.mapOptions);
    }, (err) => {
      alert('err '+err);
    });
    // this.nearbyPlace();
  }

 /*--------------------Find Nearby Place------------------------*/ 
  nearbyPlace(){

    this.loadMap();
    this.markers = [];
    let service = new google.maps.places.PlacesService(this.map);
    service.nearbySearch({
              location: this.latLng,
              radius: this.isKM,
              types: [this.isType]
            }, (results, status) => {
                this.callback(results, status);
            });
            console.log(this.isType)
  }
  callback(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        this.createMarker(results[i]);
      }
    }
  }
  createMarker(place){
    var placeLoc = place;
    this.num++;
    console.log('placeLoc',placeLoc);
    
    this.markers = new google.maps.Marker({
        map: this.map,
        animation: google.maps.Animation.DROP,
        position: place.geometry.location
    });
    this.addInfoWindow(this.markers, this.markers.name);
    // let infowindow = new google.maps.InfoWindow();
    // google.maps.event.addListener(this.markers, 'click', () => {
    //   this.ngZone.run(() => {
    //     infowindow.setContent(place.name);
    //     infowindow.open(this.map, this.markers);
    //   });
    // });
  }

  // addMarker(){
 
  //   let marker = new google.maps.Marker({
  //     map: this.map,
  //     animation: google.maps.Animation.DROP,
  //     position: this.map.getCenter()
  //   });
   
  //   let content = "<h4>Information!</h4>";         
   
  //   this.addInfoWindow(marker, content);
  // }

  addInfoWindow(marker, content){
 
    let infoWindow = new google.maps.InfoWindow({
      content: content
    });
   
    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });
   
  }
}
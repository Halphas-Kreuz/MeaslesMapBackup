var map = L.map('map').setView([52.31,13.24],5);
// var corner1 = L.latLng(40.712, -74.227);
// var corner2 = L.latLng(50.712, -74.227);
// map.fitBounds([corner1,corner2]);
// var point = L.point (45,-74.227);
// map.panBy(point);
// var marker = L.marker(corner1,{draggable:true,autoPan:true}).addTo(map);
// var Berlinmarker = L.marker([52.31,13.24]).addTo(map);

var Charlottenburg_Wilmersdorf =  L.latLng(52.507856,13.263952);
var CW_marker = L.marker(Charlottenburg_Wilmersdorf).addTo(map);
CW_marker.bindPopup("hello");


L.tileLayer('https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=cmcraQ0V0ygmZxCKNIMN ',{
  tileSize: 512,
  zoomOffset: -1,
  minZoom: 2,
  maxZoom:10,
  attribution: "\u003ca href=\"https://www.maptiler.com/copyright/\" target=\"_blank\"\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href=\"https://www.openstreetmap.org/copyright\" target=\"_blank\"\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e",
  crossOrigin: false,
}).addTo(map);




var myStyle = {
    "color": "#ffffff",
    "weight": 5,
    "opacity": 1,
};

L.geoJSON("bezirksgrenzen.geojson",{
    style: myStyle
}).bindPopup(function (layer){
    
})

// function onEachFeature(feature, layer){
//     layer.bindPopup(feature.properties.Gemeinde_name)
// };

// var geojsonLayer = new L.GeoJSON.AJAX("bezirksgrenzen.geojson",{
//     onEachFeature:onEachFeature});
// geojsonLayer.addTo(map); 



//geojson layer external
// fetch("bezirksgrenzen.geojson").then(res => res.json()).then(data => {
// // add GeoJSON layer to the map once the file is loaded
// L.geoJson(data,).addTo(map);



// //geojson layer 
// fetch("bezirk.geojson")
//     .then(function(response){
//         return response.json()
//     }).then(function (data){
//         L.geoJSON(data,{
//             onEachFeature: onEachFeature,
//         }).addTo(map);
//     });
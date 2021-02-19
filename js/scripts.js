mapboxgl.accessToken = 'pk.eyJ1IjoieWFzaGJhcm90MTk5NSIsImEiOiJja2xiZnpzNm0ybDIwMnZwZTN5YTNicTdxIn0.KFX00mfcRSTdnk9hFCVLaw';
var map = new mapboxgl.Map({
  container: 'map', // container ID
  style: 'mapbox://styles/mapbox/streets-v11', // style URL
  center: [-73.98433940235135, 40.75487934025684], // starting position [lng, lat]
  zoom: 12 // starting zoom
});

var nav = new mapboxgl.NavigationControl();map.addControl(nav, 'top-left');

var loadedData = JSON.parse(data);

for(var i = 0; i < loadedData.length; i++) {
  var color;
  if (loadedData[i].Type == "Brownfield")
  {
    color = "brown";
  } else {
    color = "red";
  }
    var marker = new mapboxgl.Marker({color: color})
    .setLngLat(loadedData[i].Location)
    .setPopup(new mapboxgl.Popup().setHTML("<h2>".concat(loadedData[i].Name, "</h2>", loadedData[i].Type, "</br><a href=", loadedData[i].Link, ">Click here for more info!</a>"))) // add popup
    .addTo(map);
}

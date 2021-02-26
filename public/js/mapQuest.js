function initMap() {
  L.mapquest.key = "x0F9uyajA2HzvtooDvavOAX34Gb18HlJ";

  // 'map' refers to a <div> element with the ID map
  var map = L.mapquest.map("map", {
    center: [32.87895924751261, -117.23815129612396],
    layers: L.mapquest.tileLayer("map"),
    zoom: 12,
    zoomControl: false,
  });

  L.marker([32.87895924751261, -117.23815129612396]).addTo(map);
}

import centroid from '@turf/centroid'; 
var features = turf.points([
    [-97.522259, 35.4691],
    [-97.502754, 35.463455],
    [-97.508269, 35.463245]
  ]);
  
  var center = turf.centroid(features);
console.log(center);
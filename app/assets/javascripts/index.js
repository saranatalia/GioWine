var map = L.map('map', {
  center: [-3.146934, -78.103972],
  zoom: 0,
  minZoom: 2,
  maxZoom: 0,
  scrollWheelZoom: false,
  doubleClickZoom: false,
  dragging: false,
  touchZoom: false,
  zoomControl: false
});

var Thunderforest_Outdoors = L.tileLayer('http://{s}.tile.thunderforest.com/outdoors/{z}/{x}/{y}.png',
{
  attribution: '&copy; <a href="http://www.opencyclemap.org">OpenCycleMap</a>, &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  minZoom: 1,
  maxZoom: 16
}).addTo(map);

var marker = L.marker([-32.9264482,-68.813779]);
marker.addTo(map);
marker.bindPopup("Mendoza, Argentina").openPopup();

var marker = L.marker([-8.7565456,-63.8549068]);
marker.addTo(map);
marker.bindPopup("Porto Velho, Brasil").openPopup();

var marker = L.marker([14.62622,-90.4925605]);
marker.addTo(map);
marker.bindPopup("Mixco, Guatemala").openPopup();

var marker = L.marker([25.782324,-80.2310801]);
marker.addTo(map);
marker.bindPopup("Miami, Florida USA").openPopup();

var marker = L.marker([19.2902231,-81.369597]);
marker.addTo(map);
marker.bindPopup("George Town, Cayman Islands").openPopup();

var marker = L.marker([32.8245525,-117.0951632]);
marker.addTo(map);
marker.bindPopup("Main Office <br> San Diego, California USA").openPopup();


//  var bouncing = false;
//   marker.on('mouseover', function() {
//    marker.addClass('hover');
//     if (bouncing == false)
//     {
//       bouncing = true;
//       this.bounce(1);
//       setTimeout(function() { bouncing = false; }, 1000); // bouncing=false after 1000ms/1s
//     }
//   })
//   marker.on('mouseout', function() {
//     marker.removeClass('hover');
//   })

// });

// /* Define options of bouncing for all markers */
// L.Marker.setBouncingOptions({
//         bounceHeight  : 20,   // height of the bouncing
//         bounceSpeed   : 34,   // bouncing speed coefficient
//         exclusive     : true, // if this marker bouncing all others must stop
//         elastic       : true, // activate contract animation when marker touch the ground
//         contractSpeed : 34,   // contracting speed coefficient, default: 52
//         contractHeight: 12,   // how much marker will contract when it touch the ground (px), default: 12
// });

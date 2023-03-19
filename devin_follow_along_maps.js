let metroAreaCenterCoordinates = [44.96, -93.2] // latitude and longitude
let zoomLevel = 9 // 1 = whole world 20 = city blocks

let map = L.map('college-map').setView(metroAreaCenterCoordinates, zoomLevel) //L variable created through Leaflet which has a function called map
//'college-map' tells Leaflet where to draw the map - in this case within the already created div

//still need tiles - the map background showing roads, rivers, buildings, labels etc.

// providers of map tiles:
// Mapbox
// Stamen
// OpenStreetMap

// using OpenStreetMap:
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// if we already have an array of data we can do a loop method to add markers instead of the individual markers commented out below
campuses =  [
    {"name": "Minneapolis College", "website": "https://minneapolis.edu", "coordinates": [44.9724, -93.2844] }, 
    {"name": "Saint Paul College", "website": "https://saintpaul.edu", "coordinates": [44.94839, -93.1099] }, 
    {"name": "Normandale Community College", "website": "https://normandale.edu", "coordinates": [44.8297, -93.3312] }, 
    {"name": "North Hennepin Community College", "website": "https://nhcc.edu", "coordinates": [45.1054232,-93.3767558] }, 
    {"name": "Century College", "website": "https://www.century.edu/", "coordinates": [45.0438494,-92.9862026] }
]

campuses.forEach(function(collegeCampus) {
    let markerText = `<b>${collegeCampus.name}</b><br><a href="${collegeCampus.website}">Website</a>`
    L.marker(collegeCampus.coordinates).bindPopup(markerText).addTo(map)
})

// //adding a marker:
// let mctcCoordinates = [44.9724, -93.2844]
// let mctcMarker = L.marker(mctcCoordinates)
//     .bindPopup('Minneapolis College<br><a href="https://minneapolis.edu">Website')
//     .addTo(map)
// //.bindPopup adds a pop up to the marker
// // href will link to MCTC website on the pop up - you can write HTML within the popUp argument

// //another marker
// let stPaulCoordinates = [44.9483, -93.1099]
// let stpMarker = L.marker(stPaulCoordinates)
//     .bindPopup('Saint Paul College<br><a href="https://saintpaul.edu">Website')
//     .addTo(map)

// // another marker
// let normandaleCoordinates =[44.8297, -93.3312]
// let normandaleMarker = L.marker(normandaleCoordinates)
//     .bindPopup('Normandale Community College<br><a href="https://normandale.edu">Website')
//     .addTo(map)


//example annotation - circle around metro area
let metroAreaCircle = L.circle(metroAreaCenterCoordinates, {
    color: 'purple',
    radius: 30000, //30k km
    fillOpacity: 0.15
}) // curly braces is second object to make circle bigger
    .bindPopup('Twin Cities Metro Area')
    .addTo(map)








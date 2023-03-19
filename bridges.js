let usaCenterCoordinates = [39.8283, -98.5795] // latitude and longitude
let zoomLevel = 4 // 1 = whole world 20 = city blocks

let map = L.map('bridge-map').setView(usaCenterCoordinates, zoomLevel) //L variable created through Leaflet which has a function called map
//'bridge-map' tells Leaflet where to draw the map - in this case within the already created div

//still need tiles - the map background showing roads, rivers, buildings, labels etc.

// providers of map tiles:
// Mapbox
// Stamen
// OpenStreetMap

// using OpenStreetMap:
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// creating special markers using bridge png
let bridgeIcon = L.icon({
    iconUrl: 'bridge.png',

    iconSize:     [30, 30], // size of the icon
});

// and seperate icon for the longest bridge
let longboyIcon = L.icon({
    iconUrl: 'one.png',

    iconSize:     [30, 30], // size of the icon
});


// if we already have an array of data we can do a loop method to add markers
bridges = [
    {
        "name": "Verrazano-Narrows Bridge",
        "span": 1298.4,
        "span_text": "1298.4m",
        "city": "New York, NY and New York, NY",
        "location": [
            40.6066,
            -74.0447
        ]
    },
    {
        "name": "Golden Gate Bridge",
        "span": 1280.2,
        "span_text": "1,280.2m",
        "city": "San Francisco and Marin, CA",
        "location": [
            37.8199,
            -122.4783
        ]
    },
    {
        "name": "Mackinac Bridge",
        "span": 1158.0,
        "span_text": "1,158.0m",
        "city": "Mackinaw and St Ignace, MI",
        "location": [
            45.8174,
            -84.7278
        ]
    },
    {
        "name": "Tacoma Narrows Bridge",
        "span": 853.44,
        "span_text": "853.44m",
        "city": "Tacoma and Kitsap, WA",
        "location": [
            47.2690,
            -122.5517
        ]
    },
    {
        "name": "George Washington Bridge",
        "span": 1067.0,
        "span_text": "1067.0m",
        "city": "New York, NY and New Jersey, NJ",
        "location": [
            40.8517,
            -73.9527
        ]
    }
]


// function GetIcon() {
//     if (bridges.span_text >= 1066 )  //tried a couple different things here
//         {return longboyIcon
//     } else
//         return bridgeIcon
// }
// i can get all of them to do one of either of the options which makes me believe the problem is in my function/loop

// trying the info from the leaflet website:

let bridgesIcon = L.Icon.extend({
    options: {
        iconSize:     [30, 30],
    }
});

let notLongIcon = new bridgesIcon({iconUrl: 'bridge.png'}),
    realLongIcon = new bridgesIcon({iconUrl: 'one.png'})

// function GetIcon() {
//     let bridgesIcon = L.Icon.extend({
//         options: {
//             iconSize:     [30, 30],
//         }
//     });
//     let notLongIcon = new bridgesIcon({iconUrl: 'bridge.png'}),
//     realLongIcon = new bridgesIcon({iconUrl: 'one.png'})

//     if (longBridge.span >= 1066 )  //tried a couple different things here
//         {return realLongIcon
//     } else
//         return notLongIcon
// }



bridges.forEach(function(longBridge) {
    let markerText = `<b>${longBridge.name}</b><br>Length: ${longBridge.span_text}<br>Connecting: ${longBridge.city}`
    markerIcon = notLongIcon;
    max = Math.max(...bridges.map(({ span }) => span)) //used this in lab 5 too
        //added line 128 when I learned icon should still be supported if data changes
        //originally I had longBride.name == Verrazano-Narrows Bridge
        if (longBridge.span == max) { //YAYYYYYYY YOU GOTTA PUT IT IN THE FUNCTION!!! THIS TOOK ME TWO HOURSSSSSSSS : )
            markerIcon = realLongIcon
        }
    L.marker(longBridge.location, {icon: markerIcon}).bindPopup(markerText).addTo(map)
})

// my issue was i was trying to call a seperate function to determine the icon when i should have just been doing everything inside the forEach function
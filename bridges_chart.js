let canvas = document.querySelector('#bridge-chart')
// similar to maps we need to find and then create the chart location on the page
let context = canvas.getContext('2d')

let chart = new Chart(context, {
    type: 'bar',
    data: { //need labels - what does each bar represent?
        //COMMAS WATCH THE COMMAS
        labels: [],
        datasets: [ {
            label: 'Bridges', 
            data:[],
            backgroundColor: []
        }]
    },//END OF DATASETS
    options: {
        scales: {
            yAxes: [ {
                scaleLabel: {
                    display: true,
                    labelString: 'Length In Meters'
                },
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
})


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

let chartColors = [ 'tomato', 'orange', 'dodgerblue', 'mediumseagreen', 'slateblue', 'violet' ]


bridges.forEach (function (name) {
     
    chart.data.labels.push(name.name)
    chart.data.datasets[0].data.push(name.span)

    let colorCount = chart.data.datasets[0].backgroundColor.length
    let color = chartColors[colorCount % chartColors.length] //like division but only gives remainder back

    chart.data.datasets[0].backgroundColor.push(color)

    chart.update()

    console.log(typeof chart.data.datasets[0].data);

    console.log(chart.data.datasets[0].data) // names are pulling over but data isn't?
    // is it due to the float?
        //nope tried that...
    // console log is showing multiple arrays of undefined values??? it's like it's creating a new array five times???
        // tried concat instead of push - nope

})



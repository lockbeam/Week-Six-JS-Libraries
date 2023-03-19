let canvas = document.querySelector('#soda-chart')
// similar to maps we need to find and then create the chart location on the page
let context = canvas.getContext('2d')

let chart = new Chart(context, {
    type: 'bar',
    data: { //need labels - what does each bar represent?
        //COMMAS WATCH THE COMMAS
        labels: ['Coke', 'Pepsi', 'Warm Milk', 'Combo', 'None'],
        datasets: [ {
            label: 'Number of votes', 
            data: [1, 2, 3, 1, 19],
            backgroundColor: ['red', 'blue', 'olive', 'purple', 'brown']
        }]
    },//END OF DATASETS
    options: {
        scales: {
            yAxes: [ {
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
})
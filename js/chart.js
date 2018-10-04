var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["Red", "Redqd", "Rerd", "Rfed", "Redd", "Reed"],
    datasets: [{
      label: '# of Votes',
      data: [ 12, 14, 17,5,38,4],
      backgroundColor: [
        'red',
        'green',
        'blue',
        'yellow',
        'grey',
        'red'],
      borderColor: [
        'green',
        'red',
        'blue',
        'black',
        'grey',
        'teal'
      ],
      borderWidth: 2
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});
var ctxP = document.getElementById('pieChart').getContext('2d');
var myPieChart = new Chart(ctxP, {
  type: 'pie',
  data: {
    datasets: [{
      data: [ 350, 140, 170,280,180,40],
      backgroundColor: [
        'red',
        'green',
        'yellow',
        'blue',
        'grey',
        'cyan'],
      hoverBackgroundColor: [
        'teal',
        'red',
        'black',
        'violet',
        'pink',
        'blue'
      ],
      borderWidth: 2
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});
var ctxL = document.getElementById('lineChart');
var myLineChart = new Chart(ctxL, {
  type: 'line',
  data: {
    labels: ["1","2","3","4","5","6","7"],
    datasets: [
      {
        label: "dataset",
        fillColor: 'black',
        strokeColor: 'res',
        pointColor: 'green',
        pointStrokeColor: '#fff',
        pointHightlightFill: '#fff',
        pointHightlightStroke: 'yellow',
        data: [65,68,50,76,54,50,32]
      },
      {
        label: "dataset-2",
        fillColor: 'black',
        strokeColor: 'res',
        pointColor: 'green',
        pointStrokeColor: '#fff',
        pointHightlightFill: '#fff',
        pointHightlightStroke: 'yellow',
        data: [35,58,20,56,24,50,42]
      },
    ]

  }
});
var ctxR = document.getElementById('radarChart').getContext('2d');
var myRadarChart = new Chart(ctxR, {
  type: 'radar',
  data: {
    labels: ["first","second","threth","fourth","five","sixend",],
    datasets: [
      {
        label: "dataset",
        fillColor: 'black',
        strokeColor: 'res',
        pointColor: 'green',
        pointStrokeColor: '#fff',
        pointHightlightFill: '#fff',
        pointHightlightStroke: 'yellow',
        data: [65,68,50,76,54,50,32]
      },
      {
        label: "dataset-2",
        fillColor: 'black',
        strokeColor: 'res',
        pointColor: 'green',
        pointStrokeColor: '#fff',
        pointHightlightFill: '#fff',
        pointHightlightStroke: 'yellow',
        data: [35,58,20,56,24,50,42]
      },
    ]
  }
});
var ctxD = document.getElementById('doughnutChart').getContext('2d');
var myDoughnutCharter = new Chart(ctxD, {
  type: 'doughnut',
  data: {
    labels: ["first","second","threth","fourth","five"],
    datasets: [
      {
        data: [300, 50, 100, 40, 130],
        backgroundColor: ['red','green', 'black', 'teal', 'yellow'],
        hoverBackgroundColor: [
          'blue',
          'cyan',
          'red',
          'darkcyan',
          'violet'
        ]
      }
    ]
  },
  options: {
    responsive: true
  }
})

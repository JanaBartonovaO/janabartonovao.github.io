document.addEventListener('DOMContentLoaded', function () {
    var ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Zemní plyn', 'Tepelné čerpadlo', 'Elektřina - přímotop', 'Dřevní pelety', 'Palivové dřevo'],
            datasets: [{
                label: 'Roční náklady na energie v domě bez zahrnutí ostatní spotřeby elektřiny v Kč',
                data: [38198, 31668, 79176, 31180, 17858],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            plugins: {
                legend: {
                    display: false
                },
                title: {
                    display: true,
                    text: 'Roční náklady na energie v domě bez zahrnutí ostatní spotřeby elektřiny v Kč',
                    font: {
                        size: 12,
                        weight: 'bold'
                    }

                },

                tooltip: {
                    mode: 'nearest',
                    intersect: true,
                    callbacks: {
                        label: function (context) {
                            return context.raw; // Zobrazí pouze hodnotu 
                        }
                    }
                }
            },
            hover: {
                mode: 'nearest',
                intersect: true
            },


            scales: {
                x: {
                    ticks: {
                        font: {
                            size: 8,
                            weight: 'bold'
                        }
                    }
                },
                y: {
                    ticks: {
                        font: {
                            size: 8,
                            weight: 'bold'
                        },
                        beginAtZero: true
                    }
                }
            }
        }
    });
});

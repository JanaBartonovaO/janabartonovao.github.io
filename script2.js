document.addEventListener('DOMContentLoaded', () => {
    
    const ctx1 = document.getElementById('myChart').getContext('2d');
    new Chart(ctx1, {
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
                    'rgba(153, 102, 255, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            plugins: {
                legend: { display: false },
                title: {
                    display: true,
                    text: 'Roční náklady na energie v domě bez zahrnutí ostatní spotřeby elektřiny v Kč',
                    font: { size: 12, weight: 'bold' }
                },
                tooltip: {
                    callbacks: {
                        label: context => context.raw 
                    }
                }
            },
            scales: {
                x: {
                    ticks: { font: { size: 8, weight: 'bold' } },
                    grid: { display: false }
                },
                y: {
                    ticks: { font: { size: 8, weight: 'bold' }, beginAtZero: true },
                    grid: { display: false }
                }
            }
        }
    });

    
    const ctx2 = document.getElementById('myChart2').getContext('2d');
    new Chart(ctx2, {
        type: 'bar',
        data: {
            labels: ['Jihočeský', 'Jihomoravský', 'Liberecký', 'Moravskoslezský', 'Olomoucký', 'Pardubický', 'Středočeský', 'Ústecký', 'Vysočina', 'Praha', 'Zlínský', 'Plzeňský', 'Královehradecký', 'Karlovarský'],
            datasets: [{
                label: 'Medián hrubé měsíční mzdy účetních specialistů',
                data: [29922, 31370, 39881, 30717, 28105, 30724, 40281, 29946, 30363, 29922, 24991, 34742, 32666, 32691],
                backgroundColor: 'rgba(154, 99, 255, 0.2)',
                borderColor: 'rgb(174, 99, 255)',
                borderWidth: 2
            }]
        },
        options: {
            plugins: {
                legend: { display: false },
                title: {
                    display: true,
                    text: 'Medián hrubé měsíční mzdy účetních specialistů',
                    font: { size: 14, weight: 'bold' }
                },
                tooltip: {
                    callbacks: {
                        label: context => context.raw
                    }
                }
            },
            scales: {
                x: {
                    ticks: { font: { size: 8, weight: 'bold' } },
                    grid: { display: false }
                },
                y: {
                    ticks: { font: { size: 8, weight: 'bold' }, beginAtZero: true },
                    grid: { display: false }
                }
            }
        }
    });  

    const ctx3 = document.getElementById('myChart3').getContext('2d');
    new Chart(ctx3, {
        type: 'line',
        data: {
            labels: ['rok 2009', 'rok 2010', 'rok 2011', 'rok 2012', 'rok 2013', 'rok 2014', 'rok 2015', 'rok 2016', 'rok 2017', 'rok 2018', 'rok 2019', 'rok 2020', 'rok 2021', 'rok 2022', 'rok 2023'],
            datasets: [{
                label: 'Potřebná doba pojištění pro nárok na starobní důchod',
                data: [25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 35, 35, 35, 35],
                borderColor: 'rgb(255, 99, 109)',
                borderWidth: 2,
                fill: false
            }]
        },
        options: {
            plugins: {
                legend: { display: false },
                title: {
                    display: true,
                    text: 'Potřebná doba pojištění pro nárok na starobní důchod',
                    font: { size: 14, weight: 'bold' }
                },
                tooltip: {
                    callbacks: {
                        label: context => context.raw
                    }
                }
            },
            scales: {
                x: {
                    ticks: { font: { size: 8, weight: 'bold' } },
                    grid: { display: false }
                },
                y: {
                    ticks: { font: { size: 8, weight: 'bold' }, beginAtZero: true },
                    grid: { display: false }
                }
            }
        }
    });
});

    const ctx4 = document.getElementById('myChart4').getContext('2d');
    new Chart(ctx4, {
        type: 'line',
        data: {
            labels: ['rok 2005', 'rok 2006', 'rok 2007', 'rok 2008', 'rok 2009', 'rok 2010', 'rok 2011', 'rok 2012', 'rok 2013', 'rok 2014', 'rok 2015', 'rok 2016', 'rok 2017', 'rok 2018', 'rok 2019','rok 2020', 'rok 2021', 'rok 2022', 'rok 2023', 'rok 2024'],
            datasets: [{
                label: 'Graf vývoje ceny 1 OZ zlata v Kč',
                data: [10066, 13673, 15794, 19664, 21981, 27705, 35474, 37640, 31765, 28546, 26130, 28201, 28413, 28672, 31495, 39964, 40550, 40632, 43810, 50372],
                borderColor: 'rgba(30, 195, 68, 0.87)',
                borderWidth: 2,
                fill: false
             }]

        },
        options: {
            plugins: {
                legend: { display: false },
                title: {
                    display: true,
                    text: 'Graf vývoje ceny 1 OZ zlata v Kč',
                    font: { size: 14, weight: 'bold' }
                },
                tooltip: {
                    callbacks: {
                        label: context => context.raw
                    }
                }
            },
            scales: {
                x: {
                    ticks: { font: { size: 8, weight: 'bold' } },
                    grid: { display: false }
                },
                y: {
                    ticks: { font: { size: 8, weight: 'bold' }, beginAtZero: true },
                    grid: { display: false }
                }
            }
        }
    });
console.log(document.getElementById('myChart5'));


const ctx5 = document.getElementById('myChart5').getContext('2d');
new Chart(ctx5, {
    type: 'pie',
    data: {
        labels: [
            "Řemeslníci a kvalifikovaní pracovníci stavební výroby",
            "Malíři a příbuzní pracovníci",
            "Montážní dělníci výrobků a zařízení",
            "Obsluha pojízdných zařízení",
            "Kuchaři",
            "Číšníci, servírky, barmani",
            "Analytici a vývojáři softwaru",
            "Mistři ve stavebnictví",
            "Technici ve fyzikálních oborech",
            "Specialisté ve stavebnictví"
        ],
        datasets: [{
            data: [52800, 32600, 32100, 30500, 28800, 24400, 23600, 22200, 19500, 19300],
            backgroundColor: [
                'rgba(255, 99, 132, 0.8)',
                'rgba(54, 162, 235, 0.8)',
                'rgba(255, 206, 86, 0.8)',
                'rgba(75, 192, 192, 0.8)',
                'rgba(153, 102, 255, 0.8)',
                'rgba(255, 159, 64, 0.8)',
                'rgba(201, 203, 207, 0.8)',
                'rgba(23, 123, 207, 0.8)',
                'rgba(121, 33, 187, 0.8)',
                'rgba(132, 211, 134, 0.8)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        plugins: {
            legend: { display: false }, // Opraven překlep
            title: {
                display: true,
                text: 'Počet chybějící pracovní síly v roce 2030 v ČR',
                font: { size: 16, weight: 'bold' },
                padding: { top: 10, bottom: 20 }
            },
            tooltip: {
                callbacks: {
                    label: context => `${context.label}: ${context.raw} pracovníků`
                },
                titleFont: {
                    size: 16,
                    weight: 'bold'
                },
                bodyFont: {
                    size: 16,
                    weight: 'normal'
                },
                padding: 16,
                backgroundColor: 'rgba(0,0,0,0.8)',
                borderColor: 'rgba(255, 255, 255, 0.8)',
                borderWidth: 1
            }
        },
        scales: {
            x: { display: false },
            y: { display: false }
        }
    }
});

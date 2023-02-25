window.onload = () => {
    const ctx = document.getElementById('chart');

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [
                {
                    label: 'Buea',
                    data: [95, 40, 120, 52, 75, 120],
                    barThickness: 10,
                    borderWidth: 0,
                    backgroundColor: '#5289CC'
                },
                {
                    label: 'Yaounde',
                    data: [50, 70, 40, 20, 40, 40],
                    borderWidth: 1,
                    barThickness: 10,
                    borderWidth: 0,
                    backgroundColor: '#3CC9C9'
                },
                {
                    label: 'Bamenda',
                    data: [100, 50, 30, 10, 60, 20],
                    borderWidth: 1,
                    barThickness: 10,
                    borderWidth: 0,
                    backgroundColor: '#F5A623'
                },
                {
                    label: 'Douala',
                    data: [80, 14, 30, 15, 20, 100],
                    borderWidth: 1,
                    barThickness: 10,
                    borderWidth: 0,
                    borderRadius: {
                        topLeft: Number.MAX_VALUE,
                        topRight: Number.MAX_VALUE,
                    },
                    backgroundColor: '#F55823'
                }
            ]
        },
        options: {
            scales: {
                y: {
                    stacked: true,
                    beginAtZero: true
                },
                x: {
                    stacked: true,
                }
            },
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 50,
                        usePointStyle: true
                    }
                },
            }
        }
    });
}

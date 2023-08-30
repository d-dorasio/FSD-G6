 document.addEventListener("DOMContentLoaded", function() {
            // Generar datos aleatorios para el gráfico
            function generateRandomData() {
                var data = [];
                for (var i = 0; i < 5; i++) {
                    data.push(Math.floor(Math.random() * 1000));
                }
                return data;
            }
    
            // Dibujar el gráfico de barras
            function drawChart() {
                var data = generateRandomData();
                var chart = new Chart(document.getElementById('barChart'), {
                    type: 'bar',
                    data: {
                        labels: ['Mes 1', 'Mes 2', 'Mes 3', 'Mes 4', 'Mes 5'],
                        datasets: [{
                            label: 'Balances',
                            data: data,
                            backgroundColor: 'rgba(53, 16, 61, 0.7)',
                            borderColor: 'rgba(53, 16, 61, 0.5)',
                            borderWidth: 1
                        }]
                    },
                    options: {
                        scales: {
                            y: {
                                beginAtZero: true
                            }
                        }
                    }
                });
            }
    
            // Llamar a la función para dibujar el gráfico
            drawChart();
        });

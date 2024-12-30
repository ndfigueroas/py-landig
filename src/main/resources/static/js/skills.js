const ctx = document.getElementById('skillsChart').getContext('2d');

// Datos del gráfico
const data = {
    labels: ['Tocar Guitarra', 'Tocar Charango', 'Tocar Saxo', 'Java', 'React', 'JS', 'CSS'],
    datasets: [{
        label: 'Habilidades',
        data: [95, 85, 70, 40, 20, 20, 25],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',  // Guitarra (rojo)
            'rgba(54, 162, 235, 0.2)',  // Charango (azul)
            'rgba(255, 206, 86, 0.2)',  // Saxo (amarillo)
            'rgba(75, 192, 192, 0.2)',  // Java (verde)
            'rgba(153, 102, 255, 0.2)',  // React (morado)
            'rgba(255, 159, 64, 0.2)',  // JS (naranja)
            'rgba(0, 255, 255, 0.2)'   // CSS (cian)
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(0, 255, 255, 1)'
        ],
        borderWidth: 1
    }]
};

// Configuración del gráfico
const config = {
    type: 'bar',
    data: data,
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                max: 100,
                ticks: {
                    stepSize: 25, // Definir el intervalo de las barras en el eje Y (25, 50, 75, 100)
                    callback: function(value) {
                        // Personalizar las etiquetas del eje Y
                        switch (value) {
                            case 25:
                                return 'Novato';
                            case 50:
                                return 'Aventurero';
                            case 75:
                                return 'Explorador';
                            case 100:
                                return 'Sabio';
                            default:
                                return '';
                        }
                    }
                }
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }
    }
};

// Crear el gráfico
const myChart = new Chart(ctx, config);
import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';

interface ServerData {
  size: string;
  memory: string;
  cpu: string;
}

const MyChart: React.FC<{ data: ServerData }> = ({ data }) => {
  // Extraer los datos del objeto data
  const { size, memory, cpu } = data;

  // Configurar los datos para el gráfico
  const chartData = {
    labels: ['Tamaño del directorio', 'Memoria usada', 'Uso de CPU'],
    datasets: [
      {
        label: 'Datos',
        data: [parseFloat(size), parseFloat(memory), parseFloat(cpu)],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  // Configurar opciones del gráfico
  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          beginAtZero: true,
        },
      },
    },
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <Bar data={chartData}  />
    </div>
  );
};

export default MyChart
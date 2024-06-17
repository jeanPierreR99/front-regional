import React, { useState, useEffect } from 'react';
import { Doughnut, Bar } from 'react-chartjs-2';
import { Chart, ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import ENDPOINTS from '../../config';

// Register Chart.js components and plugins
Chart.register(ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend, ChartDataLabels);

// Define the data type for the state
interface Data {
  size: number;
  memory: number;
  cpu: number;
}

const MyChart: React.FC = () => {
  const [data, setData] = useState<Data>({
    size: 0,
    memory: 0,
    cpu: 0,
  });

  useEffect(() => {
    // Aquí puedes hacer la petición a tu servidor para obtener los datos
    fetch(ENDPOINTS.GET_SYSTEM)
      .then(response => response.json())
      .then(data => {
        // Verifica que los datos sean correctos antes de asignarlos al estado
        if (data.response && data.response.data) {
          setData({
            size: parseFloat(data.response.data.size.replace(' MB', '')),
            memory: parseFloat(data.response.data.memory.replace(' MB', '')),
            cpu: parseFloat(data.response.data.cpu.replace('%', '')),
          });
          console.log('Datos actualizados:', {
            size: parseFloat(data.response.data.size.replace(' MB', '')),
            memory: parseFloat(data.response.data.memory.replace(' MB', '')),
            cpu: parseFloat(data.response.data.cpu.replace('%', '')),
          });
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const sizeData = {
    labels: ['Tamaño Del Directorio'],
    datasets: [
      {
        label: 'Tamaño',
        data: [data.size],
        backgroundColor: ['#3ce15a52'],
        borderColor: ['#3ce15afa'],
        borderWidth: 1,
      },
    ],
  };

  const memoryData = {
    labels: ['Memoria En Uso'],
    datasets: [
      {
        label: 'Memoria',
        data: [data.memory],
        backgroundColor: ['#e1f10b57'],
        borderColor: ['#e1f10b'],
        borderWidth: 1,
      },
    ],
  };

  const cpuData = {
    labels: ['CPU En Uso', 'CPU Libre'],
    datasets: [
      {
        label: 'CPU',
        data: [data.cpu, 100 - data.cpu],
        backgroundColor: ['#e13c3c57', 'rgba(75, 192, 192, 0.2)'],
        borderColor: ['#e13c3cfa', 'rgba(75, 192, 192, 1)'],
        borderWidth: 1,
      },
    ],
  };

  const options1:any = {
    scales: {
      x: {
        grid: {
          color: '#b7b6b626', // Cambia el color de las líneas del eje x a blanco
        },
        ticks: {
          color: 'black', // Cambia el color del texto de las etiquetas del eje x a blanco
        },
      },
      y: {
        grid: {
          color: '#b7b6b626', // Cambia el color de las líneas del eje y a blanco
        },
        ticks: {
          color: '#ffffff', // Cambia el color del texto de las etiquetas del eje y a blanco
        },
      },
    },
    plugins: {
      datalabels: {
        display: true,
        color: 'black',
        formatter: (value: number) => `${value} MB`,
        font: {
          weight: 'bold',
        },
        anchor: 'center' as const, // Specify the valid type
        align: 'center' as const,  // Specify the valid type
      },
    },
    color:'black'
  };

  const options3:any = {
    color:'black',
    plugins: {
      datalabels: {
        display: true,
        color: 'black',
        formatter: (value: number) => `${value}%`,
        font: {
          weight: 'bold',
        },
        anchor: 'center' as const, // Specify the valid type
        align: 'center' as const,  // Specify the valid type
      },
    },
  };

  return (
    <div className="my-chart text-center p-10 text-white">
      <h1 className='text-[#0306a9] mb-4 text-3xl font-bold'>Métricas Del Sistema</h1>
      <div className="chart-container gap-6 grid md:grid-cols-3 grid-cols-1">
        <div className="chart-item">
          <h2>Tamaño Del Directorio</h2>
          <Bar data={sizeData} options={options1}/>
        </div>
        <div className="chart-item">
          <h2>Memoria En Uso</h2>
          <Bar data={memoryData} options={options1} />
        </div>
        <div className="chart-item">
          <h2>CPU En Usado</h2>
          <Doughnut data={cpuData} options={options3}/>
        </div>
      </div>
    </div>
  );
};

export default MyChart;

import React, { useEffect, useState } from 'react';
import MyChart from '../../components/admin/MyChart';
import ENDPOINTS from '../../config';
const ProjectAdmin: React.FC = () => {
  const [data, setData] = useState<any>({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(ENDPOINTS.GET_SYSTEM);
      const jsonData = await response.json();
      console.log(jsonData)
      setData(jsonData.response.data);
    } catch (error) {
      console.error('Error al obtener los datos:', error);
    }
  };

  return (
    <div>
      <h1>Gráfico de Datos</h1>
  
        {/* <MyChart data={data} /> */}

    </div>
  );
};

export default ProjectAdmin;

import FechtData from "./fechtData";
import React, { useEffect, useState } from "react";

const SoilPlot = () => {
  const [soil, setSoil] = useState(null); // Inicializa con null para gestionar el estado de carga

  useEffect(() => {
    const fetchDataApi = async () => {
      try {
        const data = await FechtData();
        setSoil(data); // Almacena los datos obtenidos
      } catch (error) {
        console.log("Error:", error);
      }
    };
    fetchDataApi();
  }, []); // Ejecutar una sola vez al montar el componente

  if (!soil) {
    // Mientras los datos se están cargando
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Datos de tipos de suelo</h1>
      {Object.keys(soil).map((soilType) => (
        <div key={soilType}>
          <h2>{soilType}</h2>
          <table border="1" cellPadding="5">
            <thead>
              <tr>
                <th>Clay (%)</th>
                <th>Sand (%)</th>
                <th>Silt (%)</th>
              </tr>
            </thead>
            <tbody>
              {soil[soilType].map((composition, index) => (
                <tr key={index}>
                  <td>{composition.clay}</td>
                  <td>{composition.sand}</td>
                  <td>{composition.silt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default SoilPlot;

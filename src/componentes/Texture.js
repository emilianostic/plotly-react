import React, { useEffect, useState } from "react";
import Plot from "react-plotly.js";
import * as d3 from "d3";

const Texture = () => {
  const [plotData, setPlotData] = useState([]);
  const [layout, setLayout] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url =
          "https://gist.githubusercontent.com/davenquinn/988167471993bc2ece29/raw/f38d9cb3dd86e315e237fde5d65e185c39c931c2/data.json";

        const rawData = await d3.json(url); // Usamos await para esperar a que se carguen los datos

        // Mapeo de los datos
        const data = Object.keys(rawData).map((k) => {
          const pts = rawData[k];

          return {
            type: "scatterternary",
            mode: "lines",
            name: k,
            a: pts.map((d) => d.clay),
            b: pts.map((d) => d.sand),
            c: pts.map((d) => d.silt),
            line: { color: "#c00" },
          };
        });

        setPlotData(data);

        // Layout del gráfico
        setLayout({
          ternary: {
            sum: 100,
            aaxis: makeAxis("Clay"),
            baxis: makeAxis("Sand"),
            caxis: makeAxis("Silt"),
          },
          showlegend: false,
          width: 700,
          annotations: [
            {
              showarrow: false,
              text: `Replica of Daven Quinn's <a href="http://bl.ocks.org/davenquinn/988167471993bc2ece29">block</a>`,
              x: 0.15,
              y: 1.1,
            },
          ],
        });
      } catch (error) {
        console.error("Error loading data: ", error);
      }
    };

    fetchData(); // Llamada a la función fetchData
  }, []);

  // Definir la función fuera de useEffect
  function makeAxis(title) {
    return {
      title: title,
      ticksuffix: "%",
      min: 0.01,
      linewidth: 2,
      ticks: "outside",
      ticklen: 8,
      showgrid: true,
    };
  }

  return (
    <div>
      {plotData.length > 0 && (
        <Plot data={plotData} layout={layout} style={{ width: "100%", height: "100%" }} />
      )}
    </div>
  );
};

export default Texture;


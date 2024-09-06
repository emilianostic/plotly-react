
import Plot from 'react-plotly.js'
import React from 'react'


const BarPlot = ()=> {
 
    return (
      <>
         
         <Plot   data={[{
          x:[1,2,3], y:[1,2,3],
          type: 'bar',
          mode: 'lines+markers',
          marker: {color: 'red'}
         }]}
         layout = { {height: 400, width: 800, title: 'Simple Bar Plot'}} />
       
      </>
    )
  }

export default BarPlot
import React from "react";
import Plot from 'react-plotly.js';

const LineChart=( {data} ) =>{
  const xValues = data.map(item => item.date + '/' + item.time); 
  const yValues = data.map(item => item.client_id); 
  var config = { responsive: true, scrollZoom: true }
  return (
    <Plot
      data={[
        {
          x: xValues,
          y: yValues,
          type: 'scatter',
          mode: 'lines+markers',
          marker: { color: 'blue' },
        },
      ]}
      
      layout={{
        autosize:true,
        title: 'Line Chart',
        xaxis: { title: 'Date and Time' },
        yaxis: { title: 'Client Id' },
      }}
      className="w-full"
    config={config}

    />
  );
}

export default LineChart;

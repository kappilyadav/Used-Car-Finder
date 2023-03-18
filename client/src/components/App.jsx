
import React, { useState, useEffect } from 'react';
import '../App.css';
import Map from './Map';



function App() {

  const [data, setData] = useState(null);
  const [plot, setPlot] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:5000/api/data');
      const responseData = await response.json();
      setData(responseData);
    };
    fetchData();
  }, []);

  
  return (
    <div className="App">
      <button onClick={() => {setPlot(!plot)}} className='btn btn-primary btn-lg' type='submit'>Plot Data</button> 
      {data && <Map apiKey={data.key} markers={data.array} plotMarkers={plot}/>}
    </div>
  );
}

export default App;

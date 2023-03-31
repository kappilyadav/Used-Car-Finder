
import React, { useState, useEffect } from 'react';
import '../App.css';
import Map from './Map';



function App() {

  const [data, setData] = useState(null);
  const [plot, setPlot] = useState(false);
  const [searchData, setSearchData] = useState(null);
  const [inputValue, setInputValue] = useState("");


  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://projectx-api-h1q3.onrender.com/api/data');
      const responseData = await response.json();
      setData(responseData);
      setSearchData(responseData.array);
    };
    fetchData();

  }, []);


  const handleChange = async (event) => {
    setInputValue(event.target.value);
  };


  const handleClick = async () => {
    setSearchData(await data.array.filter((item) => {
      return item.Name.includes(inputValue);
    }))

    setPlot(true)
  };



  return (
    <div className="App">
      <input type='text' placeholder='Enter car name' input={inputValue} onChange={handleChange}></input>
      <button onClick={handleClick} className='btn btn-primary btn-md' type='submit'>Find Cars</button>
      <p> *Map may load in sometime. </p>
      <p> *Click on markers to see more details. </p>
      {data && <Map apiKey={data.key} markers={searchData} plotMarkers={plot} />}
    </div>
  );
}

export default App;

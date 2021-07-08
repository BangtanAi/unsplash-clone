import axios from 'axios';
import React from 'react';
import './index.scss';

function App() {
  const[value, setValue] = React.useState("");
  const[results, setResults] = React.useState([])
  const fetchImages=()=>{
    fetch(`https://api.unsplash.com/search/photos?query=&client_id=gLSSdfKNMYT6TQr4WU_bBzmf0r5FwHqRkgCqTd9I6Co&query=${value}&orientation=squarish&per_page=20`)
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      setResults(data.results)
    })
  }
  return (
    <div className="App">
      <div className="searchBlock">
        {/* <span>Search:</span> */}
        <input 
        type="text"
        value={value}
        onChange={(e)=>setValue(e.target.value)} />
        <button onClick={fetchImages}>Send</button>
      </div>
      <div className="gallery">
        {results.map((item, id)=>{
          return <img className="item" key={id} src={item.urls.regular} alt="galleryImg" />
        })
        }
      </div>
    </div>
  );
}

export default App;
